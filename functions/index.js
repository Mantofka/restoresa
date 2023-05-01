/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51MxUGcAW162dDEIYuzNESml3i1c4qGygjXDEopV95QmENcEHxalh73gAapAPwEWqYnt3B2WZ53ASX9aQKiUK4wg300jbpflJkR"
);

const admin = require("firebase-admin");
admin.initializeApp();

exports.getPaymentIntent = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const price = req.body.price;
      console.log(Number(req.body.price));
      const paymentIntent = await stripe.paymentIntents.create({
        amount: (price * 100).toFixed(0),
        currency: "eur",
      });
      res.send({ client_secret: paymentIntent.client_secret });
    } catch (error) {
      res.send("Error occured.");
    }
  });
});

exports.changePhoneNumber = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const { uid, phoneNumber } = req.body;
    console.log(uid, phoneNumber);
    admin
      .auth()
      .updateUser(uid, {
        phoneNumber,
      })
      .then(() => {
        res.json({ state: "success", text: "Updated Successfully!" });
      })
      .catch((err) => {
        res.json({ state: "error", text: err.message });
      });
  });
});

exports.changePassword = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const { uid, password } = req.body;
    console.log(uid, password);
    admin
      .auth()
      .updateUser(uid, {
        password: password,
      })
      .then(() => {
        res.json({ state: "success", text: "Updated Successfully!" });
      })
      .catch((err) => {
        res.json({ state: "error", text: err.message });
      });
  });
});

exports.getTablesByPrompts = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const query = admin.firestore().collection("tables");

    let tableToOffer;
    let counter = 0;

    // console.log(req.query.restaurant);
    // console.log(req.query.seats);

    await query
      .where("restaurant", "==", `${req.query.restaurant}`)
      .where("size", ">=", Number(req.query.seats))
      .orderBy("size", "asc")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (counter === 0) {
            const table = { id: doc.id, ...doc.data() };
            const { times, busyness } = table;
            const modifiedTable = {
              id: table.id,
              timeSlots: [],
            };

            times.forEach(({ hour, minute }) => {
              if (
                busyness.find(
                  (busySlot) =>
                    busySlot.hour === hour &&
                    busySlot.minute === minute &&
                    busySlot.date === req.query.date
                )
              ) {
                modifiedTable.timeSlots = [
                  ...modifiedTable.timeSlots,
                  {
                    hour,
                    minute,
                    isAllocated: true,
                  },
                ];
              } else {
                counter++;
                modifiedTable.timeSlots = [
                  ...modifiedTable.timeSlots,
                  {
                    hour,
                    minute,
                    isAllocated: false,
                  },
                ];
              }
            });
            if (counter > 0) {
              res.json({ data: modifiedTable });
            }
          }
        });
      })
      .catch((err) => {
        res.send(err.message);
      });
    console.log(tableToOffer);
  });
});
