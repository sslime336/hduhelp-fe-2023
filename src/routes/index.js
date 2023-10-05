import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import NotFound from "../pages/errors/404";
import Console from "../pages/Console";

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Auth><App/></Auth>,
    element: <App />,
    // TODO: 子路由不生效
    children: []
  },
  {
    path: '/console',
    element: <Console />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router