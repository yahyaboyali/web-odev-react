import React from 'react'
import { Col, Row, Table,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function GuzelSanatlar() {
  return (
    <div>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Bölümler</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1
                </td>
                <td>
                  <Nav.Link as={Link} to="/Bolumler/SporYoneticiligi">Spor Yöneticiliği</Nav.Link>
                </td>
              </tr>
              <tr>
                <td>
                  2
                </td>
                <td>
                  <Nav.Link as={Link} to="/Bolumler/Antrenorluk">Antrenörlük</Nav.Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}
