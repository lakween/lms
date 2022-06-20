import {useRoutes} from "react-router-dom";
import Layout from "./common/layout/layout";
import HomePage from "./user/home/home.page";
import WebHome from "./web/home.page";
import SignUp from "./user/sign-up/sign-up.page";
import Login from "./common/loging/loging.page";
import {useSelector} from "react-redux";
import useUserLoginInfo from "./hooks/useUserLoginInfo";
import {Text} from "@chakra-ui/react";
import StudentProfile from "./user/student-profile/student-profile";

export let RouterConfig = () => {

    const [userType] = useUserLoginInfo()

    let studentRoute = [
        {
            path: "home",
            element: <Layout/>,
            children: [
                {index: true, element: <HomePage/>},
            ],
        },
        {
            path: "profile",
            element: <Layout/>,
            children: [
                {index: true, element: <StudentProfile/>},
            ],
        },
    ]

    let adminRoute = [
        {
            path: "home",
            element: <Layout/>,
            children: [
                {index: true, element: <HomePage/>},
            ],
        },
    ]

    let routes = [
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
        ...(userType == "student" ? studentRoute : userType == "admin" ? adminRoute : [])
    ];

    let element = useRoutes(routes)
    return element
}