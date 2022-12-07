import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export interface IRoute {
  path: string;
  element: ReactNode;
}

const routesList: IRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

const router = createBrowserRouter(routesList);

export default router;
