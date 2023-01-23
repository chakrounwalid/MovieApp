import React from "react";
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const ProductList = () => {
  const list = useSelector((state) => state.prod.products);
  // console.log(list)
  const currentUser=useSelector(state=>state.auth.currentUser)
  // console.log(currentUser&& currentUser.role)
  return (
    <div  style={{
      display: "flex",
      flexDirection:"column",
      flexWrap: "wrap",
      justifyContent: "space-around",
    }} >
      {currentUser  && currentUser.role=="saler"?
        
                <Link to="/products/add"><Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}>Add Movie</Button></Link>
                 : ""

      }
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
          paddingLeft:"100px",
          paddingTop:"50px"
        }}
      >
        {list.length &&
          list.map((el) => <ProductsCard prod={el} key={el._id} />)}
      </div>
    </div>
  );
};

export default ProductList;
