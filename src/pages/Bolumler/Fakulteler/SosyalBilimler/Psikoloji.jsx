import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AltNavi from '../../../../layouts/AltNavi'
import Slyde from '../../../../layouts/Slyde'

export default function Psikoloji() {
  return (
    <div>
      <Container>
        <Row container>
          <Col>
            <Slyde />
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
