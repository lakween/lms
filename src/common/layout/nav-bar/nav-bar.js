import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className={'ms-2'} href="#home">Learning Management System</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar