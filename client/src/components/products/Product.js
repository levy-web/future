import React, {useState, useEffect} from 'react'
import ProductItem from './ProductItem'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categories/CategoryAction';
import {NavLink} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './Elems';
import Footer from '../Footer';
import SideNav from '../SideNav';
import { fetchProducts } from '../redux/product/ProductAction';
import CarouselLoading from './CarouselLoading';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Product() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.products.products)
    const loading = useSelector((state)=>state.products.loading)

    useEffect(()=>{
        dispatch(fetchCategories())
        dispatch(fetchProducts())
    }, [])

    const prodItem = products.map((product)=> <ProductItem protection={product.category.protected_area} category={product.category.name} product={product}/>)

    const showProducts = loading ? 
      <CarouselLoading/> :
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
        {prodItem}            
      </Carousel>

  return (
  <>
  <SideNav/>
    <div className='container my-5'>
        <div className='d-flex'>
        <h6>Top deals</h6>
        <NavLink className='fs-6 ms-auto me-2'>view all{` (${products.length}) items`}</NavLink>
      </div>
      <hr/>

      <div className='my-5'>              
      <div className = "row g-4 my-2 mx-auto">
        {showProducts}               
      </div> 
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Product