import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/pages/AdminPage";
import EditProduct from "./components/product/EditProduct";

export const ADMIN_ROUTES = [
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
];

const MyRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
