import { Box } from "@mui/material";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import FilterProduct from "./FilterProduct";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, productsTotalCount } = useProductContext();
  // useEffect(() => {
  //   getProducts();
  // }, []);

  const [paginateParams, setPaginateParams] = useSearchParams();

  const [page, setPage] = useState(
    paginateParams.get("_page") ? paginateParams.get("_page") : 1
  );

  const [limit, setLimit] = useState(
    paginateParams.get("_limit") ? paginateParams.get("_limit") : 3
  );

  useEffect(() => {
    setPaginateParams({
      _page: page,
      _limit: limit,
    });
  }, []);

  useEffect(() => {
    setPaginateParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getProducts();
  }, [paginateParams]);
  return (
    <>
      <FilterProduct />
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {products ? (
            products.map((item) => <ProductCard item={item} key={item.id} />)
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>
      </div>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",

          m: 5,
        }}
      >
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={page}
          pageSize={limit}
          defaultCurrent={1}
          total={productsTotalCount}
        />
      </Box>
    </>
  );
};

export default ProductList;
