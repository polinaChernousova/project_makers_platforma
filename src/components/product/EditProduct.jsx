import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import Form from "../form/Form";

const EditProduct = () => {
  const { getOneProduct } = useProductContext();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default EditProduct;
