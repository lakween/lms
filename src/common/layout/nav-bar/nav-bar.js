import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = ()=>{
    return(
        <><>
            <Navbar bg="dark" variant="dark">
                <div className={"ml-2 d-flex p-2 flex-row"}>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </></>
    )
}

export default NavBar