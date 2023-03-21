import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";
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

export const getRestaurantFromFirebase = async (restaurantId) => {
  try {
    const restaurantRef = doc(db, "restaurants", restaurantId);

    const docSnap = await getDoc(restaurantRef);
    if (docSnap.exists) {
      return docSnap.data();
    }
    throw new Error("There is no restaurant with the given id.");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchRestaurants = async () => {
  return await Promise.all([getRestauransFromFirebase]).then((res) => res[0]);
};
