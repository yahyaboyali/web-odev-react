import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardLayout from '../layouts/CardLayout'
export default function Yonetim() {
  return (
    <div>
      <Container className='mt-5'>
        <Row >
          <label className='bg-light'>
            <h2>Haberler</h2>
          </label>
          <Col>
            <CardLayout title="Rektör" description="bilgiler " linkHref="#web" linkText="web sayfası" />
          </Col>
        </Row>
        <Row >
        <Col >
            <CardLayout title="dekan" description="bilgiler" linkHref="#haber2" linkText="web sayfası" />
          </Col>
          <Col >
            <CardLayout title="rektör yardımcısı" description=" bilgiler" linkHref="#haber3" linkText="web sayfası" />
          </Col>
        </Row>
        <Row className='mt-5' >
          <label className='bg-light'>
            <h2>Etkinlikler</h2>
          </label>
          <Col >
            <CardLayout title="danışman" description="bilgiler" linkHref="#duyuru1" linkText="web sayfası" />
          </Col>
          <Col >
            <CardLayout title="sekreter" description="bilgiler" linkHref="#duyuru2" linkText="web sayfası" />
          </Col>
          <Col >
            <CardLayout title="danışman" description="bilgiler" linkHref="#duyuru3" linkText="web sayfası" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
