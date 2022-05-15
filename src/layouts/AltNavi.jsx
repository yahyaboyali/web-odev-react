import React from 'react'
import { Row, Nav, Navbar } from 'react-bootstrap'

export default function AltNavi() {
    return (
        <div>
            <Row className="fixed-bottom">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Ana sayfa</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Uzakan eğitim sistemi</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Kütüphane</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Eğitim Merkezi</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Aksis</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Aday Öğrenci</Nav.Link>
                    </Nav>
                </Navbar>
            </Row>

        </div>
    )
}
