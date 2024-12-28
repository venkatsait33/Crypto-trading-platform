import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Components/Homepage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Homepage />
            }
        ]
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/signup',
        element: <Signup />
    }
]
)
export default router;