import React, { useEffect, useState } from 'react'
import {NavLink, useParams} from 'react-router-dom'
import Footer from '../Footer'
import SideNav from '../SideNav'
import ProductItem from './ProductItem'
import ProtectedAreaCategory from './ProtectedAreaCategory'

function ProdCategory() {
    const [products, setProducts] = useState([])
    const {category, protectedArea} = useParams()

    console.log(category)
    console.log(protectedArea)
    console.log(products)

    useEffect(()=>{

        fetch(`/categories/${category}`)
        .then((r)=>r.json())
        .then((data)=>setProducts(data.products))
    }, [category])

    const categoryItems = products.map((product)=><ProductItem protection={protectedArea} category={category} product={product}/>)


  return (
    <>
    <SideNav/>
    <div className='container'>
        <div className='d-flex'>          
        
        <button className='m-1 bg-white border-0'><NavLink to={`/category/${protectedArea}`} className='text-decoration-none'>{` ${protectedArea}`}</NavLink></button>
        <button className='m-1 bg-white border-0'><NavLink className='text-decoration-none text-dark'>{`${category}`}</NavLink></button>
        <p className='ms-auto'>{` (${products.length}) items`}</p>
        </div>
        <hr/>
        <div className='row g-4 my-2 mx-auto'>
            {categoryItems}
        </div>

        <ProtectedAreaCategory simCategory={category} protectedArea={protectedArea}/>
    </div>
    <Footer/>
    </>
  )
}

export default ProdCategory