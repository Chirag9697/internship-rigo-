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
import { useToast } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react";
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
export default function Myfavouriterecipies() {
  const navigate = useNavigate();
  const toast = useToast()
  const [favrecipies, setFavrecipies] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const getallmyfavouriterecipies = async () => {
    const requestOptions = {
      // method: "GET",
      headers: {
        token: localStorage["token"],
      },
    };
    // const data = { findall: false };
    //   const registerdata={registerdetails};
    const allmyfavouriterecipies = await axios.get(
      "http://localhost:3000/api/v1/recipies/favourites",
      //   logindetails,
      requestOptions
    );
    const data = await allmyfavouriterecipies.data;
    console.log(data);
    setFavrecipies(data);
  };
  const deletefavrecipe = async (id) => {
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
      `http://localhost:3000/api/v1/recipies/favourites/${id}`,
      //   logindetails,
      requestOptions
    );
    // const data = await deletefavrecipe.data;
    if (!deletefavrecipe) {
      console.log("not able to delete");
      return;
    }
    toast({
      title: 'Delte',
      description: "deleted from favourite recipe",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    onClose();
    getallmyfavouriterecipies();
    // console.log(data);
    // setFavrecipies(data);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/register");
      return;
    }
    getallmyfavouriterecipies();
  }, []);

  return (
    <>
      <Navbar login={true} />
      <div
        style={{
          marginTop: "10px",
          width: "60vh",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {favrecipies.map((recipe, index) => {
          return (
            <Card
              key={recipe.favrecipeid}
              maxW="sm"
              sx={{ marginBottom: "20px" }}
            >
              <CardBody>
              <Text>{recipe.username}</Text>
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
                      <Button colorScheme="red" onClick={()=>deletefavrecipe(recipe.favrecipeid)} ml={3}>
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>        
            </Card>
          );
        })}
      
      </div>
    </>
  );
}
