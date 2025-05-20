import {
  createBrowserRouter
} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
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
    path: "/add-task",
    Component: AddTask
  },
  {
    path: "/browse-tasks",
    loader: () => fetch('http://localhost:3000/tasks'),
    hydrateFallbackElement: <Loading></Loading>,
    Component: BrowseTasks
  },
  {
    path: "/task-details/:id",
    loader: ({params}) => fetch(`http://localhost:3000/tasks/${params.id}`),
    hydrateFallbackElement: <Loading></Loading>,
    Component: TaskDetails
  },
  {
    path: "/my-posted-tasks",
    loader: () => fetch('http://localhost:3000/tasks/'),
    hydrateFallbackElement: <Loading></Loading>,
    Component: MyPostedTasks
  },
  {
    path: "/update-task/:id",
    loader: ({params}) => fetch(`http://localhost:3000/tasks/${params.id}`),
    hydrateFallbackElement: <Loading></Loading>,
    Component: UpdateTask
  }
]);