import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error-page/ErrorPage";
import Login from "../pages/login/Login";
import LoginForm from "../components/login-form/LoginForm";
import RegisterForm from "../components/registe-form/RegisterForm";
import MainLayout from "../layout/MainLayout";

const Route = createBrowserRouter ([
    {
        path: `/`,
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:`/`,
                element: <Home></Home>
            },
            {
                path: `/login`,
                element: <Login></Login>,
                children: [
                    {
                        path: `/login`,
                        element: <LoginForm></LoginForm>
                    },
                    {
                        path: `/login/register-form`,
                        element: <RegisterForm></RegisterForm>
                    }
                ]
            }
        ]
    }
])

export default Route;