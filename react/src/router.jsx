import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import CreateTicket from "./views/tickets/CreateTicket";
import Dashboard from "./views/Dashboard";
import Login from "./views/auth/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/auth/Signup";
import Tickets from "./views/tickets/Tickets";
import UserForm from "./views/users/UserForm";
import Users from "./views/users/Users";
import ViewTicket from "./views/tickets/ViewTicket";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to={"/dashboard"} />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/users/new",
                element: <UserForm key="userCreate" />,
            },
            {
                path: "/users/:id",
                element: <UserForm key="userUpdate" />,
            },
            {
                path: "/tickets",
                element: <Tickets />,
            },
            {
                path: "/tickets/:id",
                element: <ViewTicket />,
            },
            {
                path: "/tickets/create",
                element: <CreateTicket />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
