import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home";
import CityDetail from "../pages/CityDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/city/:id',
        element: <CityDetail />
    },
    {
        path: '*',
        element: <div>Error</div>
    }
]);

export default router;