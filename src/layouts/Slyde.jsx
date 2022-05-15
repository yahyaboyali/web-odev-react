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
</Carousel.Item>
<Carousel.Item interval={500}>
  <img
    className="resim"
    src="/img/senlik.PNG?f=Lxq3TCXBNEKy170eHvxhFg?text=Second slide&bg=282c34"
    alt="Second slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="resim"
    src="/img/senlik.PNG?f=Lxq3TCXBNEKy170eHvxhFg?text=Third slide&bg=282c34"
    alt="Third slide"
  />
</Carousel.Item>
</Carousel></div>
  )
}
