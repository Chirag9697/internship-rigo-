import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

export default function Register() {
  const theme = "#6bf679"; 
  const toast = useToast()
  const[registerdetails,setRegisterdetails]=useState({name:"",email:"",password:""});
  const imageurl =
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80";
  const [showPassword, setShowPassword] = React.useState(false);
    const navigate=useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleregister=async(e)=>{
    e.preventDefault();
    const requestOptions = {
        // method: "GET",
        headers: {
          "Content-Type": "application/json",
          //   token: localStorage["token"],
        },
        
      };
    //   const registerdata={registerdetails};
      const register = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        registerdetails,requestOptions
      );
    //   const exactdata=await register.data;
    //   if()
    const data=await register.data;
        console.log(data);
    console.log(data);
    if(data.error){
      toast({
        title: 'Account not created.',
        description:`${data.error}`,
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
        console.log("not able to register");
        return;
    }
    toast({
      title: 'Account created.',
      description: "We've registered your account for you.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    navigate('/login');


    
      // console.log(data);
    //   setItems(data);
    // console.log("handleregister")

  }
  const handleonchange=(e)=>{
    setRegisterdetails({...registerdetails,[e.target.name]:e.target.value})
    console.log(registerdetails)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar login={false}/>
      <div
        style={{
          height: "89vh",
          width: "100%",
          backgroundImage: `url(${imageurl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "blur(4px)",
          WebkitFilter: "blur(4px)",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          position: "absolute",
        }}
      ></div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleregister}>
        <Card
          sx={{
            width: "30%",
            height: "50vh",
            margin: "auto",
            marginTop: "10%",
          }}
        >
          <CardBody
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              sx={{
                fontSize: "30px",
                color: `${theme}`,
                fontWeight: "semi-bold",
              }}
            >
              Register
            </Text>
            <Text>Enter your Name</Text>
            <Input
              sx={{ width: "50%" }}
              placeholder="enter your name"
              type="text"
              name="name"
              onChange={handleonchange}
              isRequired
            />
            <Text>Enter your email address</Text>
            <Input sx={{ width: "50%" }} placeholder="email" type="email" name="email" onChange={handleonchange} isRequired/>
            <Text>Enter your password</Text>
            <Input
              sx={{ width: "50%" }}
              type="password"
              name="password"
              placeholder="password"
              onChange={handleonchange}
              isRequired
            />
            <Button
              colorScheme="green"
              type="submit"
              sx={{ marginTop: "10px", backgroundColor: `${theme}` }}
            >
              Register
            </Button>
          </CardBody>
        </Card>
      </form>
      {/* <CardActions> */}
      {/* <form> */}
      {/* </form> */}
      {/* </CardActions> */}
    </>
  );
}
