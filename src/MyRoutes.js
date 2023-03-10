import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/pages/AdminPage";
import DetailsPage from "./components/pages/DetailsPage";
import HomePage from "./components/pages/HomePage";
import EditProduct from "./components/product/EditProduct";

const PUBLIC_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
];

const ADMIN_ROUTES = [
  {
    link: "/admin",
    element: <AdminPage />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditProduct />,
    id: 2,
  },
  {
    link: "/detail/:id",
    element: <DetailsPage />,
    id: 2,
  },
];

const MyRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      {ADMIN_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
