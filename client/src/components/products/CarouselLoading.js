import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './Elems';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function CarouselLoading() {
  return (
    <Carousel 
      responsive={responsive} 
      swipeable={true}
      draggable={true}
      showDots={false}
      focusOnSelect={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="carosel"
      >
      <div className="d-flex">
        <div className="mx-3">
          <Skeleton height={300} width={250} />
        </div>
        <div className="mx-3">
          <Skeleton height={300} width={250}/>
        </div>
        <div className="mx-3">
          <Skeleton height={300} width={250} />
        </div>
        <div className="mx-3">
          <Skeleton height={300} width={250} />
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselLoading