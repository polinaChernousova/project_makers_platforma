import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const Form = ({ isEdit }) => {
  const { createProduct, oneProduct } = useProductContext();

  const [product, setProduct] = useState(oneProduct);

  function handleInp(e) {
    let obj = null;
    if (e.target.name === "price") {
      obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
    } else {
      obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
    }
    if (!isEdit) {
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct({
      title: "",
      description: "",
      category: "",
      price: "",
      picture: "",
    });
  }

  return (
    <FormControl
      sx={{ gap: "20px", width: "100%", margin: "50px auto" }}
      color="success"
    >
      <TextField
        placeholder="enter title"
        variant="outlined"
        name="title"
        fullWidth
        value={product.title}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter description"
        variant="outlined"
        name="description"
        fullWidth
        value={product.description}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter category"
        variant="outlined"
        name="category"
        fullWidth
        value={product.category}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter price"
        variant="outlined"
        name="price"
        fullWidth
        value={product.price}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter url"
        variant="outlined"
        name="picture"
        fullWidth
        value={product.picture}
        onChange={handleInp}
      />
      {isEdit ? (
        <Button
          sx={{
            bgcolor: "#8C2CEF",
            color: "#fff",
            "&:hover": { bgcolor: "#8125DC" },
          }}
          variant="outlined"
          fullWidth
          size="large"
        >
          Save changes
        </Button>
      ) : (
        <Button
          sx={{
            bgcolor: "#8C2CEF",
            color: "#fff",
            "&:hover": { bgcolor: "#8125DC" },
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => addProduct(product)}
        >
          Add
        </Button>
      )}
    </FormControl>
  );
};

export default Form;
