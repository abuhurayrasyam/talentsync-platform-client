import {
  createBrowserRouter
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTask from "../pages/AddTask";
import BrowseTasks from "../pages/BrowseTasks";
import TaskDetails from "../pages/TaskDetails";
import MyPostedTasks from "../pages/MyPostedTasks";
import UpdateTask from "../pages/UpdateTask";
import Loading from "../components/Loading";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: "/",
            loader: () => fetch('https://talentsync-platform.vercel.app/tasks/upcoming'),
            hydrateFallbackElement: <Loading></Loading>,
            Component: Home
        },
        {
          path: "/browse-tasks",
          loader: () => fetch('https://talentsync-platform.vercel.app/tasks'),
          hydrateFallbackElement: <Loading></Loading>,
          Component: BrowseTasks
        },
        {
            path: "/about-us",
            Component: AboutUs
        },
        {
            path: "/contact-us",
            Component: ContactUs
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
        {
            path: "/auth/signup",
            Component: Register
        },
        {
            path: "/auth/login",
            Component: Login
        }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: "",
        loader: () => fetch('https://talentsync-platform.vercel.app/tasks'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      },
      {
        path: "browse-tasks",
        loader: () => fetch('https://talentsync-platform.vercel.app/tasks'),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BrowseTasks
      },
      {
        path: "add-task",
        element: <PrivateRoute>
          <AddTask></AddTask>
        </PrivateRoute>
      },
      {
        path: "update-task/:id",
        loader: ({params}) => fetch(`https://talentsync-platform.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute>
          <UpdateTask></UpdateTask>
        </PrivateRoute>
      },
      {
        path: "my-posted-tasks",
        element: <PrivateRoute>
          <MyPostedTasks></MyPostedTasks>
        </PrivateRoute>
      },
    ]
  },
  {
    path: "/task-details/:id",
    loader: ({params}) => fetch(`https://talentsync-platform.vercel.app/tasks/${params.id}`),
    hydrateFallbackElement: <Loading></Loading>,
    element: <PrivateRoute>
      <TaskDetails></TaskDetails>
    </PrivateRoute>
  }
]);