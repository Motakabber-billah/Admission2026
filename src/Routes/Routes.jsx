import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])

export default router;