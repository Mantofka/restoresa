import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const getFoodByRestaurantID = async (restaurantID) => {
  let q = query(
    collection(db, "foods"),
    where("restaurant", "==", restaurantID)
  );

  const querySnapshot = await getDocs(q);
  const foodArray = [];
  //   let foods = [];
  querySnapshot.forEach((doc) => {
    foodArray.push({
      id: doc.id,
      ...doc.data(),
    });
    // foods.push(doc.data().restaurant.id);
  });
  return foodArray;
};
