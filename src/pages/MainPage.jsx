import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardLayout from '../layouts/CardLayout'
import Slyde from '../layouts/Slyde'
import HaberServis from '../services/HaberServis'
export default function MainPage() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    let hs = new HaberServis();
    hs.allNews().then(
      result => setnews(result.data.data)
    )
  }, [])
  return (
    <Container>
      <Slyde />

      <Container className='mt-5'>
        <Row className="justify-content-md-center">
          <label className='bg-light'>
            <h2>Haberler</h2>
          </label>
          <Col>
            <CardLayout title="Haber1" description="Haber açıklaması1" linkHref="#haber1" linkText="Haber detayı1" />
          </Col>
          {
            news.map(news =>(
              <CardLayout title={news.header} description={news.short} linkText={news.body}/>
            ))
          }
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
    </Container>
  )
}
