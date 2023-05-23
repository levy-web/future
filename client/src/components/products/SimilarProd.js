import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom'
import ProductItem from './ProductItem';
import Marquee from "react-fast-marquee";
import { addToSimilar } from '../redux/categories/CategoryAction';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './Elems';
import CarouselLoading from './CarouselLoading';

function SimilarProd({simCategory, id, protectedArea}) {

    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)
    const simProduct = useSelector((state)=>state.categories.simProd)
    const loading = useSelector((state)=>state.products.loading)

    useEffect(()=>{

    cat.map((category)=>{
      if (category.name === simCategory){
        dispatch(addToSimilar(category.products))
      }
    })

    }, [id])

    const similarProducts = simProduct.map((item)=>{
        return <ProductItem key={item.id} category={simCategory} protection={protectedArea} product={item}/>
    })

    const showProducts = loading ? 
    <CarouselLoading/> :
    <Carousel 
    responsive={responsive} 
    swipeable={true}
    draggable={true}
    showDots={false}
    focusOnSelect={true}
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
    itemClass="carosel carousel-item-padding-40-px"
    className='carosel'
    >
      {similarProducts}            
    </Carousel>

  return (
    <div className='my-5'>
      <div className='header-div rounded my-3 d-flex content-align-center'>
        <h6 className='text-white mx-2'>Similar Products</h6>
        {loading ? "" : <NavLink to={`/category/${protectedArea}/${simCategory}`} className='fs-6 ms-auto text-decoration-none me-2 text-white'>view all{` (${simProduct.length}) items`}</NavLink>}
      </div>
      <hr/>   
      
      <div className = "row g-4 my-2 mx-auto">
        {showProducts}                
      </div> 
    </div>
  )
}

export default SimilarProd