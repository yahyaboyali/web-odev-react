import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardLayout from '../layouts/CardLayout'
import Slyde from '../layouts/Slyde'
import ActivitiesService from '../services/ActivitiesService'
import HaberServis from '../services/HaberServis'
export default function MainPage() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    let hs = new HaberServis();
    hs.allNews().then(
      result => setnews(result.data.data)
    )
  }, []);
  const [activities, setactivities] = useState([]);
  let activitieService = new ActivitiesService();
  activitieService.allActivities().then(
    result => setactivities(result.data.data)
  )
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
            news.map(news => (
              <Col>
                <CardLayout title={news.header} description={news.short} linkText={news.body} />
              </Col>

            ))
          }
        </Row>
        <Row className="justify-content-md-center">
          <label className='bg-light'>
            <h2>Etkinlikler</h2>
          </label>
          {
            news.map(activities => (
              <Col>
                <CardLayout title={activities.header} description={activities.short} linkText={activities.body} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  )
}
