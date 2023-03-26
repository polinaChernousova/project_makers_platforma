import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  picture: "",
};
const Form = ({ isEdit }) => {
  const { createProduct, oneProduct, editProduct } = useProductContext();

  const [product, setProduct] = useState(init);

  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }

  function handleSaveEditedProduct() {
    for (let key in product) {
      if (!product[key]) {
        alert("empty inputs");
        return;
      }
    }
    editProduct(product);
    setProduct(init);
    navigate("/");
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
        onChange={handleInp}
        value={product.title}
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
          onClick={handleSaveEditedProduct}
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
          onClick={addProduct}
        >
          Add
        </Button>
      )}
    </FormControl>
  );
};

export default Form;
