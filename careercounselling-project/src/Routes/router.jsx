import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayout from '../Layoutes/HomeLayout';
import AboutUs from '../component/AboutUs';
import Service from '../component/Service';
import Login from '../component/Login';
import Register from '../component/Register';
import Error from '../Layoutes/Error';
import PrivatRoutes from './PrivatRoutes';
import Protectedlayout from '../Layoutes/Protectedlayout';
import Course from '../component/Course';
import MyProfile from '../component/Myprofile';
import ForgetPassword from '../component/ForgetPassword';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Service></Service>,
          loader:()=>fetch('/data.json')
        }
      ]
    },
    {
      path: "/about",
      element: <AboutUs></AboutUs>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/reg", // Add this route
      element: <Register></Register>,
    },
    {
      path:'/:id',
      element:<PrivatRoutes><Protectedlayout></Protectedlayout></PrivatRoutes>,
      loader:(params)=>fetch('/data.json')

    },
    {
      path: "/course", // Add this route
      element:<PrivatRoutes><Course></Course></PrivatRoutes>,
      loader:()=>fetch('/course.json')
    },
    {
      path: '/profile',
      element:<PrivatRoutes><MyProfile></MyProfile></PrivatRoutes>,

    },
    {
      path: '/forgotpassword',
      element:<ForgetPassword></ForgetPassword>

    },
  ]);




export default router;