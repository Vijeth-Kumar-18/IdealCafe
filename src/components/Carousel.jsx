import React from 'react';
import { Carousel } from 'react-bootstrap';

const IceCreamCarousel = () => {
  const carouselItems = [
    {
      src: 'https://example.com/icecream1.jpg',
      alt: 'Vanilla Delight',
      caption: 'Indulge in the creamy richness of our Vanilla Delight!',
    },
    {
      src: 'https://example.com/icecream2.jpg',
      alt: 'Chocolate Heaven',
      caption: 'Dive into the world of Chocolate Heaven!',
    },
    {
      src: 'https://example.com/icecream3.jpg',
      alt: 'Berry Bliss',
      caption: 'Savor the tangy sweetness of Berry Bliss!',
    },
  ];

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.alt}</h3>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default IceCreamCarousel;