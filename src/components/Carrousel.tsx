import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from '@/styles/Carrousel.module.css';

interface CarouselProps {
  items: string[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={items.length > 1}
      infiniteLoop
      emulateTouch
    >
      {items.map((item, index) => (
        <div key={index} className={styles['actor-box']}>
          <p>{item}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
