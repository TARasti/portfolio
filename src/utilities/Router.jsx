import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import PageNotFound from "../pages/PageNotFound";
import RenderLayout from "../layouts/RenderLayout";
import Projects from "../pages/Projects";
import { ROUTES_PREFIX } from "../constants";

const router = createBrowserRouter([
    {
        path: `${ROUTES_PREFIX}/`,
        element: <RenderLayout><HomePage /></RenderLayout>
    },
    {
        path: `${ROUTES_PREFIX}/projects`,
        element: <RenderLayout><Projects /></RenderLayout>
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]);

export default router;