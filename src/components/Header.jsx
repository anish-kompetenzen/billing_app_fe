import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary d-flex align-items-center">
            <Container>
                <Navbar.Brand className='d-flex'><h3>BS</h3><span> - BillingSuite</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/r">Register</Nav.Link>
                        <Nav.Link href="/">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header