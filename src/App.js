import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext"
// import Grocery from "./components/Grocery";

//Chunking
//Code Spliting
//Dynamic Bundling
//Lazy loading
// on deman loading
//dynamic import
//Importing lazy loading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName , setUserName] = useState();
  // authentication
  

  useEffect(() => {
    //make and API call send UserName and Password
    const data = {
      name: "sandip",
    };
    setUserName(data.name);
  } , [])


  return (
    //we can rap a single componet as well
    /* <UserContext.Provider value={{ loggedInUser : userName}}>
      <Header/>
    </UserContext.Provider> */

    //out Side Default value
    // also we can use like this
    <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
      <div className="app">
        {/* When ever change in the path the Outlet will be filled by the children according to the path*/}
        <Header/>
        <Outlet/>
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
        // I'm using children to show header on the top
      children: [
        {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/grocery",
        element:(
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        // : => dynamic path
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

 