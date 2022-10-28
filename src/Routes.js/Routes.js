import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";

export const routes = createBrowserRouter([
{
    path:"/",
    element:<Main></Main>,
    children:[
        {path:"/",
    element:<Home></Home>}
    ]
}
])