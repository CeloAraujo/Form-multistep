import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import FormPage from "./pages/FormPage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/Form-multistep/",
    element: <App />,
    children: [
      {
        path: "/Form-multistep/",
        element: <FormPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

// Check if the root element exists and is an HTMLElement
if (!(rootElement instanceof HTMLElement)) {
  throw new Error("No root element found");
}

// Now we are sure that rootElement is not null
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);