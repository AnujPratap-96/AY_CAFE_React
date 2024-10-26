import React from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from 'react-redux'; // Import useSelector
import "react-toastify/dist/ReactToastify.css";
import "./toastStyle.css"; // Import the custom styles

export default function ToastProvider() {
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName={`custom-toast-container ${theme.textColor}`} // Use theme.textColor
        bodyClassName={`${theme.textColor}`} // Set text color for toast body
        style={{ backgroundColor: theme.backgroundColor }} // Set background color for toasts
      />
    </>
  );
}
