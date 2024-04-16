import { createBrowserRouter, redirect } from "react-router-dom";
import { AuthProvider } from "../store/auth";
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
      const authProvider = AuthProvider.get()
      if (authProvider && AuthProvider.get().isAuthenticated) {
        return redirect("/");
      }
      return null;
    },
    element: <Login />,
  },
  {
    path: "/console",
    loader: ({ request }) => {
      const authProvider = AuthProvider.get()
      if (!authProvider || !AuthProvider.get().isAuthenticated) {
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
