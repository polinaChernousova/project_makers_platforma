import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import EditProduct from "./components/product/EditProduct";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import CartPage from "./pages/CartPage";
import { ProtectedRoutes } from "./helpers/functions";

const PUBLIC_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
  {
    link: "/detail/:id",
    element: <DetailsPage />,
    id: 2,
  },
  {
    link: "/register",
    element: <Register />,
    id: 3,
  },
  {
    link: "/login",
    element: <Login />,
    id: 4,
  },
  {
    link: "/cart",
    element: <CartPage />,
    id: 4,
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
];

const MyRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      <Route element={<ProtectedRoutes />}>
        {ADMIN_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Route>
    </Routes>
  );
};

export default MyRoutes;
