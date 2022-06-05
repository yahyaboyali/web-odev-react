import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideService from '../services/SlideService';

export default function Slyde() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const service = new SlideService();
    service.allSlides().then(
      result => {
        console.log('allSlides', result.data);
        setSlides(result.data.data)
      }
    );
  }, []);

  return (
    <div style={{ marginTop: '1rem' }}>
      <Carousel>
        {
          slides.map((each, index) => (
            <Carousel.Item key={parseInt(Math.random() * 1000) + index} interval={1000}>
              <img
                className="resim"
                src={each.url}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}
