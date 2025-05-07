import {
    createBrowserRouter,
    
  } from "react-router";

import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import BookMark from "../pages/BookMark";
  
  
 export const router = createBrowserRouter([
    {
      path: "/",
      Component: HomeLayout,
      children:[
        {
          path: "/",
          Component: Home,
        },
        {
          path: "/category/:id",
          Component:CategoryNews,
          loader: () => fetch('/news.json'),
        },
        {
          path: '/bookmark',
          loader: () => fetch('/news.json'),
          Component: BookMark,
        },
        
      ]
    },
    
  ]);