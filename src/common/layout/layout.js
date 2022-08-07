import Header from "./nav-bar/nav-bar";
import Sidebar from "./side-bar/side-bar";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

const Layout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex" style={{maxHeight:'100vh'}}>
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="mx-auto w-100" style={{maxHeight:'100vh'}}>
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-3 wrapper" style= {{backgroundColor: "#eee", maxHeight:'92vh',minHeight:'92vh', overflow:'scroll'}} fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Layout;
