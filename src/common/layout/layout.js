import NavBar from "./nav-bar/nav-bar";
import SideBar from "./side-bar/side-bar";

const Layout = () => {
    return (
        <>
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
            <NavBar/>
            <div style={{display: 'flex', gap: '5px', flexGrow: 1}}>
                <SideBar/>
                <text>scscscscscs</text>
            </div>
        </div>
    </>
    )
}

export default Layout