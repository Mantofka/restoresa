import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { v4 as uuidv4 } from "uuid";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  writeBatch,
  doc,
  getFirestore,
  collection,
  setDoc,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAaHz8eFLp2RWpk4NddTn1-X4Ojj1WR4B4",
  authDomain: "restoresa-65368.firebaseapp.com",
  projectId: "restoresa-65368",
  storageBucket: "restoresa-65368.appspot.com",
  messagingSenderId: "255475865993",
  appId: "1:255475865993:web:c13ded1b0c174946952958",
  measurementId: "G-YFZK1YT2YF",
};

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
    const { type, restaurant } = foods[index];
    let filteredFoods = modifiedFoods.filter(
      (food) =>
        food.type === foods[index].type &&
        food.restaurant === foods[index].restaurant
    );
    let array = [];
    filteredFoods.forEach((food) => {
      const { title, description, price, imageUrl } = food;
      array.push({
        title,
        description,
        price,
        imageUrl,
        id: uuidv4(),
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

export const pushTable = async () => {
  await addDoc(collection(db, "tables"), {
    restaurant: doc(db, "restaurants/ngIifs0kJy7VXs7iD9HW"),
    size: 6,
    times: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 9,
        minute: 0,
      },
      {
        hour: 10,
        minute: 0,
      },
      {
        hour: 12,
        minute: 0,
      },
      {
        hour: 13,
        minute: 0,
      },
      {
        hour: 14,
        minute: 0,
      },
      {
        hour: 15,
        minute: 0,
      },
      {
        hour: 17,
        minute: 0,
      },
      {
        hour: 18,
        minute: 0,
      },
      {
        hour: 20,
        minute: 0,
      },
    ],
    busyness: [
      {
        date: "2023-03-22",
        hour: 8,
        minute: 0,
      },
      {
        date: "2023-03-22",
        hour: 12,
        minute: 0,
      },
      {
        date: "2023-03-22",
        hour: 18,
        minute: 0,
      },
      {
        date: "2023-03-22",
        hour: 20,
        minute: 0,
      },
    ],
  });
};
