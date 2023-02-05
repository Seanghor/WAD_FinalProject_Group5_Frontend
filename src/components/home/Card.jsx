
import React from "react";
import "../.././pages/styles/home.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Pan from '../.././assets/image/pan/pan5-removebg.png';
const Cards = (prop) => {
  return (
    <div className="col-md-4">
      <Card style={{height: 540,margin: 25}}>
      <CardActionArea>
        <CardMedia style={{lignItems: "center", justifyContent: "center"}}>
          <CardMedia
            style={{borderRadius: 10, padding: 3, position: 'absolute'}}
            component="img"
            height="260"
            image="https://wallpaperaccess.com/full/221443.jpg"
            alt="green iguana"
          />
          
          <CardMedia
            style={{borderRadius: 10 ,position: "relative" , width: 250, alignSelf: "center", left: 130}}
            component="img"
            height="260"
            image={Pan}
            alt="green iguana"
          />
          
        </CardMedia>
        
        <CardContent style={{paddingLeft: 20}}> 
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
          </Typography>
        </CardContent>
        <CardActions style={{alignItems: "center", justifyContent: "center"}}>
          <Button size="small" variant="contained" color="primary" style={{ borderRadius : 35}} sx={{width: 200, padding: 1.5,}}>Buy Now</Button>  
        </CardActions>
      </CardActionArea>
    </Card>
    </div>
    
  )
};

export default Cards;