
// {/* <div id ="parent">
//     <div id = "child1">
//         <h1>i am the first page</h1>
//     </div>
//     <div id="child2" >
//         <h1>i am the second page</h1>
//     </div>
// </div> */}

// reactelemnt(object) = HTML(browser Understand)

const parent = React.createElement("div" ,{id:"parent"} ,[
React.createElement("div" ,{id:"child1"} , React.createElement("h1", {}, "i am the first page"),
React.createElement("div" ,{id:"child2"} , React.createElement("h1", {}, "i am the second page"),
]);


const heading  = React.createElement("h1", 
{
    id: "heading",
}
, "Hello this is React");

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
