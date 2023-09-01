import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Navbar() {
  const theme="#6bf679";
  return (
    <>
       <nav style={{
        width:"100vw",height:"8vh",backgroundColor:`${theme}`,display:"flex",justifyContent:"space-between",color:"white",alignItems:"center"}}>
        <div style={{display:"flex",width:"10vw",justifyContent:"space-between",alignContent:"center"}}>
          <div style={{fontWeight:"bold",fontSize:"3xl",marginLeft:"10px",fontFamily:"serif"}}>RCPE</div>
          <div>Home</div>
        </div>
        <div style={{display:"flex",width:"30vw",justifyContent:"space-between",alignItems:"center"}}>
          <div>Add New Recipe</div>
          <div>My favourites</div>
          <div>My Recipies</div>
          <div><Button colorScheme='green' sx={{backgroundColor:`${theme}`}}>LOGOUT</Button></div>
        </div>
       </nav>
    </>
  );
}
