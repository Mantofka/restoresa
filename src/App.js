import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import RestaurantsPage from "./components/restaurants/RestaurantsPage";
import SignInPage from "./components/sign-in/SignInPage";
import RegisterPage from "./components/register/RegisterPage";
import RestaurantPrompts from "./components/restaurant-info/RestaurantPrompts";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/restaurants' element={<RestaurantsPage />} />
        <Route path='/restaurants/:id' element={<RestaurantPrompts />} />
        <Route path='/sign-in' element={<SignInPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
