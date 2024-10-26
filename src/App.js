// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";   // Import Provider from react-redux
import appRouter from "./components/Routing/Routing";
import store from "./components/store/store.js";        // Import your Redux store
import "./index.css";                     // Import your CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>                {/* Wrap the app with Provider */}
    <RouterProvider router={appRouter} />
  </Provider>
);
