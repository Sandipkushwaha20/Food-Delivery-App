

// //                                 heding , object(where we can give some attributes) , content of HTML 
// const heading = React.createElement("h1", {id:"heading" , xyz:"abc"},
//  "Hellow world from React!"); //creating a ele is core thing of react

// console.log(heading);// object


/**
 * 
 * <div id="parent">
 *      <div id="child"> 
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */



const parent = React.createElement(
    "div" , 
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1", {} , "I'm an h1 tag") , React.createElement("h2", {} , "I'm an h2 tag")]
    ) ,
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1", {} , "I'm an h1 tag") , React.createElement("h2", {} , "I'm an h2 tag")]
    )]
);

console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById("root")); //creating a root and rendering somthing it is the job of react

root.render(parent);
