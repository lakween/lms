import {useRoutes} from "react-router-dom";
import Layout from "./common/layout/layout";
import HomePage from "./user/home/home.page";
import WebHome from "./web/home.page";
import SignUp from "./user/sign-up/sign-up.page";
import Login from "./common/loging/loging.page";

export let RouterConfig = () => {

    let routes = [
        {
            path: "/",
            element: <WebHome/>,
        },
        {
            path: "home",
            element: <Layout/>,
            children: [
                {index: true, element: <HomePage/>},
            ],
        },
        {
            path: "signup",
            element: <SignUp/>,
        },
        {
            path: "login",
            element: <Login/>,
        },
    ];

    let element = useRoutes(routes);
    return element
}