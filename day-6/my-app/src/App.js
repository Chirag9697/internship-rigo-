import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import { Card, CardHeader, CardBody, CardFooter, AlertDialog } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { Container } from "@chakra-ui/react";
import uuid from "react-uuid";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";
import { SearchIcon } from "@chakra-ui/icons";
// import Login from "./pages/Login.tsx";
import Register from "./pages/Register";
import Reactrouter from "./components/Reactrouter";
// const initialdata = require("./initialData");
import Createrecipe from "./pages/Createrecipe.jsx";

function App() {
  return(
    <>
      {/* hello */}
      <Reactrouter/>
    </>
  );
}

export default App;
