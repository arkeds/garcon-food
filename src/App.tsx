import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Navbar from "./app/layouts/Navbar";
import "./app.scss";
function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
