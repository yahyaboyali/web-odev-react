import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AltNavi from '../../../../layouts/AltNavi'
import SlydeBilgisayarMuhendisligi from '../../../../layouts/SlydeBilgisayarMuhendisligi'
export default function BesinGidaHijyeniTeknolojisi() {
  return (
    <div>
      <Container>
        <Row container>
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
