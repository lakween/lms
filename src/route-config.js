import {useRoutes} from "react-router-dom";
import Layout from "./common/layout/layout";
import HomePage from "./user/home/home.page";
import Login from "./common/loging/loging.page";
import SignUp from "./user/sign-up/sign-up.page";

export let RouterConfig = () => {

    let routes = [
        {
            path: "/",
            element: <Login/>,
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
    ];

    let element = useRoutes(routes);
    return element
}