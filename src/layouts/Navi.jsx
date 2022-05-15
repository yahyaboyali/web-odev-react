import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Navi() {
    return (
        <Navbar bg="dark" variant='dark' expand="sm">
            <Container fluid="md">
                <Navbar.Brand><Nav.Link as={Link} to="/">Agalar University</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Ana Sayfa</Nav.Link>
                        <NavDropdown title="Hakkımızda" id="nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Yonetim">Yönetim</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Misyon">Misyon&Vizyon</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/IdariBirimler">İdari Birimler</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Akademik" id="nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Takvim">Takvim</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Öğrenci" id="nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Kantin">Kantin</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/Yerleskeler">Yerleşkeler</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
