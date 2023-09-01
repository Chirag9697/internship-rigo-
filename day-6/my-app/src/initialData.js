
// const getallingredients=async()=>{
//     const requestOptions = {
//         // method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         //   token: localStorage["token"],
//         },
//       };
//     const getallingredients=await axios.get("http://localhost:3000/api/v1/ingredients/",requestOptions);
//     console.log(getallingredients);
//     // return ingredients;
// }



const ingredients=[
    {ingredientid:"1",ingredientname:"water"},
    {ingredientid:"2",ingredientname:"ginger"},
    {ingredientid:"3",ingredientname:"rice"},
    {ingredientid:"4",ingredientname:"meat"},
    {ingredientid:"5",ingredientname:"beat"},
    {ingredientid:"6",ingredientname:"wheat"},
    {ingredientid:"7",ingredientname:"barley"},
    {ingredientid:"8",ingredientname:"ghost"},
]


// export default ingredients;
module.exports=ingredients;
