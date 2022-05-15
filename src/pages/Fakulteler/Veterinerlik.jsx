import React from 'react'
import { Col, Row, Table,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Veterinerlik() {
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
                  <Nav.Link as={Link} to="/Bolumler/BesinGidaHijyeniTeknolojisi">Besin/Gıda hijyeni teknolojisi</Nav.Link>
                  </td>
                </tr>
                <tr>
                  <td>
                      2
                  </td>
                  <td>
                  <Nav.Link as={Link} to="/Bolumler/KlinikBilimler">Klinik Bilimler</Nav.Link>
                  </td>
                </tr>
                <tr>
                  <td>
                      3
                  </td>
                  <td>
                  <Nav.Link as={Link} to="/Bolumler/VeterinerHekimligiTemelBilimler">Veteriner Hekimligi Temel Birimler</Nav.Link>
                  </td>
                </tr>
              </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}
