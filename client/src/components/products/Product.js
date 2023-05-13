import React, {useState, useEffect} from 'react'
import ProductItem from './ProductItem'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categories/CategoryAction';
import {NavLink} from 'react-router-dom'
// import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './Elems';
import Footer from '../Footer';
import SideNav from '../SideNav';
import { fetchProducts } from '../redux/product/ProductAction';

function Product() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)
    const products = useSelector((state)=>state.products.products)
    console.log(cat)
    console.log(products)



    useEffect(()=>{
        dispatch(fetchCategories())
        dispatch(fetchProducts())
    }, [])

    const prodItem = products.map((product)=> <ProductItem protection={product.category.protected_area} category={product.category.name} product={product}/>)

  return (
  <>
  <SideNav/>
    <div className='container my-3'>
        <div className='d-flex'>
        <h6>Top deals</h6>
        <NavLink className='fs-6 ms-auto me-2'>view all{` (${products.length}) items`}</NavLink>
      </div>
      <hr/>
    

              
        <div className = "row g-4 my-2 mx-auto">    
        <Carousel 
        responsive={responsive} 
        swipeable={true}
        draggable={true}
        showDots={true}
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
        itemClass="carousel-item-padding-40-px"
        className='carosel'
        >
          {prodItem}            
        </Carousel>
        </div> 
    </div>
    <Footer/>
    </>
  )
}

export default Product