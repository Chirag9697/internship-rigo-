import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import Updaterecipies from "./Updaterecipies";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function Myrecipies() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const[myrecipies,setMyrecipies]=useState([]);
  const[updaterecipe,setUpdaterecipe]=useState({});
  const[update,setUpdate]=useState(false);
  const getallmyrecipies = async () => {
    const requestOptions = {
      // method: "GET",
      headers: {
        token: localStorage["token"],
      },
    };
    // const data = { findall: false };
    //   const registerdata={registerdetails};
    const allmyrecipies = await axios.get(
      "http://localhost:3000/api/v1/recipies/myrecipies",
      //   logindetails,
      requestOptions
    );
    const data = await allmyrecipies.data;
    const recipies=await data.recipies;
    setMyrecipies(recipies);
  };
  const deleterecipe = async (id) => {
    // onOpen();
    
    const requestOptions = {
      // method: "GET",
      headers: {
        token: localStorage["token"],
      },
    };
    // const data = { findall: false };
    //   const registerdata={registerdetails};
    const deletefavrecipe = await axios.delete(
      `http://localhost:3000/api/v1/recipies/${id}`,
      //   logindetails,
      requestOptions
    );
    // const data = await deletefavrecipe.data;
    if (!deletefavrecipe) {
      console.log("not able to delete");
    }
    onClose();
    getallmyrecipies();
  };
  const handleupdate=(recipe)=>{
    setUpdaterecipe(recipe);
    setUpdate(true);
  }
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/register");
      return;
    }
    getallmyrecipies();
  }, []);

  return (
    <div>
      <Navbar login={true} />
      {!update && <div
        style={{
          marginTop: "10px",
          width: "60vh",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {myrecipies.map((recipe, index) => {
          return (
            <Card
              key={recipe.id}
              maxW="sm"
              sx={{ marginBottom: "20px" }}
            >
              <CardBody>
                <Image
                  src={recipe.filename}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{recipe.recipename}</Heading>
                  <Text>{recipe.description}</Text>
                </Stack>
                <Button
                  colorScheme="red"
                  onClick={onOpen}
                >
                  Delete
                </Button>
                <Button
                  colorScheme="green"
                  // onClick={onOpen}
                  // {...recipe}
                  onClick={()=>handleupdate(recipe)}
                >
                  Update
                </Button>
              </CardBody>
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Delete Customer
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="red" onClick={()=>deleterecipe(recipe.id)} ml={3}>
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>        
            </Card>
          );
        })}
      
     </div>}

     {update && <Updaterecipies {...updaterecipe}/>}
    </div>
  );
}
