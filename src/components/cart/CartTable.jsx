import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Container, MenuItem, Select } from "@mui/material";
import "./cart.css";
import { useCartContext } from "../../context/CartContext";

const CartTable = ({ cart }) => {
  const { deleteProductInCart, changeProductCount } = useCartContext();
  return (
    <div>
      <Container>
        <div className="bag-content">
          <div className="header">
            <h1 className="bag-header">Review your bag.</h1>
            <div className="bag-header-message">
              <span>Free delivery and free returns.</span>
            </div>
          </div>
          {cart.products?.map((elem, index) => (
            <div key={index} className="bg-card">
              <Card
                sx={{
                  display: "flex",
                  marginTop: "100px",
                  width: "570px",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    m: 3,
                  }}
                >
                  <Typography component="div" variant="h5">
                    {elem.item.title}
                    <br />
                  </Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{
                      width: "150px",
                    }}
                    value={elem.count}
                    onChange={(e) =>
                      changeProductCount(e.target.value, elem.item.id)
                    }
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    m: 3,
                  }}
                >
                  <Typography sx={{ fontSize: "25px" }}>
                    SubPrice: ${elem.subPrice}.00
                  </Typography>
                  <CardMedia
                    component="img"
                    sx={{ width: 251, objectFit: "cover", height: "220px" }}
                    image={elem.item.picture}
                    alt="Live from space album cover"
                  />
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ m: "5 0" }}
                    onClick={() => deleteProductInCart(elem.item.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </Card>
            </div>
          ))}
          <Box className="bag_total-label">
            <Typography
              sx={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 600,
                color: "#1d1d1f",
                mt: 1,
                justifyContent: "space-between",
              }}
              variant="h6"
              component="div"
            >
              Total price: {cart?.totalPrice}
              <Button variant="contained" sx={{ height: "20px", p: 2 }}>
                BUY NOW
              </Button>
            </Typography>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default CartTable;
