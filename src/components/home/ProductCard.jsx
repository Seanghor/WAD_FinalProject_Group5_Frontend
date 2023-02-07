import React from "react";
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
import Divider from '@mui/material/Divider';
const ProductCard = (prop) => {
  return (
    <Grid className="col-md-3" >
    <Card sx={{ maxWidth: 420 }} style={{height: 600, margin: 25}}>
      <CardActionArea>
        <CardMedia
          style={{borderBottomRightRadius: 10, borderBottomLeftRadius:10, padding: 3}}
          component="img"
          height="260"
          image={prop.img}
          alt="green iguana"
        />
        <CardContent style={{paddingLeft: 20}}>
          <Typography gutterBottom variant="h5" color="text.secondary" style={{fontWeight: "500"}}>
            {prop.name}
          </Typography>
          <Typography gutterBottom variant="text.secondary" color="text.secondary" style={{fontWeight: "500"}}>
            {prop.desc}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography variant="text.secondary" marginRight={3} marginTop={2}  style={{fontWeight: "bold",letterSpacing:0,color: "grey", fontSize: 40 }}>
            ${prop.newPrice}
            </Typography>
            <Stack direction="column" >
              <Typography gutterBottom variant="h6" marginTop={1} style={{color: "green", paddingLeft: 2}}>
                {prop.discount}% off
              </Typography>
              <Divider  sx={{ bgcolor: "grey",borderBottomWidth: 2,width: 150, marginBottom: 1}} />
              <Rating name="read-only"  variant="outlined" value={5} readOnly />
            </Stack>
          </Stack>
        </CardContent>
        <CardActions style={{paddingLeft: 20, marginTop: 30}}>
          <Button variant="outlined" color="primary">Add to cart</Button>  
        </CardActions>
      </CardActionArea>
    </Card>
    </Grid> 
  );
};

export default ProductCard;
