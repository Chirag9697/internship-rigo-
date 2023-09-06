import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { Image, Box, Text, Textarea } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Rating from "react-rating";
import { useDisclosure } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
export default function Viewrecipe() {
  // const{id}=req.params;
  const toast = useToast();
  const { isOpen, onToggle } = useDisclosure();
  const [newcomment, setNewcomment] = useState("");
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  // console.log(id);
  const { state } = useLocation();
  console.log(state);
  const handleRating = (rate) => {
    setRating(rate); // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const getallcomments = async () => {
    if (!localStorage["token"]) {
      navigate("/login");
      return;
    }
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        token: localStorage["token"],
      },
    };
    const recipies = await axios.get(
      `http://localhost:3000/api/v1/comments/${state.recipies.id}`,
      requestOptions
    );
    const data = await recipies.data;
    setComments(data);
  };

  const addcomment = async (e) => {
    e.preventDefault();
    if (!localStorage["token"]) {
      navigate("/login");
      return;
    }
    const addnewcomment = {
      recipeid: state.recipies.id,
      commenttext: newcomment,
    };
    const requestOptions = {
      headers: {
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
    if (data.error) {
      toast({
        title: "comment",
        description: `${data.error}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "comment added",
      description: "comment is added",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    getallcomments();
  };
  const addtofavourites = async () => {
    // console.log(id);
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
      recipeid: state.recipies.id,
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
      recipeid: state.recipies.id,
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
        `http://localhost:3000/api/v1/likes/${state.recipies.id}`,
        requestOptions
      );
      console.log(unlikerecipe);
      // getallrecipies();
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
    // getallrecipies();
  };
  useEffect(() => {
    getallcomments();
  }, []);

  return (
    <>
      <Navbar login={true} />
      {/* <div>Viewrecipe</div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red",
          width: "90%",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>IngredientName</Th>
                    <Th>Quantity</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {state.recipies.ingredients.map((ingredient, index) => {
                    return (
                      <Tr key={index}>
                        <Td>wheat</Td>
                        <Td>{ingredient.quantity}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <Text sx={{ fontWeight: "bold" }}>
              By {state.recipies.username}
            </Text>
            <Image
              sx={{ width: "500px" }}
              src={`${state.recipies.filename}`}
              alt="Dan Abramov"
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            width: "30%",
            backgroundColor: "purple",
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "10px",
          }}
        >
          <Button colorScheme="blue" onClick={addtofavourites}>
            Add to favourites
          </Button>
          <Button colorScheme="blue" onClick={liketherecipe}>
            Like recipe
          </Button>
        </div>
      </div>
      <div
        style={{ backgroundColor: "black", marginTop: "20px", padding: "20px" }}
      >
        <Text
          sx={{ marginBottom: "10px", fontWeight: "bold", fontSize: "40px" }}
        >
          DESCRIPTION
        </Text>
        <div>{state.recipies.description}</div>
      </div>
      <div
        style={{ backgroundColor: "pink", marginTop: "20px", padding: "20px" }}
      >
        <Text
          sx={{ marginBottom: "10px", fontWeight: "bold", fontSize: "40px" }}
        >
          Instruction
        </Text>
        <div>{state.recipies.instruction}</div>
      </div>
      <Text
        sx={{
          fontWeight: "bold",
          marginTop: "20px",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        Comments
      </Text>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "80%",
            backgroundColor: "green",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {comments.map((comment, index) => {
            return (
              <div
                style={{
                  width: "100%",
                  backgroundColor: "orange",
                  marginTop: "10px",
                }}
              >
                {/* <p>by{comment.commentowner}</p> */}
                <Text sx={{ fontWeight: "bold" }}>
                  by {comment.commentowner}
                </Text>
                <ReactStars
                      count={5}
                      value={4.5}
                      // onChange={ratingChanged}
                      // value={5}
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                    />
                <p>{comment.commenttext}</p>
              </div>
            );
          })}
          <div style={{ marginTop: "20px" }}>
            <Button onClick={onToggle}>Addcomment</Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="20px"
                color="white"
                mt="4"
                bg="white"
                rounded="md"
                shadow="md"
                sx={{ display: "flex" }}
              >
                <form onSubmit={addcomment} style={{ width: "100%" }}>
                  <div>
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      size={24}
                      isHalf={true}
                      activeColor="#ffd700"
                    />
                    
                  </div>
                  <Textarea
                    placeholder="Add new comment"
                    style={{ color: "black" }}
                    onChange={(e) => setNewcomment(e.target.value)}
                    isRequired
                  />

                  <Button colorScheme="blue" type="submit">
                    Add
                  </Button>
                </form>
              </Box>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}
