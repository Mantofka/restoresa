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

  const tables = [];

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

  query
    .where("restaurant", "==", req.query.restaurant)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        tables.push(doc.data());
      });
      res.send(tables);
    });
});

//   .then((docRef) => {
//     return admin.firestore().getAll(...docRef);
//   }),
//   .then((docSnapshots) => {
//     for (const docSnapshot of docSnapshots) {
//       if (docSnapshot.exists) {
//         tables.push(docSnapshot.data());
//       }
//     }
//   })
//   .then(() => {
//     return tables;
//   }),

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
