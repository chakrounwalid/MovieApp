import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Rating } from '@mui/material';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getProdDetails,deletproduct } from "../../js/actions/productActions";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";




export default function ProductsCard({ prod }) {
  // console.log(prod)
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser && currentUser.role);
  const alertdel = ()=> {
    alert ("Are you sure to delete");
    dispatch(deletproduct(prod._id));
  }
  
  return (
    <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
      
      <CardMedia
        component="img"
        alt="movie img"
        height="440"
        image={prod.img}
      />
      <CardContent>
          
        <Typography gutterBottom variant="h5" component="div">
          {prod.title}
        </Typography>
        
        <Typography variant="body2" >
        <b>Category : </b>{prod.category}
        </Typography>
        <br/>
        <Rating name="read-only" value={prod.price} readOnly />
      </CardContent>
      <CardActions>
        <Link to="/products/details">
          <Button
            size="small"
            onClick={() => dispatch(getProdDetails(prod._id))}
            variant="contained"
            color="error"
          >
            Watch now
          </Button>
        </Link>
        &ensp;
        <Button size="small"
        variant="contained"
        color="success"
        >Add To WatchList</Button>
        {currentUser &&
        currentUser.role == "saler" &&
        currentUser._id == prod.user ? (
          <CardActions>
            {" "}
           <Link to='/products/edit' >
            <Button
              size="small"
              onClick={() => dispatch(getProdDetails(prod._id))}
            >
              <EditIcon />
            </Button></Link>
            <Button 
            size="small"
            onClick = {()=>alertdel()}
             
            >
              <DeleteIcon />
            </Button>{" "}
          </CardActions>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
}
