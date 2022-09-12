import {Button, Nav, NavItem} from "reactstrap";
import Logo from "./Logo";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import useUserLoginInfo from "../../../hooks/useUserLoginInfo";
import {useEffect, useState} from "react";
import {getAllDocFromCollection} from "../../common-action/common-action";

const Sidebar = () => {
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();
    const [LinkItems, setLinkItems] = useState([])
    const [userType, status, user] = useUserLoginInfo()
    let navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [user?.uid])

    async function getData() {
        if (status == 'pending') {
            setLinkItems([])

        } else if (status == 'approved' || '') {
            let res = await getAllDocFromCollection('userRoutes')
            setLinkItems([...res])

        } else if (userType == 'admin') {
            let res = await getAllDocFromCollection('adminRoutes')
            setLinkItems([...res])
        }
    }

    return (
        <div className="p-3" style={{minHeight: '100vh'}}>
            <div className="d-flex align-items-center">
                <Logo/>
            </div>
            <div className="pt-4 mt-2">
                <Nav vertical className="sidebarNav">
                    {LinkItems.map((navi, index) => (
                        <NavItem key={index} className="sidenav-bg">
                            <Link
                                to={navi.link}
                                className={
                                    location.pathname === navi.link
                                        ? "text-primary nav-link py-3"
                                        : "nav-link text-secondary py-3"
                                }
                            >
                                <i className={navi.icon}></i>
                                <span className="ms-3 d-inline-block">{navi.name}</span>
                            </Link>
                        </NavItem>
                    ))}
                    {/*<Button*/}
                    {/*    color="danger"*/}
                    {/*    tag="a"*/}
                    {/*    target="_blank"*/}
                    {/*    className="mt-3"*/}
                    {/*    href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"*/}
                    {/*>*/}
                    {/*    Upgrade To Pro*/}
                    {/*</Button>*/}
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;
