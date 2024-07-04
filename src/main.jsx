import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import "./index.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Error from './customError.jsx';
import Product from './Product.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import CourseMain from './course/courseMain.jsx';
import CourseArticle from './course/CourseArticle.jsx';
import MCQ from './MCQ.jsx';
import CourseGamedev from './course/CourseGamedev.jsx';
import MCQGamedev from './MCQ/MCQGamedev.jsx';
import Coursevim from './course/Coursevim.jsx';
import MCQvim from './MCQ/MCQvim.jsx';
import Coursegenai from './course/Coursegenai.jsx';
import MCQgenai from './MCQ/MCQgenai.jsx';
import Coursenode1 from './course/Coursenode1.jsx';
import MCQnode1 from './MCQ/MCQnode1.jsx';
import Coursereact from './course/Coursereact.jsx';
import Courseboothin from './course/Courseboothin.jsx';
import MCQBootstrap from './MCQ/MCQBootstrap.jsx';
import MCQReact from './MCQ/MCQreact.jsx';
import MyCourses from './MyCourses.jsx';
let Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Home",
                element: <Home></Home>
            },
            {
                path: "/About",
                element:<About></About>
            },
            {
                path: "/Product/:id",
                element: <Product></Product>
            },
            {
              path: "/Login",
              element: <Login></Login>
          },
          {
            path: "/Register",
            element: <Register></Register>
          },
          {
            path: "/CourseMain",
            element: <CourseMain></CourseMain>
          },
          {
            path: "/CourseArticle",
            element: <CourseArticle></CourseArticle>
          },
          {
            path: "/MCQ",
            element: <MCQ></MCQ>
          },
          {
            path: "/CourseGamedev",
            element:<CourseGamedev></CourseGamedev>
          },
          {
            path: "/MCQGamedev",
            element:<MCQGamedev></MCQGamedev>
          },
          {
            path: "/Coursevim",
            element:<Coursevim></Coursevim>
          },
          {
            path: "/MCQvim",
            element:<MCQvim></MCQvim>
          },
          {
            path: "/Coursegenai",
            element:<Coursegenai></Coursegenai>
          },
          {
            path: "/MCQgenai",
            element:<MCQgenai></MCQgenai>
          },
          {
            path: "/Coursenode1",
            element:<Coursenode1></Coursenode1>
          },
          {
            path: "/MCQnode1",
            element:<MCQnode1></MCQnode1>
          },
          {
            path: "/Coursereact",
            element:<Coursereact></Coursereact>
          },
          {
            path: "/Courseboothin",
            element:<Courseboothin></Courseboothin>
          },
          {
            path: "/MCQBootstrap",
            element:<MCQBootstrap></MCQBootstrap>
          },
          {
            path: "/MCQReact",
            element:<MCQReact></MCQReact>
          },
          {
            path: "/MyCourses",
            element:<MyCourses></MyCourses>
          }



        ],errorElement :<Error></Error>
    }


])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router}></RouterProvider>
)
