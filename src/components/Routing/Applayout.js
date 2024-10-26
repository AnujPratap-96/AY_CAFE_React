// src/components/Routing/AppLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../NavBar/Header";
import Footer from "../Footer/Footer";
import Offline from "../Utility/Offline";
import ToastProvider from "../Utility/ToastProvider";
import useOnline from "../hooks/useOnline";
import { UserProvider } from "../hooks/UserContext";
import { useSelector } from "react-redux"; // Import useSelector to access theme state

const AppLayout = () => {
  const isOnline = useOnline();

  // Access the theme properties from the sidebar slice in Redux
  const { backgroundColor, textColor } = useSelector((state) => state.sidebar.theme);

  return (
    <UserProvider>
      <div
        className="app min-h-screen"
        style={{
          backgroundColor: backgroundColor, // Apply background color
          color: textColor,                 // Apply text color
        }}
      >
        {!isOnline ? (
          <Offline />
        ) : (
          <>
            <Header />
            <Outlet />
            <Footer />
            <ToastProvider />
          </>
        )}
      </div>
    </UserProvider>
  );
};

export default AppLayout;
