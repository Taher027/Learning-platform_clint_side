import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Course from "../components/Course";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import Register from "../components/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/courses",
                element:<Courses></Courses>
            },
            {
                path:"/course/:id",
                element:<Course></Course>,
                loader:({params})=> fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:"/faq",
                element:<FAQ></FAQ>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])