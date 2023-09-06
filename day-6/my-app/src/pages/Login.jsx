import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";
export default function Login() {
  const theme = "#6bf679";
  const toast = useToast()

  const imageurl =
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80";
  const [showPassword, setShowPassword] = React.useState(false);
  const [logindetails, setLogindetails] = useState({email: "",password:""});
  const navigate=useNavigate()
  const handleLogin = async (e) => {
    console.log("login")
    e.preventDefault();
    const requestOptions = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        //   token: localStorage["token"],
      },
    };
    //   const registerdata={registerdetails};
    const login = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
    logindetails,
      requestOptions
    );
    const data=await login.data;
    if (data.error) {
      console.log("not able to login");
      toast({
        title: 'login',
        description: `${data.error}`,
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
      return;
    }
    const token=await login.data;
    // console.log(token);
    localStorage.setItem('token',token.token);
    console.log(localStorage.getItem('token'));
    toast({
      title: 'login',
      description: "successfully logged in",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    navigate('/home');
    return;
    // navigate("/login");

  };
  const handleonchange = (e) => {
    setLogindetails({ ...logindetails, [e.target.name]: e.target.value });
    console.log(logindetails);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar login={false} />
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
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleLogin}>
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
              LOGIN
            </Text>
            <Text>Enter your email address</Text>
            <Input sx={{ width: "50%" }} placeholder="email" type="email" name="email" onChange={handleonchange} isRequired/>
            <Text>Enter your password</Text>
            <Input
              sx={{ width: "50%" }}
              type="password"
              placeholder="password"
              name="password"
              onChange={handleonchange}
              isRequired
            />
            <Button
              colorScheme="green"
              type="submit"
              sx={{ marginTop: "10px", backgroundColor: `${theme}` }}
            >
              LOGIN
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
