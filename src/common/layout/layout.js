import Header from "./nav-bar/nav-bar";
import Sidebar from "./side-bar/side-bar";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

const Layout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea mx-auto w-100">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" style= {{backgroundColor: "#eee",minHeight:'100vh'}} fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Layout;
