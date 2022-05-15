import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function AltNavi() {
    return (
        <div className='col-md-12 feature-container'>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container >
                    <Nav>
                        <Nav.Link href="#home">Ana sayfa</Nav.Link>
                        <Nav.Link href="#home">Aksis</Nav.Link>
                        <Nav.Link href="#features">Canvas</Nav.Link>
                        <Nav.Link href="#pricing">Fakülteler</Nav.Link>
                        <Nav.Link href="#pricing">Fakülteler</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
