
import React from "react";
import "../.././pages/styles/home.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const Cards = (prop) => {
  return (
    <Grid className="col-md-4">
      <Grid paddingLeft={5} paddingRight={5}>
      <Card style={{height: 880,}}>
      <CardActionArea>
        <Stack >
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
        <CardContent style={{marginTop: 125}}> 
          <Typography style={{textAlign:"center"}}>
            <Typography variant="h4" marginRight={3} component="div" style={{fontWeight: "bold"}}>
              ${prop.newPrice}
            </Typography>
            <Typography gutterBottom variant="h6" marginRight={3} marginTop={1} component="div" color="text.secondary" style={{textDecoration: "line-through"}}>
            $ {prop.oldPrice}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" style={{}}>
              {prop.name}
            </Typography>
            <Typography gutterBottom variant="text.secondary" color="text.secondary" component="div" style={{fontWeight: "500"}}>
              {prop.desc}
            </Typography>
          </Typography>
        </CardContent>
        <CardActions style={{alignItems: "center", justifyContent: "center"}}>
          <Button size="small" variant="contained" color="secondary" style={{ borderRadius : 35}} sx={{width: 200, padding: 1.5,}}>Buy Now</Button>  
        </CardActions>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>

const Card = (prop) => {
  return (
    <div className="card">
      <img src={prop.img} alt="" />
      <div className="card-body text-center">
      <h4 className="card-title">{prop.name}</h4>
      <li href="/" className="viewmore">{prop.linkName}</li>
      </div>
    </div>
  )
};

export default Card;