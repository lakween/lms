import SidebarWithHeader from "./side-bar/side-bar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <SidebarWithHeader>
                <Outlet/>
            </SidebarWithHeader>
    </>
    )
}

export default Layout