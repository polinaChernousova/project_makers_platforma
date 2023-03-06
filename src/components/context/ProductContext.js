import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { API_PRODUCTS } from "../../helpers/const";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const INIT_STATE = {
  oneProduct: {
    title: "",
    description: "",
    category: "",
    price: "",
    picture: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newProduct) {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (err) {
      console.log(err);
    }
  }

  const values = {
    createProduct,
    oneProduct: state.oneProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
