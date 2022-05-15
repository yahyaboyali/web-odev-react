import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardDuyuru from '../layouts/CardDuyuru'
import CardLayout from '../layouts/CardLayout'
import Slyde from '../layouts/Slyde'
export default function login() {
  return (
    <div>
      <Slyde />
      <Container className='mt-5'>
        <Row className="justify-content-md-center">
          <label className='bg-light'>
            <h2>Haberler</h2>
          </label>
          <Col >
            <CardLayout/>
          </Col>
          <Col >
            <CardLayout />
          </Col>
          <Col >
            <CardLayout />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <label className='bg-light'>
            <h2>Etkinlikler</h2>
          </label>
          <Col >
            <CardDuyuru />
          </Col>
          <Col >
            <CardDuyuru />
          </Col>
          <Col >
            <CardDuyuru />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
