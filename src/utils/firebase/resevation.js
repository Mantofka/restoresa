import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const sendPaymentToDatabase = async (userID, paymentDetails) => {
  const usersRef = collection(db, "users");
  const userRef = doc(db, "users", userID);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const { payments } = userSnap.data();
    await setDoc(doc(usersRef, userID), {
      ...userSnap.data(),
      payments: [...payments, paymentDetails],
    });
  } else {
    await setDoc(doc(usersRef, userID), {
      ...userSnap.data(),
      payments: [paymentDetails],
    });
  }
};

export const sendOrderToDatabase = async (userID, order) => {
  const usersRef = collection(db, "users");
  const userRef = doc(db, "users", userID);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const { orders } = userSnap.data();
    await setDoc(doc(usersRef, userID), {
      ...userSnap.data(),
      orders: [...orders, order],
    });
  } else {
    await setDoc(doc(usersRef, userID), {
      ...userSnap.data(),
      orders: [order],
    });
  }
};

export const getAllUserOrders = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userRef = doc(db, "users", userID);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const { orders } = userSnap.data();
        resolve(orders);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error.message);
    }
  });
};
