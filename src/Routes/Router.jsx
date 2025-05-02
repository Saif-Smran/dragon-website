import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CatagoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <CatagoryNews></CatagoryNews>
            },
        ]
    },
    {
        path: '/auth',
        element: <h1>Authication router</h1>,
    },
    {
        path: '/news',
        element: <h1>NEWS router</h1>,
    },
    {
        path: '/*',
        element: <h1>ERROR - 402</h1>,
    },
])

export default router;