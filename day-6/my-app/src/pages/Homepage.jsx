import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
// import Button from '@mui/material/Button';
import { Card, CardBody } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
// import FontAwesomeIcon from '@fortawesome/react-fontawesomes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function Homepage() {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [allrecipies, setAllrecipies] = useState([]);
  const [newcomment, setNewcomment] = useState("");
  const [commentrecipid, setCommentrecipeid] = useState();

  console.log(localStorage.getItem("token"));
  // navigate('/register');
  const handlenewcommentchange = (e) => {
    setNewcomment(e.target.value);
  };
  const getallcomments = async (id) => {
    // setComments([]);
    if (!localStorage["token"]) {
      toast({
        title: "error",
        description: `you need to login first`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
      return;
    }
    setCommentrecipeid(id);
    const requestOptions = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage["token"],
      },
    };

    const recipies = await axios.get(
      `http://localhost:3000/api/v1/comments/${id}`,
      requestOptions
    );
    const data = await recipies.data;

    setComments(data);

    onOpen();
    // if(isOpen==false){
    // setComments([]);
    // }
    console.log(data);
  };

  const getallrecipies = async () => {
    const requestOptions = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        // token: localStorage["token"],
      },
    };

    const recipies = await axios.get(
      "http://localhost:3000/api/v1/recipies/",
      requestOptions
    );
    const data = await recipies.data;

    // console.log(data);
    const allrecipy = data.recipies;
    console.log(allrecipy);
    setAllrecipies(allrecipy);
  };
  const addtofavourites = async (id) => {
    console.log(id);
    if (!localStorage["token"]) {
      toast({
        title: "error",
        description: `you need to login first`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
      return;
    }
    const requestOptions = {
      // method: "GET",
      headers: {
        //   "Content-Type": "application/json",
        token: localStorage["token"],
      },
    };
    const data = {
      recipeid: id,
    };
    const favrecipe = await axios.post(
      "http://localhost:3000/api/v1/recipies/favourites",
      data,
      requestOptions
    );
    const newdata = await favrecipe.data;
    if (newdata.error) {
      toast({
        title: "favourite recipe",
        description: `${newdata.error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log("not able to add to favourite recipe");
      return;
    }
    toast({
      title: "favourite recipe",
      description: `added to favorite recipe`,
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    console.log("added to favourite recipe");
  };
  const handleaddcomment = async (id) => {
    if (!localStorage["token"]) {
      toast({
        title: "error",
        description: `you need to login first`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
      return;
    }
    console.log("ids", commentrecipid);
    const addnewcomment = {
      recipeid: commentrecipid,
      commenttext: newcomment,
    };
    const requestOptions = {
      headers: {
        // "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };
    const response = await axios.post(
      "http://localhost:3000/api/v1/comments/",
      addnewcomment,
      requestOptions
    );
    const data = await response.data;
    // console.log(data);
    getallcomments(commentrecipid);
  };
  const liketherecipe = async (id) => {
    if (!localStorage["token"]) {
      toast({
        title: "error",
        description: `you need to login first`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
      return;
    }
    console.log(id);
    const requestOptions = {
      // method: "GET",
      headers: {
        //   "Content-Type": "application/json",
        token: localStorage["token"],
      },
    };
    const data = {
      recipeid: id,
    };
    const favrecipe = await axios.post(
      `http://localhost:3000/api/v1/likes`,
      data,
      requestOptions
    );
    if (!favrecipe) {
      console.log("not able to like");
      return;
    }
    const newdata = await favrecipe.data;
    if (newdata.error) {
      console.log("unlike the recipe");
      toast({
        title: "unliked the recipe",
        description: "you have unliked the recipe",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      const unlikerecipe = await axios.delete(
        `http://localhost:3000/api/v1/likes/${id}`,
        requestOptions
      );
      console.log(unlikerecipe);
      getallrecipies();
      return;
    }
    toast({
      title: "Liked the recipe",
      description: "you have liked the recipe",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log("liked the recipe");
    getallrecipies();
  };
  useEffect(() => {
    // if (localStorage.getItem("token") == null) {
    // navigate("/");
    // return;
    // }
    getallrecipies();
  }, []);
  const handlecardclick=(id)=>{
    if(!localStorage["token"]){
      toast({
        title: "error",
        description: `you need to login first`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
      return;
    }
  }

  // if(loca)
  return (
    <>
      <Navbar login={!localStorage["token"] ? false : true} />
      <div style={{ width: "80vh", margin: "auto" }}>
        <Text sx={{ fontSize: "50px" }}>
          Get All <span style={{ color: "green" }}>Recipies</span> Here
        </Text>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          margin: "auto",
          display: "flex",
          // flexDirection: "column",
          justifyContent:"center",
          flexWrap:"wrap",
          padding:"20px"
        }}
      >
        {allrecipies.map((recipe, index) => {
          return (
            <Link to={{pathname:!localStorage["token"]?"/login":`/recipe/${recipe.id}`}} state={{recipies:recipe}} >
            <Card  key={recipe.id} maxW="sm" onClick={()=>handlecardclick(recipe.id)} sx={{ marginBottom: "20px",marginRight:"20px",cursor:"pointer"}}>
              <CardBody>
                <Text sx={{marginBottom:"10px",fontWeight:"bold"}}>By {recipe.username}</Text>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <Text sx={{marginBottom:"10px"}}>
                  
                      {recipe.nooflikes} liked this recipe
                </Text>
                <Image
                  src={recipe.filename}
                  alt="Green double couch with wooden legs"
                  sx={{maxHeight:"300px"}}
                  borderRadius="lg"
                  />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{recipe.recipename}</Heading>
                  <Text>{recipe.description}</Text>
                </Stack>
                {/*

                  onClick={() => addtofavourites(recipe.id)}
                  onClick={() => liketherecipe(recipe.id)}
                onClick={() => getallcomments(recipe.id)}
              */}
                
              
              </CardBody>
             
            </Card>
        </Link>
          );
        })}
      </div>
      {/* <br style={{color:"black"}}/> */}
    </>
  );
}
