import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AltNavi from '../../../layouts/AltNavi'
import SlydeBilgisayarMuhendisligi from '../../../layouts/SlydeBilgisayarMuhendisligi'
export default function PeyzajMimarligi() {
  return (
    <div>
      <Container>
        <Row >
          <Col>
            <SlydeBilgisayarMuhendisligi />
          </Col>
        </Row>
        <Row>
          <Col>
            <AltNavi />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
