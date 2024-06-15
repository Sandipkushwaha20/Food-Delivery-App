import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
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
  return (
    <div className="app">
      <Header/>
      {/* When ever change in the path the Outlet will be filled by the children according to the path*/}
      <Outlet/>
    </div>
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

 