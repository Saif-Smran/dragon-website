import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CatagoryNews";
import Login from "../Pages/Login";
import Aunthication from "../Layouts/Aunthication";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRout from "../Provider/PrivateRout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>,
            },
            {
                path: '/catagory/:id',
                element: <CatagoryNews></CatagoryNews>,
                loader: () => fetch('/news.json'),
            },
        ]
    },
    {
        path: '/auth',
        element: <Aunthication></Aunthication>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRout>
            <NewsDetails></NewsDetails>
        </PrivateRout>,
        loader: () => fetch('/news.json'),
    },
    {
        path: '/*',
        element: <h1>ERROR - 402</h1>,
    },
])

export default router;