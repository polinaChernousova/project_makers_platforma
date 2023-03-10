import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const DetailsPage = () => {
  const { oneProduct, getOneProduct } = useProductContext();
  console.log(oneProduct);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div>
      {oneProduct ? (
        <Container sx={{ mt: 8 }}>
          <Card
            sx={{
              maxWidth: "100%",
              mb: 10,
            }}
          >
            <CardActionArea
              sx={{
                height: 600,
                display: "flex",
                p: 2,
              }}
            >
              <CardMedia
                sx={{ width: 500, objectFit: "contain" }}
                component="img"
                height="340"
                image={oneProduct.picture}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h3" gutterBottom component="div">
                  {oneProduct.title}
                </Typography>
                <br />
                <Typography variant="h4" component="div" color="text.secondary">
                  {oneProduct.description}
                </Typography>
                <br />

                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    color="text.secondary"
                  >
                    {oneProduct.price}$
                  </Typography>
                </CardContent>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button sx={{ m: 2 }} size="small" variant="contained">
                Add to Bag
              </Button>
            </CardActions>
          </Card>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DetailsPage;
