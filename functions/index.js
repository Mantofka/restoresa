/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

exports.getTablesByPrompts = functions.https.onRequest(async (req, res) => {
  //   const seats = req.query.seats;
  //   const date = req.query.date;
  //   const hour = req.query.hour;
  //   const minute = req.query.minute;

  //   const db = admin.firestore();

  //   admin
  //     .firestore()
  //     .collection("tables")
  //     .listDocuments()
  //     .then((docRef) => {
  //       return admin.firestore().getAll(...docRef);
  //     })
  //     .then((docSnapshots) => {
  //       for (const docSnapshot of docSnapshots) {
  //         if (docSnapshot.exists) {
  //           tables.push(docSnapshot.data());
  //         }
  //       }
  //     })
  //     .then(() => {
  //       return tables;
  //     });

  //   query(
  //     collection(db, "foods"),
  //     where("restaurant", "==", restaurantID)
  //   );

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
