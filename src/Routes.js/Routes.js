import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Course from "../components/Course";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import Private from "../components/Private";
import PrivateRoute from '../components/PrivateRoute';
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
                loader: async () => {
                    return fetch('https://n-one-gamma.vercel.app/courses')
                  },
              
                element:<Courses></Courses>
            },
            {
                path:"/course/:id",
                element:<Course></Course>,
                loader:({params})=> fetch(`https://n-one-gamma.vercel.app/course/${params.id}`)
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
            },
            {
                path:"/private/:id",
                loader:({params})=> fetch(`https://n-one-gamma.vercel.app/course/${params.id}`),
                element: <PrivateRoute> <Private></Private> </PrivateRoute> 
            },
            {
                path:"*",
                element:<ErrorPage></ErrorPage>
            },
        ]
    }
])