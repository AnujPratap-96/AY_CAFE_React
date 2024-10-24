// src/components/Routing/AppLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../NavBar/Header";
import Footer from "../Footer/Footer";
import Offline from "../Utility/Offline";
import ToastProvider from "../Utility/ToastProvider";
import useOnline  from "../hooks/useOnline";
import { UserProvider } from "../hooks/UserContext";
import { Provider } from "react-redux";
import store from "../store/store";

const AppLayout = () => {
  const isOnline = useOnline();
  
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="app min-h-screen">
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
    </Provider>
  );
};

export default AppLayout;
