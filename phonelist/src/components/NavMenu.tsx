import {Container, Nav, Navbar} from "react-bootstrap";
import '../css/NavMenu.css'
import React from "react";

function NavMenu() {
    return (
        <Navbar bg="secondary" expand="md">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Phone Number Overview</Nav.Link>
                        <Nav.Link href="#">Add a phone number</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavMenu;