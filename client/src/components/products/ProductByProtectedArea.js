import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToProtectedArea, resetProtectedArea, fetchCategories } from '../redux/categories/CategoryAction'
import { fetchProducts } from '../redux/product/ProductAction';
import ProductItem from './ProductItem'
import Marquee from "react-fast-marquee";
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../Footer';
import SideNav from '../SideNav';

function ProductByProtectedArea() {
    const {protectedArea, category} = useParams()
    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)
    const protectedAreaProd = useSelector((state)=>state.categories.protectedArea)
    console.log(category)

    console.log(protectedAreaProd)

    useEffect(()=>{
      dispatch(resetProtectedArea())
      dispatch(fetchProducts())
      dispatch(fetchCategories())
      cat.map((category)=>{
        if (category.protected_area === protectedArea){
            let items = category.products
            let categori = category.name
            items.map(element => {
                console.log(element)
                dispatch(addToProtectedArea(element, categori))             
            });              
        }
      })

    }, [protectedArea])

    const similarProducts = protectedAreaProd.map((item)=>{
        return <ProductItem category={item.category} protection={protectedArea} product={item.product}/>
    }) 

  return (
    <>
    <SideNav/>
    <div className='container my-5'>
    <h3>{protectedArea}</h3>
    <hr/>
    <div className='row carosel h-100'>      
        {similarProducts}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductByProtectedArea