import React from "react";
import ReactDOM from "react-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";

import Team from "./components/Team";
import Oneplayer from "./pages/Oneplayer";
import Administration from "./pages/Admin/Administration";
import AdminArticles from "./pages/Admin/AdminArticles";
import Dashboard from "./pages/Admin/Dashboard";
import Contact from "./pages/Contact/Contact";

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
          return connexion
            .get(`/team`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/team/:id",
        element: <Oneplayer />,
        loader: ({ params }) => {
          return connexion
            .get(`/team/${params.id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/contact",
        element: <Contact />,
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
