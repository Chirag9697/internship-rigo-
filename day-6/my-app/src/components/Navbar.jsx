import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

export default function Navbar(props) {
  const navigate = useNavigate();
  const toast = useToast()
  const handlelogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    toast({
      title: 'Logout',
      description: "successfully logged out",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    navigate("/");
  };
  const theme = "#6bf679";
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "8vh",
          backgroundColor: `${theme}`,
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "10vw",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "3xl",
              marginLeft: "10px",
              fontFamily: "serif",
            }}
          >
            RCPE
          </div>
          {props.login == true && (
            <Link to="/home">
              <div>Home</div>
            </Link>
          )}
        </div>
        <div
          style={{
            display: "flex",
            width: "30vw",
            justifyContent: `${
              props.login == true ? "space-between" : "flex-end"
            }`,
            alignItems: "center",
          }}
        >
          {props.login == true && (
            <>
              <Link to="/createrecipe">
                <div style={{ cursor: "pointer" }}>Add New Recipe</div>
              </Link>
              <Link to='/myfavouriterecipe'> 
              <div style={{ cursor: "pointer" }}>My favourites</div>
              </Link>
              <Link to="/myrecipe">
                <div style={{ cursor: "pointer" }}>My Recipies</div>
              </Link>
              <div>
                <Button
                  colorScheme="green"
                  sx={{ backgroundColor: `${theme}` }}
                  onClick={handlelogout}
                >
                  LOGOUT
                </Button>
              </div>
            </>
          )}
          {props.login == false && (
            <>
              <Link to="/login">
                <Button
                  colorScheme="green"
                  sx={{ backgroundColor: `${theme}` }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  colorScheme="green"
                  sx={{ backgroundColor: `${theme}` }}
                >
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
