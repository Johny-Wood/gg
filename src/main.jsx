import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/root";
import "@/assets/css/bootstrap.min.css";
import "./index.css";
import ErrorPage from "./error-page";
import Account from "./routes/account";
import Layout from "./reusable/Layout";

const router = createHashRouter([
  {
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
