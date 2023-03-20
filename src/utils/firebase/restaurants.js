import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const getRestauransFromFirebase = new Promise(async (resolve, reject) => {
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
});

export const fetchRestaurants = async () => {
  return await Promise.all([getRestauransFromFirebase]).then((res) => res[0]);
};
