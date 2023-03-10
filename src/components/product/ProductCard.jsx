import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          maxWidth: 320,
          maxHeight: "550px",
          m: "30px",
          p: 1,
        }}
      >
        <CardMedia
          sx={{
            maxHeight: "200px",

            objectFit: "contain",
          }}
          image={item.picture}
          title="product img"
          component="img"
        />
        <CardContent
          sx={{
            maxHeight: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            style={{
              display: "flex",
              flexDirection: "column-reverse",
            }}
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
