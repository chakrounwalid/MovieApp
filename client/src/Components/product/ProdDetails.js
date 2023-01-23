import * as React from "react";

import { Rating } from '@mui/material';
import { useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";



export default function ProdDetails() {
  const [expanded, setExpanded] = React.useState(false);
  const details = useSelector((state) => state.prod.details);
  const currentUser=useSelector(state=>state.auth.currentUser);

  const list = useSelector((state) => state.prod.products);
  const movieF = list.filter(el => el.category === details.category);
  

  return (
    <div style={{backgroundColor:"black"}}>
      
      <div style={{display:"flex"}}>
        <img src={details.img} style={{width:"350px",marginLeft:"80px",marginTop:"50px"}}/>
        <div>
        <div style={{display:"flex"}}>
        <h1 style={{marginTop:"50px",marginLeft:"60px",color:"white"}}>{details.title}</h1>
        <Rating name="read-only" value={details.price} readOnly style={{marginLeft:"20px",marginTop:"60px"}}/>
        </div>
        <div>
        <p style={{marginLeft:"20px",color:"white",paddingTop:"80px",paddingBottom:"20px"}}><b>Category : </b>{details.category}</p>
        <p style={{marginLeft:"auto",color:"white",paddingLeft:"300px",paddingRight:"200px"}}><b>Description : </b>{details.description}</p>
        </div>
        </div>
      </div>
      <div style={{marginTop:"30px",padding:"50px"}}>
        <iframe  SRC={details.qteS} width="1200px" height="600"   allowfullscreen></iframe>

        
      </div>
      <div  style={{
      display: "flex",
      flexDirection:"column",
      flexWrap: "wrap",
      justifyContent: "space-around",
    }} >
      {currentUser  && currentUser.role=="client"?
        
         <h1 style={{color:"white"}}>Similar movies </h1>
                 : <h1 style={{color:"white"}}>Similar movies </h1>

      }
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
          paddingLeft:"100px",
          paddingTop:"50px",
          marginBottom:"50px"
        }}
      >
        {movieF.map((el) => <ProductsCard prod={el} key={el._id} />)}
      </div>
    </div>
    </div>
    
    
  );
}
