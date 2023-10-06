import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import NotFound from "../pages/errors/404";
import Console from "../pages/Console";
import Auth from "../components/Auth";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/console',
    element: <Auth><Console /></Auth>
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router