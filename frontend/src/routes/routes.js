import { createBrowserRouter } from "react-router-dom";
import { adminRoutes, adminLogin } from "./adminRoutes";
const routes = [adminRoutes, adminLogin];

const router = createBrowserRouter(routes);

export default router;
