import { RouterProvider } from "react-router-dom";
import {BreadcrumbContextProvider} from './app/context/BreadcrumbContext'
import router from "./routes";
import Navbar from "./app/layouts/Navbar";

import "./app.scss";
import Breadcrumbs from "./app/layouts/Breadcrumbs";
function App() {
  return (
    <>
      <BreadcrumbContextProvider>
        <Navbar />
        <Breadcrumbs/>
        <RouterProvider router={router} />
      </BreadcrumbContextProvider>
    </>
  );
}

export default App;
