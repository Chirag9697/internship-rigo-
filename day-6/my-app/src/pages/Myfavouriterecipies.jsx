import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export default function Myfavouriterecipies() {
  const navigate = useNavigate();
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
      <div>Myfavouriterecipies</div>
    </>
  );
}
