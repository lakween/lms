import NavBar from "./nav-bar/nav-bar";
import SideBar from "./side-bar/side-bar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
            <NavBar/>
            <div style={{display: 'flex', gap: '5px', flexGrow: 1}}>
                <SideBar/>
                <Outlet/>
            </div>
        </div>
    </>
    )
}

export default Layout