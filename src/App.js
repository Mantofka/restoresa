import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import RestaurantsPage from "./components/restaurants/RestaurantsPage";
import SignInPage from "./components/sign-in/SignInPage";
import RegisterPage from "./components/register/RegisterPage";
import RestaurantPrompts from "./components/restaurant-info/RestaurantPrompts";


import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { loginUserSuccess } from "./redux/reducers/user/user.actions";

import { useSelector, useDispatch } from "react-redux";
import { selectUserAuthentication } from "./redux/reducers/user/user.selectors";
import IndividualRestaurant from "./components/restaurant/Restaurant";
import SpecificRestaurant from "./components/restaurant/individual/IndividualRestaurantMenu" // rename 

function App() {
  const isAuthenticated = useSelector(selectUserAuthentication);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("ahaa");
        const { displayName, email, uid } = user;
        dispatch(loginUserSuccess({ displayName, uid, email }));
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/restaurants' element={<RestaurantsPage />} />
        <Route path='/restaurants/:id' element={<RestaurantPrompts />} />
        <Route path='/individual/' element={<SpecificRestaurant/>}></Route>

        {!isAuthenticated && (
          <Route path='/sign-in' element={<SignInPage />}></Route>
        )}
        {!isAuthenticated && (
          <Route path='/register' element={<RegisterPage />}></Route>
        )}
      </Routes>
    </>
  );
}

export default App;
