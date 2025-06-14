import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Dashboard = lazy(() => import("../pages/dashboard"));

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
};

export default AppRoutes;
