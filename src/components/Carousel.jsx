import React from 'react';
import { Carousel } from 'react-bootstrap';

const IceCreamCarousel = () => {
  const carouselItems = [
    {
      src: 'https://images.pexels.com/photos/10175400/pexels-photo-10175400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Vanilla Delight',
      caption: 'Indulge in the creamy richness of our Vanilla Delight!',
    },
    {
      src: 'https://images.pexels.com/photos/5061197/pexels-photo-5061197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Chocolate Heaven',
      caption: 'Dive into the world of Chocolate Heaven!',
    },
    {
      src: 'https://images.pexels.com/photos/26063521/pexels-photo-26063521/free-photo-of-top-view-of-scoops-of-strawberry-and-vanilla-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Berry Bliss',
      caption: 'Savor the tangy sweetness of Berry Bliss!',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Mango Magic',
      caption: 'Taste the tropical burst of Mango Magic!',
    },
    {
      src: 'https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Pistachio Paradise',
      caption: 'Enjoy the nutty smoothness of Pistachio Paradise!',
    },
  ];

  return (
    <div className="container my-4">
      <Carousel fade interval={3000} pause="hover">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 rounded-4 shadow-lg carousel-img"
              src={item.src}
              alt={item.alt}
              style={{ maxHeight: '500px', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <Carousel.Caption
              className="rounded-4 px-4 py-3"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
                backdropFilter: 'blur(5px)',
              }}
            >
              <h3 className="fw-bold text-light">{item.alt}</h3>
              <p className="text-light">{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default IceCreamCarousel;
