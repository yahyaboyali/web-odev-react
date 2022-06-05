import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardLayout from '../layouts/CardLayout';
import Slyde from '../layouts/Slyde';
import ActivitiesService from '../services/ActivitiesService';
import HaberServis from '../services/HaberServis';

export default function MainPage() {
  const [news, setnews] = useState([]);
  const [activities, setactivities] = useState([]);

  useEffect(() => {
    let hs = new HaberServis();
    hs.allNews().then(
      result => {
        console.log('allNews', result.data);
        setnews(result.data.data)
      }
    );

    let activitieService = new ActivitiesService();
    activitieService.allActivities()
      .then(
        result => {
          console.log('allActivities', result.data);
          setactivities(result.data.data);
        }
      )
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <Slyde />

      <Container className='mt-5'>
        <Row className="justify-content-md-center">
          <label className='bg-light'>
            <h2>Haberler</h2>
          </label>
          {
            news.map((each, index) => (
              <Col style={{ marginTop: '0.5rem' }} key={parseInt(Math.random() * 1000) + index}>
                <CardLayout title={each.header} description={each.short} linkText="Haber Detayı" linkHref="#haber1" />
              </Col>
            ))
          }
        </Row>
        <Row className="justify-content-md-center">
          <label className='bg-light'>
            <h2>Etkinlikler</h2>
          </label>
          {
            activities.map((each, index) => (
              <Col style={{ marginTop: '0.5rem' }} key={parseInt(Math.random() * 1000) + index}>
                <CardLayout title={each.header} description={each.short} linkText="Haber Detayı" linkHref="#haber1" />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  )
}