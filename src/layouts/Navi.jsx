import React from 'react'
import { Nav, Navbar, Container, Button,NavDropdown } from 'react-bootstrap'
export default function Navi() {
    return (
        <Navbar bg="dark" variant='dark' expand="sm">
            <Container fluid="md">
                <Navbar.Brand>Agalar University</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >Ana Sayfa</Nav.Link>
                        <Nav.Link >Hakkımızda</Nav.Link>
                        <NavDropdown title="Öğrenci" id="nav-dropdown">
                            <NavDropdown.Item >Dersler</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item >Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Akademik" id="nav-dropdown">
                            <NavDropdown.Item >Dersler</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item >Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>Haberler</Nav.Link>
                        <Nav.Link>Yerleşkeler</Nav.Link>
                    </Nav>
                    <Button variant="primary">Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
