import { createBrowserRouter, redirect } from "react-router-dom";
import { AuthProvider } from "../components/Auth";
import Console from "../pages/Console";
import NotFound from "../pages/errors/404";
import Home from "./../pages/Home";
import Login from "./../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    loader: ({ request }) => {
      if (AuthProvider.isAuthenticated) {
        return redirect("/");
      }
      return null;
    },
    element: <Login />,
  },
  {
    path: "/console",
    loader: ({ request }) => {
      if (!AuthProvider.isAuthenticated) {
        let params = new URLSearchParams();
        params.set("callback", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
      }
      return null;
    },
    element: <Console />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
