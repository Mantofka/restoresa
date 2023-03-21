import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase";

// const getTablesByRestaurant = new Promise(async (resolve, reject) => {
try {
  let q = query(collection(db, "restaurants"));

  const querySnapshot = await getDocs(q);

  const restaurants = [];
  querySnapshot.forEach((doc) => {
    restaurants.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  resolve(restaurants);
} catch (error) {
  reject(error.message);
}
// });

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

export const fetchRestaurants = async () => {
  return await Promise.all([getRestauransFromFirebase]).then((res) => res[0]);
};
