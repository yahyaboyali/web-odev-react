import React from 'react'
import { Col, Row, Table,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Orman() {
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
                  <Nav.Link as={Link} to="/Bolumler/OrmanMuhendisligi">Orman Mühendisliği</Nav.Link>
                  </td>
                </tr>
                <tr>
                  <td>
                      2
                  </td>
                  <td>
                  <Nav.Link as={Link} to="/Bolumler/PeyzajMimarligi">Peyzaj Mimarlığı</Nav.Link>
                  </td>
                </tr>
                <tr>
                  <td>
                      3
                  </td>
                  <td>
                  <Nav.Link as={Link} to="/Bolumler/OrmanEndustriMuhendisligi">Orman Endüstri mühendisliği</Nav.Link>
                  </td>
                </tr>
              </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}
