import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToProtectedArea, resetProtectedArea } from '../redux/categories/CategoryAction'
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
    <div className='container'>
    <h3>{protectedArea}</h3>
    <hr/>
    <div className='row'>      
        {similarProducts}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductByProtectedArea