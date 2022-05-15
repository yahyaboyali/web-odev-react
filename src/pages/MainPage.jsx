import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
          <Col>
            <CardLayout title="Haber1" description="Haber açıklaması1" linkHref="#haber1" linkText="Haber detayı1" />
          </Col>
          <Col >
            <CardLayout title="Haber2" description="Haber açıklaması2" linkHref="#haber2" linkText="Haber detayı2" />
          </Col>
          <Col >
            <CardLayout title="Haber3" description="Haber açıklaması3" linkHref="#haber3" linkText="Haber detayı3" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <label className='bg-light'>
            <h2>Etkinlikler</h2>
          </label>
          <Col >
            <CardLayout title="Duyuru1" description="Duyuru açıklama1" linkHref="#duyuru1" linkText="Duyuru detayı1" />
          </Col>
          <Col >
            <CardLayout title="Duyuru2" description="Duyuru açıklama2" linkHref="#duyuru2" linkText="Duyuru detayı2" />
          </Col>
          <Col >
            <CardLayout title="Duyuru3" description="Duyuru açıklama3" linkHref="#duyuru3" linkText="Duyuru detayı3" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
