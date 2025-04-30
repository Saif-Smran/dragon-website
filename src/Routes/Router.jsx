import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
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