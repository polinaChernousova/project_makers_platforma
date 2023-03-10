import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProductContext();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products ? (
        products.map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ProductList;
