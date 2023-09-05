import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export default function Myrecipies() {
  const navigate = useNavigate();
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
    console.log(data);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/register");
      return;
    }
    getallmyrecipies();
  }, []);

  return (
    <>
      <Navbar login={true} />
      <div>Myrecipies</div>
    </>
  );
}
