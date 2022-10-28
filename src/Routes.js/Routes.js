import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Main from "../components/Main";

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
                path:"/faq",
                element:<FAQ></FAQ>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            }
        ]
    }
])