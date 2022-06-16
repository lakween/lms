import {useRoutes} from "react-router-dom";
import Layout from "./common/layout/layout";
import HomePage from "./user/home/home.page";
import WebHome from "./web/home.page";
import SignUp from "./user/sign-up/sign-up.page";
import Login from "./common/loging/loging.page";
import {useSelector} from "react-redux";

export let RouterConfig = () => {

    let userType = useSelector(state => state.userType)

    let commonRoutes = [
        {
            path: "/",
            element: <WebHome/>,
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


    let studentRoutes = [
        ...commonRoutes,
        {
            path: "home",
            element: <Layout/>,
            children: [
                {index: true, element: <HomePage/>},
            ],
        },
    ]

    let adminRoutes = [
        ...commonRoutes,
        {
            path: "home",
            element: <Layout/>,
            children: [
                {index: true, element: <HomePage/>},
            ],
        },
    ]



    let element = useRoutes(userType== "student"?studentRoutes:adminRoutes);
    return element
}