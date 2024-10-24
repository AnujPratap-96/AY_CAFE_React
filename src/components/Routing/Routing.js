// src/components/Routing/Routing.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Applayout.js";
import Body from "../Body/Body";
import AboutWrapper from "../About US/AboutWrapper";
import Error from "../Utility/Error";
import ContactWrapper from "../Contact Us/ContactWrapper";
import RestaurantMenu from "../Restaurant Menu/RestaurantMenuDetails";
import SignIn from "../NavBar/SignIn";
import Signup from "../NavBar/SignUp";
import SelectedFoodWrapper from "../SelectedFoodPage/SelectedFoodWrapper";
import Cart from "../Cart/MainCart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutWrapper /> },
      { path: "/contact", element: <ContactWrapper /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      { path: "/login", element: <SignIn /> },
      { path: "/signup", element: <Signup /> },
      { path: "/selectedDish", element: <SelectedFoodWrapper /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default appRouter;
