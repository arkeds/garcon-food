import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import Breadcrumbs from "./app/layouts/Breadcrumbs";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuList from "./pages/MenuList";
export interface IRoute {
  path: string;
  element: JSX.Element;
}

const withBreadCrumbs = (Component: JSX.Element): JSX.Element => {
  return (
    <>
      <Breadcrumbs/>
      {Component}
    </>
  )
}

const routesList: IRoute[] = [
  {
    path: "/",
    element: withBreadCrumbs(<Home/>),
  },
  {
    path: "/home",
    element: withBreadCrumbs(<Home/>),
  },
  {
    path: "/menu",
    element: withBreadCrumbs(<Menu/>),
  },
  {
    path: "/menu/:menuType",
    element: withBreadCrumbs(<MenuList/>),
  }
];

const router = createBrowserRouter(routesList);



export default router;
