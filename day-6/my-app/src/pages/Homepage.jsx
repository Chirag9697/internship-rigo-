import React, { useEffect ,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button, ButtonGroup, Divider, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
export default function Homepage() {
  const navigate = useNavigate();
  const[allrecipies,setAllrecipies]=useState([]);

  console.log(localStorage.getItem("token"));
  // navigate('/register');
  const getallrecipies=async()=>{
    const requestOptions = {
        // method: "GET",
        headers: {
          "Content-Type": "application/json",
            "token": localStorage["token"],
        },
      };


    const recipies=await axios.get('http://localhost:3000/api/v1/recipies/',requestOptions);
    const data=await recipies.data;
    // console.log(data);
    const allrecipy=data.recipies;
    setAllrecipies(allrecipy);
  }
  const addtofavourites=async(id)=>{
    console.log(id);
    const requestOptions = {
        // method: "GET",
        headers: {
        //   "Content-Type": "application/json",
            "token": localStorage["token"],
        },
      };
      const data={
        recipeid:id
      }
      const favrecipe=await axios.post('http://localhost:3000/api/v1/recipies/favourites',data,requestOptions);
      const newdata=await favrecipe.data;
      if(newdata.error){
        console.log("not able to add to favourite recipe")
        return;
      }
      console.log("added to favourite recipe");
  }
  const liketherecipe=async(id)=>{
    console.log(id);
    const requestOptions = {
        // method: "GET",
        headers: {
        //   "Content-Type": "application/json",
            "token": localStorage["token"],
        },
      };
      const data={
        recipeid:id
      }
      const favrecipe=await axios.post(`http://localhost:3000/api/v1/likes`,data,requestOptions);
      if(!favrecipe){
        console.log("not able to like");
        return;
      }
      const newdata=await favrecipe.data;
      if(newdata.error){
        console.log("unlike the recipe")
        const unlikerecipe=await axios.delete(`http://localhost:3000/api/v1/likes/${id}`,requestOptions);
        console.log(unlikerecipe);
        getallrecipies();
        return;
      }
      console.log("liked the recipe");
      getallrecipies();
  }
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/");
      return;
    }
    getallrecipies();
  }, []);

  // if(loca)
  return (
    <>
      <Navbar login={true} />
      {/* <div>Homepage</div */}
      <div style={{ width: "80vh", backgroundColor: "red", margin: "auto" }}>
        <Text sx={{ fontSize: "50px" }}>
          Get All <span style={{ color: "green" }}>Recipies</span> Here
        </Text>
      </div>
      <div style={{marginTop:"10px",width:"60vh",margin:"auto",display:"flex",flexDirection:"column"}}>
        {allrecipies.map((recipe,index)=>{
            return(
             <Card key={recipe.id} maxW="sm" sx={{marginBottom:"20px"}}>
             <CardBody>
               <Image
                 src={recipe.filename}
                 alt="Green double couch with wooden legs"
                 borderRadius="lg"
               />
               <Stack mt="6" spacing="3">
                 <Heading size="md">{recipe.recipename}</Heading>
                 <Text>
                   {recipe.description}
                 </Text>
               </Stack>
                 <Button colorScheme='blue' onClick={()=>addtofavourites(recipe.id)} sx={{marginRight:"10px"}}>Add to favourites</Button>
                 <Button colorScheme='blue' sx={{marginRight:"10px"}} onClick={()=>liketherecipe(recipe.id)}>{recipe.nooflikes} Like</Button>
                 <Button colorScheme='blue'>comment</Button>
             </CardBody>    
           </Card>

            );
        })}
       
      </div>
      {/* <br style={{color:"black"}}/> */}
    </>
  );
}
