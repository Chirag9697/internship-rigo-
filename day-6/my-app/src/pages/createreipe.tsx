// import { useState,useEffect } from "react";
// import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
// import { Droppable } from "react-beautiful-dnd";
// import { Draggable } from "react-beautiful-dnd";
// import { DragDropContext } from "react-beautiful-dnd";
// import uuid from 'react-uuid';
// import { Text } from "@chakra-ui/react";
// import initialdata from '../initialData';
// import "../App.css";
// // import {initialdata from './initialData';
// // const initialdata=require("../initialData");
// const dataadded=[];
// const reorder=(list,startIndex,endIndex)=>{
//   console.log(list,startIndex,endIndex);
//   const result=Array.from(list);
//   const [removed]=result.splice(startIndex,1);
//   console.log("removed",removed);
//   result.splice(endIndex,0,removed);
//   // console.log(newresult);
//   console.log("newresult",result);
//   return result;
// }
// const additem=(list,startindex,endindex)=>{
//   const itemtobeadded=list[startindex]; 
//   for(var i=0;i<dataadded.length;i++){
//     if(itemtobeadded.ingredientname==dataadded[i].ingredientname){
//       return dataadded;
//     }
//   }
//   if(endindex>dataadded.length-1){
//     dataadded.push({...itemtobeadded,ingredientid:uuid()});
//   }
//   else{
//     dataadded.splice(endindex,0,{...itemtobeadded,ingredientid:uuid()});
//   }
//   return dataadded;
// }
// function createrecipe() {
//   const[items,setItems]=useState([]);
//   const[items2,setItems2]=useState([]);

  
//   const onDragEnd = (result) => {
//     const{destination,source,draggableId}=result;
//     console.log(source);
//     console.log(destination);
//     if(source.droppableId=='2' && destination==null){
//       items2.splice(source.index,1);
//       setItems2(items2);
//     }
//     else if(source.droppableId=='1' && destination==null){
//       return;
//     }
//     else if(source.droppableId==destination.droppableId){
//       const reorderedItems=reorder(items,source.index,destination.index);
//       setItems(reorderedItems);
//     }
//     else if(source.droppableId!=destination.droppableId){
//       const additems=additem(items,source.index,destination.index);
//       setItems2(additems);
//     }
//   };
//   useEffect(() => {
//     setItems(initialdata);
//     setItems2(dataadded);
//   }, [])
  
//   return (
//     <>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div
//           style={{
//             display: "flex",
//             width: "80vw",
//             marginTop: "40px",
//             height: "80vh",
//             backgroundColor: "black",
//             margin: "auto",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Droppable key={"1"} droppableId={"1"}>
//             {(provided) => {
//               return (
//                 <div
//                   style={{
//                     width: "20vw",
//                     height: "60vh",
//                     backgroundColor: "red",
//                     marginRight: "10px",
//                     borderRadius: "20px",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     overflowY: "scroll",
//                   }}
//                   // key={"2"}
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {items.map((data, index) => {
//                     return (
//                       <Draggable
//                         key={data.ingredientid}
//                         draggableId={data.ingredientid}
//                         index={index}
//                       >
//                         {(provided) => {
//                           return (
//                             <Card
//                               sx={{
//                                 width: "15vw",
//                                 borderBottom: "1px solid grey",
//                               }}
//                               // key={data.ingredientid}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                             >
//                               <CardBody>
//                                 <Text>{data.ingredientname}</Text>
//                               </CardBody>
//                             </Card>
//                           );
//                         }}
//                       </Draggable>
//                     );
//                   })}
//                   {provided.placeholder}
//                 </div>
//               );
//             }}
//           </Droppable>
//           <div
//             style={{
//               width: "20vw",
//               height: "60vh",
//               backgroundColor: "blue",
//               marginRight: "10px",
//               borderRadius: "20px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               overflowY: "scroll",
//             }}
//           >
//              <Droppable key={"2"} droppableId={"2"}>
//             {(provided) => {
//               return (
//                 <div
//                   style={{
//                     width: "20vw",
//                     height: "60vh",
//                     backgroundColor: "red",
//                     marginRight: "10px",
//                     borderRadius: "20px",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     overflowY: "scroll",
//                   }}
//                   // key={"2"}
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {items2.map((data, index) => {
//                     return (
//                       <Draggable
//                         key={data.ingredientid}
//                         draggableId={data.ingredientid}
//                         index={index}
//                       >
//                         {(provided) => {
//                           return (
//                             <Card
//                               sx={{
//                                 width: "15vw",
//                                 borderBottom: "1px solid grey",
//                               }}
//                               // key={data.ingredientid}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                             >
//                               <CardBody>
//                                 <Text>{data.ingredientname}</Text>
//                               </CardBody>
//                             </Card>
//                           );
//                         }}
//                       </Draggable>
//                     );
//                   })}
//                   {provided.placeholder}
//                 </div>
//               );
//             }}
//           </Droppable>
//           </div>
//         </div>
//       </DragDropContext>
//     </>
//   );
// }

// export default createrecipe;
