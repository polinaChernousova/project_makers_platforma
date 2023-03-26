import { createContext, useContext, useReducer } from "react";
import { ACTION_CART } from "../helpers/const";
import { calcSubPrice, calcTotalPrice } from "../helpers/functions";

const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_CART.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    cart.products.push(newProduct);
    // используем строннюю функцию для сложения
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  }

  function getProductFromCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
    }
    dispatch({
      type: ACTION_CART.GET_CART,
      payload: cart,
    });
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let obj = cart.products.find((elem) => elem.item.id === id);
      return obj ? true : false;
    }
  }

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    getProductFromCart();
  }

  const changeProductCount = (count, id) => {
    if (count < 1) {
      alert("Count of product can not negative!");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    getProductFromCart();
  };

  const values = {
    addProductToCart,
    getProductFromCart,
    checkProductInCart,
    deleteProductInCart,
    changeProductCount,
    cart: state.cart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContext;
