import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import RestaurantsPage from "./components/restaurants/RestaurantsPage";
import SignInPage from "./components/sign-in/SignInPage";
import RegisterPage from "./components/register/RegisterPage";
import RestaurantPrompts from "./components/restaurant-info/RestaurantPrompts";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { loginUserSuccess } from "./redux/reducers/user/user.actions";

import { useSelector, useDispatch } from "react-redux";
import { selectUserAuthentication } from "./redux/reducers/user/user.selectors";

import SpecificRestaurant from "./components/restaurant/individual/IndividualRestaurantMenu"; // rename
import { resizeScreen } from "./redux/reducers/ui/ui.actions";

function App() {
  const isAuthenticated = useSelector(selectUserAuthentication);
  const dispatch = useDispatch();

  const handleScreenResize = (e) => {
    dispatch(resizeScreen(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(loginUserSuccess({ displayName, uid, email }));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/restaurants' element={<RestaurantsPage />} />
        <Route path='/restaurants/:id' element={<RestaurantPrompts />} />
        <Route path='/restaurants/:id/food' element={<SpecificRestaurant />} />
        {!isAuthenticated && (
          <Route path='/sign-in' element={<SignInPage />}></Route>
        )}
        {!isAuthenticated && (
          <Route path='/register' element={<RegisterPage />}></Route>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
