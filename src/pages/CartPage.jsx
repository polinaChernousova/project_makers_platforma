import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartTable from "../components/cart/CartTable";
import { useCartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCartContext();
  console.log(cart.products);
  const navigate = useNavigate();

  return (
    <>
      {cart.products.length > 0 ? (
        <CartTable cart={cart} />
      ) : (
        <Container>
          <div className="bag-content">
            <div className="header">
              <h1 className="bag-header"> Your bag is empty. </h1>
              <div className="bag-header-message">
                <span>Sign in to see if you have any saved items.</span>
                <span style={{ marginLeft: "8px" }}>Or continue shopping.</span>
              </div>
            </div>
            <div className="bag-buttons">
              <button onClick={() => navigate("/login")}>Sign In</button>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default CartPage;
