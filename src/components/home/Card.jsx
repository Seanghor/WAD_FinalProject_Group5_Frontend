import React from "react";
import "../.././pages/styles/home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const Cards = (prop) => {
  return (
    <Grid className="col-md-3" padding={5}>
      <Grid className="">
        <Card style={{ height: 720 }} className="card2 card3">
          <CardActionArea>
            <Stack>
              <CardMedia
                className="background-img"
                component="img"
                image="https://wallpaperaccess.com/full/221443.jpg"
                alt="green iguana"
              />
              <Stack className="overlay">
                <CardMedia
                  component="img"
                  image={prop.img}
                  alt="green iguana"
                />
              </Stack>
            </Stack>
            <CardContent style={{ marginTop: 125 }}>
              <Typography style={{ textAlign: "center" }}>
                <Typography
                  variant="text"
                  marginRight={3}
                  component="div"
                  className="price"
                  fontSize={30}
                >
                  ${prop.newPrice}
                </Typography>

                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{
                    marginTop: 15,
                    fontFamily: "Merienda",
                    fontWeight: 600,
                  }}
                >
                  {prop.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="text.secondary"
                  color="text.secondary"
                  component="div"
                  className="desc"
                >
                  {prop.desc}
                </Typography>
              </Typography>
            </CardContent>
            <CardActions
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Link to={"/shop"}>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  style={{ borderRadius: 35 }}
                  sx={{ width: 200, padding: 1.5 }}
                >
                  View More
                </Button>
              </Link>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
