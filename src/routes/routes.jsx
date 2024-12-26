import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Components/Homepage";
import Signin from "../pages/Signin";

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
    }
]
)
export default router;