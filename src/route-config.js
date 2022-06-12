import {useRoutes} from "react-router-dom";
import Layout from "./common/layout/layout";
import HomePage from "./user/home/home.page";

export let RouterConfig = () => {

    let routes = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <HomePage/>},
            ],
        },
        {
            path: "home",
            element: <Layout/>,
            children: [
                {index: true, element: <HomePage/>},
            ],
        },
    ];

    let element = useRoutes(routes);
    return element
}