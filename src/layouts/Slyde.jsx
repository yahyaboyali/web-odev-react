import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default function Slyde() {
  return (
    <div style={{  marginTop: '1rem' }}>
    <Carousel>
<Carousel.Item interval={1000}>
  <img
    className="resim"
    src="/img/senlik.PNG?f=Lxq3TCXBNEKy170eHvxhFg?text=First slide&bg=282c34"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
  <img
    className="resim"
    src="/img/senlik.PNG?f=Lxq3TCXBNEKy170eHvxhFg?text=Second slide&bg=282c34"
    alt="Second slide"
  />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="resim"
    src="/img/senlik.PNG?f=Lxq3TCXBNEKy170eHvxhFg?text=Third slide&bg=282c34"
    alt="Third slide"
  />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel></div>
  )
}
