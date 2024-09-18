"use client";

import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ToastProvider({ children }) {
  const contextClass = {
    success: "text-green-600",
    error: "bg-red-600",
    info: "text-gray-600",
    warning: "text-orange-400",
    default: "text-black",
    dark: "text-indigo-600",
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          // contextClass[context?.type || "default"] +
          "bg-white relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={(context) =>
          contextClass[context?.type || "default"] +
          " text-sm font-med block p-3"
        }
        position="top-right"
        autoClose={3000}
        transition={Bounce}
      />
    </>
  );
}

export default ToastProvider;
