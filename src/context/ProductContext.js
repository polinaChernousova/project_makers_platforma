import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { ACTION_PRODUCTS, API_PRODUCTS } from "../helpers/const";

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
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload.data };
    case ACTION_PRODUCTS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
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

  async function getProducts() {
    try {
      let res = await axios(API_PRODUCTS);
      dispatch({
        type: ACTION_PRODUCTS.GET_PRODUCTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      dispatch({
        type: ACTION_PRODUCTS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function editProduct(newProduct) {
    try {
      await axios.patch(`${API_PRODUCTS}/${newProduct.id}`, newProduct);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API_PRODUCTS}/${id}`);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  const values = {
    createProduct,
    getProducts,
    getOneProduct,
    editProduct,
    deleteProduct,
    oneProduct: state.oneProduct,
    products: state.products,
    productToEdit: state.productToEdit,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
