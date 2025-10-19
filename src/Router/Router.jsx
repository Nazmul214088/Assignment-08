import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Components/AppDetails/AppDetails";
import PageIsNotFound from "../Components/PageIsNotFound/PageIsNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            Component: Home,
        },
        {
            path:'/apps',
            Component:Apps,
        },
        {
            path:'/installation',
            Component: Installation,
            // Component: AppCard,
          loader: () => fetch('/AppData.json'),
        },
        {
          path:'/apps/:id',
          Component:AppDetails,
          loader: () => fetch('/AppData.json'),
        },
        {
          path:'/app/*',
          Component: PageIsNotFound
        }

    ]
  },
]);