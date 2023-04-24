import { useState, useEffect } from "react";
import { getAllUserOrders } from "../firebase/resevation";

export const useOrders = async (userID) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then((res) => setOrders(res[0]));
  }, [userID]);

  const fetchOrders = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const answer = await Promise.all([getAllUserOrders(userID)]).then(
          (res) => res
        );
        resolve(answer);
      } catch (error) {
        reject(error.message);
      }
    });
  };

  return orders;
};
