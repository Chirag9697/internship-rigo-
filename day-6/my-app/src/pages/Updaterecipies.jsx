import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  AlertDialog,
} from "@chakra-ui/react";
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
import { useToast } from '@chakra-ui/react'

// import Navbar from "./components/Navbar";
import Navbar from "../components/Navbar";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "../App.css";
import { SearchIcon } from "@chakra-ui/icons";
import Login from "./Login.jsx";
import Register from "./Register";
import Reactrouter from "../components/Reactrouter";

const dataadded= [];
const dataadded2 = [];
const reorder = (list, startIndex, endIndex) => {
  console.log(list, startIndex, endIndex);
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  console.log("removed", removed);
  result.splice(endIndex, 0, removed);
  // console.log(newresult);
  console.log("newresult", result);
  return result;
};
const additem = (list, startindex, endindex) => {
  const itemtobeadded = list[startindex];
  for (var i = 0; i < dataadded.length; i++) {
    if (itemtobeadded.ingredientname == dataadded[i].ingredientname) {
      return { dataadded, dataadded2 };
    }
  }
  if (endindex > dataadded.length - 1) {
    dataadded.push({ ...itemtobeadded, id: uuid() });
    dataadded2.push({ itemtobeadded });
  } else {
    dataadded.splice(endindex, 0, { ...itemtobeadded, id: uuid() });
    dataadded2.splice(endindex, 0, { itemtobeadded });
  }
  return { dataadded, dataadded2 };
};
function Updaterecipies(props) {
  const Navigate=useNavigate();
//   console.log(props);
  const toast = useToast()
  if(!localStorage.getItem('token')){
    Navigate('/');
  }
  const theme = "#6bf679";

  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allrecipedetails, setAllrecipedetails] = useState({
    recipename: "",
    cookingtime: "",
    time: "",
    recipedescription: "",
    recipeinstruction: "",
    ingredient: [],
    recipeimage: null,
  });
  const handlechange = (e) => {
    setAllrecipedetails({
      ...allrecipedetails,

      [e.target.name]:
        e.target.name === "recipeimage" ? e.target.files["0"] : e.target.value,
    });
    console.log(allrecipedetails);
  };

  const handlecreaterecipe = async (e) => {
    e.preventDefault();
    console.log("creating recipe");
    setLoading(true);
    const allingredients = ingredients.map((ingredient) => {
      return ingredient.itemtobeadded.id;
    });
    // console.log(allingredients);
    const newrecipe = {
    //   ownerid: 1,
      recipename: allrecipedetails.recipename,
      cookingtime: `${allrecipedetails.cookingtime + allrecipedetails.time}`,
      description: allrecipedetails.recipedescription,
      instruction: allrecipedetails.recipeinstruction,
      ingredients: allingredients,
    };
    const data = new FormData();
    // data.append("ownerid", newrecipe.ownerid);
    data.append("recipename", newrecipe.recipename);
    data.append("cookingtime", newrecipe.cookingtime);
    data.append("description", newrecipe.description);
    data.append("instruction", newrecipe.instruction);
    data.append("ingredients", newrecipe.ingredients);
    data.append("avatar", allrecipedetails.recipeimage);
    const requestOptions={
      headers: {
        // "Content-Type": "application/json",
          "token": localStorage.getItem("token"),
      },
    }
    const response = await axios.put(
      `http://localhost:3000/api/v1/recipies/${props.id}`,
      data,requestOptions
    );
    const result = await response.data;
    if (result) {
      console.log("updated recipe");
      toast({
        title: 'updated recipe',
        description: "sucessfuly updated recipe",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      setLoading(false);
      Navigate('/home');
    }
    console.log(response);
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(source);
    console.log(destination);
    if (source.droppableId == "2" && destination == null) {
      items2.splice(source.index, 1);
      ingredients.splice(source.index, 1);
      setItems2(items2);
      setIngredients(ingredients);
    } else if (source.droppableId == "1" && destination == null) {
      return;
    } else if (source.droppableId == destination.droppableId) {
      const reorderedItems = reorder(
        items,
        source.index,
        destination.index
      );
      setItems(reorderedItems);
    } else if (source.droppableId != destination.droppableId) {
      const { dataadded, dataadded2 } = additem(
        items,
        source.index,
        destination.index
      );
      setItems2(dataadded);
      setIngredients(dataadded2);
    }
  };
  const handlesearchingredient = (e) => {
    if (e.target.value != "") {
      const newitems = items.filter((item) => {
        return item.ingredientname.includes(e.target.value);
      });
      setItems(newitems);
    } else {
      getallingredients();
    }
  };
  const getallingredients = async () => {
    const requestOptions = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        //   token: localStorage["token"],
      },
    };
    const getallingredients = await axios.get(
      "http://localhost:3000/api/v1/ingredients/",
      requestOptions
    );
    const data = await getallingredients.data;
    setItems(data);
  };
  useEffect(() => {
    getallingredients();
    setItems2(dataadded);
  }, []);

  return (
    <>
      <form onSubmit={handlecreaterecipe} encType="multipart/form-data">
        <div
          style={{
            backgroundColor: "white",
            margin: "auto",
            marginTop: "20px",
            borderRadius: "5px",
            border: `2px solid ${theme}`,
            boxShadow: "4px",
            width: "89vw",
            height: "80vh",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            fontSize="40px"
            color="white"
            sx={{ marginTop: "0", color: `${theme}` }}
          >
            Update the <span style={{ color: `${theme}` }}>Recipe</span>
          </Text>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Text fontSize="1xl" sx={{ marginLeft: "10px" }}>
                Enter Recipe Name:
              </Text>
              <Input
                sx={{ width: "20vw", marginLeft: "10px", marginTop: "10px" }}
                placeholder="Enter recipe name"
                name="recipename"
                defaultValue={props.recipename}
                onChange={handlechange}
                isRequired
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Text fontSize="1xl" sx={{ marginLeft: "30px" }}>
                Enter Cooking Time:
              </Text>
              <div style={{ display: "flex", padding: "10px" }}>
                <Input
                  sx={{ width: "22vw", borderRightRadius: "0" }}
                  type="number"
                  placeholder="Enter cooking time"
                  name="cookingtime"
                  onChange={handlechange}

                  isRequired
                />
                <Select
                  placeholder="time"
                  name="time"
                  sx={{ width: "6vw", borderLeftRadius: "0" }}
                  onChange={handlechange}
                // value={props}

                  isRequired
                >
                  <option value="hour">hour</option>
                  <option value="min">min</option>
                  <option value="sec">sec</option>
                </Select>
              </div>
            </div>
            <div>
              <Text fontSize="1xl" sx={{ marginLeft: "30px" }}>
                Add recipe Image:
              </Text>
              <Input
                type="file"
                sx={{ width: "20vw", margin: "10px" }}
                placeholder="add image"
                name="recipeimage"
                accept="image/*"
                onChange={handlechange}
                isRequired
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <Text fontSize="1xl" sx={{ marginLeft: "10px" }}>
                  Add recipe Description:
                </Text>
                <Textarea
                  name="recipedescription"
                  sx={{ width: "30vw", marginBottom: "10px" }}
                  placeholder="Enter description of the recipe"
                  onChange={handlechange}
                defaultValue={props.description}
              
                  isRequired
                />
              </div>
              <div>
                <Text fontSize="1xl" sx={{ marginLeft: "10px" }}>
                  Add recipe Instruction:
                </Text>
                <Textarea
                  sx={{ width: "30vw" }}
                  name="recipeinstruction"
                  placeholder="Enter instruction of the recipe"
                  onChange={handlechange}
                defaultValue={props.instruction}

                  isRequired
                />
              </div>
            </div>
            <div>
              <Text fontSize="1xl" sx={{ marginLeft: "10px" }}>
                Add recipe Ingredients:
              </Text>

              <div style={{ marginTop: "30px", marginLeft: "10px" }}>
                <DragDropContext onDragEnd={onDragEnd}>
                  <div
                    style={{
                      display: "flex",
                      width: "40vw",
                      marginTop: "10px",
                      height: "30vh",
                      // backgroundColor: "blue",

                      margin: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "30px",
                      }}
                    >
                      <Droppable key={"1"} droppableId={"1"}>
                        {(provided) => {
                          return (
                            <div
                              style={{
                                width: "20vw",
                                height: "30vh",
                                backgroundColor: `${theme}`,
                                marginRight: "10px",
                                borderRadius: "2px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                overflowY: "scroll",
                              }}
                              // key={"2"}
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {items.map((data, index) => {
                                return (
                                  <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                  >
                                    {(provided) => {
                                      return (
                                        <Card
                                          sx={{
                                            width: "15vw",
                                            borderBottom: "1px solid grey",
                                          }}
                                          // key={data.ingredientid}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          ref={provided.innerRef}
                                        >
                                          <CardBody>
                                            <Text>{data.ingredientname}</Text>
                                          </CardBody>
                                        </Card>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                      <div style={{ display: "flex" }}>
                        <Input
                          placeholder="search ingredients"
                          onChange={handlesearchingredient}
                        />
                        <div
                          style={{
                            width: "30px",
                            border: "1px solid light rey",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <SearchIcon sx={{ marginTop: "5px" }} />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "20vw",
                        height: "30vh",
                        // backgroundColor: "blue",
                        marginRight: "10px",
                        borderRadius: "2px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // overflowY: "scroll",
                      }}
                    >
                      <Droppable key={"2"} droppableId={"2"}>
                        {(provided) => {
                          return (
                            <div
                              style={{
                                width: "20vw",
                                height: "30vh",
                                backgroundColor: `${theme}`,
                                marginRight: "10px",
                                borderRadius: "2px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                overflowY: "scroll",
                              }}
                              // key={"2"}
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {items2.map((data, index) => {
                                return (
                                  <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                  >
                                    {(provided) => {
                                      return (
                                        <Card
                                          sx={{
                                            width: "15vw",
                                            borderBottom: "1px solid grey",
                                          }}
                                          // key={data.ingredientid}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          ref={provided.innerRef}
                                        >
                                          <CardBody>
                                            <Text>{data.ingredientname}</Text>
                                          </CardBody>
                                        </Card>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                </DragDropContext>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              // backgroundColor: "red",
              justifyContent: "center",
            }}
          >
            <Button
              colorScheme="green"
              type="submit"
              sx={{
                backgroundColor: `${theme}`,
                width: "10vw",
                marginTop: "50px",
              }}
            >
              {loading == false ? "Update recipe" : <Spinner />}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Updaterecipies;
