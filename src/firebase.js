// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  writeBatch,
  doc,
  getFirestore,
  collection,
  setDoc,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaHz8eFLp2RWpk4NddTn1-X4Ojj1WR4B4",
  authDomain: "restoresa-65368.firebaseapp.com",
  projectId: "restoresa-65368",
  storageBucket: "restoresa-65368.appspot.com",
  messagingSenderId: "255475865993",
  appId: "1:255475865993:web:c13ded1b0c174946952958",
  measurementId: "G-YFZK1YT2YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const onAuthState = () => {
  return onAuthStateChanged(auth, (user) => user);
};

export const handleBatchPush = async (foods) => {
  let batch = writeBatch(db);
  let modifiedFoods = [...foods];
  for (let index = 0; index < foods.length; index++) {
    // console.log(modifiedFoods.length);
    const { type, restaurant } = foods[index];
    let filteredFoods = modifiedFoods.filter(
      (food) =>
        food.type === foods[index].type &&
        food.restaurant === foods[index].restaurant
    );
    console.log(filteredFoods);
    let array = [];
    filteredFoods.forEach((food) => {
      const { title, description, price } = food;
      array.push({
        title,
        description,
        price,
      });
    });

    if (filteredFoods.length !== 0) {
      let foodRef = doc(collection(db, "foods"));
      batch.set(foodRef, {
        type,
        restaurant,
        foods: array,
      });

      modifiedFoods = modifiedFoods.filter(
        (food) =>
          food.type !== foods[index].type ||
          food.restaurant !== foods[index].restaurant
      );
      await batch.commit();
      batch = writeBatch(db);
    }
  }
};

// export const pushTable = async () => {
//   await addDoc(collection(db, "tables"), {
//     restaurant: doc(db, "restaurants/3Bh14ojrNMtbrbCaR8ne"),
//     size: 4,
//     busyness: [
//       {
//         date: "2023-03-19",
//         hour: 13,
//         minute: 30,
//       },
//       {
//         date: "2023-03-19",
//         hour: 17,
//         minute: 30,
//       },
//     ],
//   });
// };
