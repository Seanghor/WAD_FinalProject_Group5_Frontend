import { React, useState } from "react";
import "../.././pages/styles/home.css";
import Grid from "@mui/material/Grid";
import {
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button,
  Stack,
  Rating,
  Card,
} from "@mui/material";
import Divider from "@mui/material/Divider";
const ProductCard = (prop) => {
  return (
    <Grid className="col-md-3">
      <Card sx={{ maxWidth: 420 }} style={{ height: 620, margin: 25 }}>
        <CardActionArea>
          <CardMedia
            style={{
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              padding: 3,
            }}
            component="img"
            height="260"
            image={prop.img}
            alt="green iguana"
          />
          <CardContent style={{ paddingLeft: 20 }}>
            <Typography
              gutterBottom
              variant="h5"
              color=""
              style={{ fontWeight: "500" }}
            >
              {prop.name}
            </Typography>
            <Typography
              gutterBottom
              variant="text.secondary"
              color="text.secondary"
              style={{ fontWeight: "500" }}
            >
              {prop.desc}
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              style={{ justifyContent: "flex-end" }}
            >
              <Typography
                variant="text.secondary"
                marginRight={3}
                marginTop={2}
                style={{
                  fontWeight: "bold",
                  letterSpacing: 0,
                  color: "grey",
                  fontSize: 40,
                }}
              >
                ${prop.newPrice}
              </Typography>
              <Stack direction="column" paddingLeft={5}>
                <Typography
                  gutterBottom
                  variant="h6"
                  marginTop={1}
                  style={{
                    color: "red",
                    textAlign: "end",
                    paddingRight: 10,
                    fontFamily: "Merienda",
                  }}
                >
                  {prop.discount}% off
                </Typography>
                <Divider
                  sx={{
                    bgcolor: "grey",
                    borderBottomWidth: 1,
                    marginBottom: 1,
                  }}
                  size="smal"
                />
                <Rating
                  name="read-only"
                  variant="outlined"
                  value={5}
                  readOnly
                  style={{ alignItems: "flex-end", paddingLeft: 35 }}
                />
              </Stack>
            </Stack>
          </CardContent>
          <CardActions style={{ paddingLeft: 20, marginTop: 30 }}>
            <Button
              variant="outlined"
              color="primary"
              className="card4"
              sx={{ width: 120, height: 40, padding: 1, margin: 0 }}
            >
              Add to cart
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProductCard;
