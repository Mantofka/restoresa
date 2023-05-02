import React, { Suspense, useEffect } from "react";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";
import NoPage from "./components/no-page/no-page";

import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { loginUserSuccess } from "./redux/reducers/user/user.actions";

import { useSelector, useDispatch } from "react-redux";
import { selectUserAuthentication } from "./redux/reducers/user/user.selectors";

import SpecificRestaurant from "./components/restaurant/individual/IndividualRestaurantMenu"; // rename
import { resizeScreen } from "./redux/reducers/ui/ui.actions";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LayoutContainer } from "./utils/styles/styles";
import Loader from "./components/loader/Loader";

const queryClient = new QueryClient();
const RestaurantsPage = React.lazy(() =>
  import("./components/restaurants/RestaurantsPage")
);
const SignInPage = React.lazy(() => import("./components/sign-in/SignInPage"));
const RegisterPage = React.lazy(() =>
  import("./components/register/RegisterPage")
);
const RestaurantPrompts = React.lazy(() =>
  import("./components/restaurant-info/RestaurantPrompts")
);
const IndividualOrder = React.lazy(() =>
  import("./components/individual-order/IndividualOrder")
);
const ProfilePage = React.lazy(() =>
  import("./components/profile/ProfilePage")
);
const PaymentPage = React.lazy(() =>
  import("./components/payment/PaymentPage")
);
const Progress = React.lazy(() =>
  import("./components/payment-progress/Progress")
);

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
        const { displayName, email, uid, phoneNumber } = user;
        dispatch(loginUserSuccess({ displayName, uid, email, phoneNumber }));
        // navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route
            path='/restaurants'
            element={
              <SuspenseContainer>
                <RestaurantsPage />
              </SuspenseContainer>
            }
          />

          <Route
            path='/restaurants/:id'
            element={
              <SuspenseContainer>
                <RestaurantPrompts />
              </SuspenseContainer>
            }
          />
          <Route
            path='/restaurants/:id/food'
            element={
              <SuspenseContainer>
                <SpecificRestaurant />
              </SuspenseContainer>
            }
          />
          <Route
            path='/payment'
            element={
              <SuspenseContainer>
                <PaymentPage />
              </SuspenseContainer>
            }
          />
          <Route
            path='/payment-status'
            element={
              <SuspenseContainer>
                <Progress />
              </SuspenseContainer>
            }
          />

          <Route
            path='/sign-in'
            element={
              <SuspenseContainer>
                <SignInPage />
              </SuspenseContainer>
            }
          ></Route>

          <Route
            path='/register'
            element={
              <SuspenseContainer>
                <RegisterPage />
              </SuspenseContainer>
            }
          ></Route>

          {isAuthenticated && (
            <Route
              path='/me'
              element={
                <SuspenseContainer>
                  <ProfilePage />
                </SuspenseContainer>
              }
            />
          )}

          {isAuthenticated && (
            <Route
              path='/order/:id'
              element={
                <SuspenseContainer>
                  <IndividualOrder />
                </SuspenseContainer>
              }
            />
          )}
          <Route path='*' element={<NoPage />}></Route>
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

const SuspenseContainer = ({ children }) => (
  <Suspense
    fallback={
      <LayoutContainer>
        <Loader />
      </LayoutContainer>
    }
  >
    {children}
  </Suspense>
);

export default App;
