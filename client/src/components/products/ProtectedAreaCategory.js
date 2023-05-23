import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToSimilarProtectedArea, resetProtectedArea } from '../redux/categories/CategoryAction'
import ProductItem from './ProductItem'
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom';
import { responsive } from './Elems';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ProtectedAreaCategory({simCategory, protectedArea}) {
    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)
    const simProtectedProd = useSelector((state)=>state.categories.similarProtectedProducts)


    useEffect(()=>{
      dispatch(resetProtectedArea())
      cat.map((category)=>{
        if (category.protected_area === protectedArea){
            let items = category.products
            items.map(element => {
                dispatch(addToSimilarProtectedArea(element))             
            });
              
        }
      })

    }, [protectedArea])
    



    const similarProducts = simProtectedProd.map((item)=>{
        return <ProductItem key={item.id} category={simCategory} protection={protectedArea} product={item}/>
    }) 
  return (
    <div className='my-3'>
        <div className='d-flex header-div rounded'>
        <h6 className='mx-2 text-white'>Similar Products</h6>
        <NavLink to={`/category/${protectedArea}`} className='fs-6 ms-auto text-white text-decoration-none me-2'>view all{` (${simProtectedProd.length}) items`}</NavLink>
      </div>
      <hr/>   
      
      <div className = "row g-4 my-2 mx-auto">    
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
        itemClass="carousel-item-padding-40-px"
        className='carosel'
        >
          {similarProducts}            
        </Carousel>
        </div> 
    </div>
  )
}

export default ProtectedAreaCategory