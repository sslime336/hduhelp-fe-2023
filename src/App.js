import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster reverseOrder={true} />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  );
}
