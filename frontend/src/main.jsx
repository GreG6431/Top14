import React from "react";
import ReactDOM from "react-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import Team from "./components/Team";
import Oneplayer from "./pages/Oneplayer";
import Administration from "./pages/Admin/Administration";
import AdminArticles from "./pages/Admin/AdminArticles";
import Dashboard from "./pages/Admin/Dashboard";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Team />,
        loader: async () => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/team`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/team/:id",
        element: <Oneplayer />,
        loader: ({ params }) => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/team/${params.id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
  {
    path: "/administration",
    element: <Administration />,
    children: [
      {
        path: "articles",
        element: <AdminArticles />,
      },
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
