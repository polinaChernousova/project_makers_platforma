import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

//cart
export const calcTotalPrice = (products) => {
  return products.reduce((prevPrice, current) => {
    return (prevPrice += current.subPrice);
  }, 0);
};

export const calcSubPrice = (product) => +product.count * product.item.price;

//admin

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();

  function isAllowed() {
    if (user.email === "admin@gmail.com") return true;
    return false;
  }
  return isAllowed() ? <Outlet /> : <Navigate to="/login" />;
};
