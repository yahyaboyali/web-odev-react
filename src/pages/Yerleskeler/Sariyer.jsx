import React from 'react'
import { Col, Row, Table,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Sariyer() {
  return (
    <div>
      <Row>
        <Col>
          <Table striped bordered hover>
              <thead>
                <tr>
                    <th>#</th>
                    <th>fakülteler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                      1
                  </td>
                  <td>
                  <Nav.Link as={Link} to="/Fakulteler/Veterinerlik">Veterinerlik fakültesi</Nav.Link>
                  </td>
                </tr>
                <tr>
                  <td>
                      2
                  </td>
                  <td>
                  <Nav.Link as={Link} to="/Fakulteler/SporBilimleri">Spor Bilimleri Fakültesi</Nav.Link>
                  </td>
                </tr>
                <tr>
                  <td>
                      3
                  </td>
                  <td>
                  <Nav.Link as={Link} to="/Fakulteler/Orman">Orman fakültesi</Nav.Link>
                  </td>
                </tr>
              </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}
