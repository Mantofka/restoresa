import {
  collection,
  query,
  getDocs,
  doc,
  where,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const getTablesByRestaurant = async (restaurantId, seats) => {
  try {
    let q = query(
      collection(db, "tables"),
      where("restaurant", restaurantId),
      where("size", ">=", seats),
      orderBy("size", "asc")
    );

    const docSnap = await getDocs(q);
    const tables = [];
    docSnap.forEach((doc) => {
      tables.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    throw new Error("There is no restaurant with the given id.");
  } catch (error) {
    throw new Error(error.message);
  }
};


export const updateTableBusyness = async (restaurantID, seats, timeSlot) => {
  try {
    const { hour, minute, date } = timeSlot;
    let q = query(
      collection(db, "tables"),
      where("restaurant", "==", restaurantID),
      where("size", ">=", seats),
      orderBy("size", "asc")
    );
    const docSnap = await getDocs(q);
    let tableId;
    let tableInformation;

    docSnap.forEach((doc) => {
      const found = doc
        .data()
        .busyness.findIndex(
          (slot) =>
            slot.date === date && slot.hour === hour && slot.minute === minute
        );
      if (found === -1) {    
        tableId = doc.id;
        tableInformation = doc.data();
        return doc.id;
      }
    });

    if (!tableId) throw new Error("Cannot find free tables.");

    const currentTable = doc(db, "tables", tableId);
    updateDoc(currentTable, {
      busyness: [...tableInformation.busyness, { date, hour, minute }],
    });
  } catch (error) {
    console.log(error);
  }
};
