import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

const Form = ({ isEdit }) => {
  const { createProduct, oneProduct, editProduct } = useProductContext();

  // state add
  const [product, setProduct] = useState(oneProduct);
  // state edit
  const [editedProduct, setEditedProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      setEditedProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleInp(e) {
    let obj = null;
    if (e.target.name === "price") {
      obj = {
        ...product,
        ...editedProduct,
        [e.target.name]: Number(e.target.value),
      };
    } else {
      obj = {
        ...product,
        ...editedProduct,
        [e.target.name]: e.target.value,
      };
    }
    if (!isEdit) {
      setProduct(obj);
    } else {
      setEditedProduct(obj);
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

  function handleSaveEditedProduct() {
    for (let key in editedProduct) {
      if (!editedProduct[key]) {
        alert("empty inputs");
        return;
      }
    }
    editProduct(editedProduct);
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
        value={editedProduct.title || ""}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter description"
        variant="outlined"
        name="description"
        fullWidth
        value={editedProduct.description || ""}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter category"
        variant="outlined"
        name="category"
        fullWidth
        value={editedProduct.category || ""}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter price"
        variant="outlined"
        name="price"
        fullWidth
        value={editedProduct.price || ""}
        onChange={handleInp}
      />
      <TextField
        placeholder="enter url"
        variant="outlined"
        name="picture"
        fullWidth
        value={editedProduct.picture || ""}
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
          onClick={() => handleSaveEditedProduct(editedProduct)}
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
