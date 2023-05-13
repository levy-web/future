import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../Footer'
import SideNav from '../SideNav'
import SimilarProd from './SimilarProd'
import { fetchOneProduct } from '../redux/product/ProductAction';

function Prod() {
    
    
    const {category, protectedArea, id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state)=>state.products.product)
    const productColors = useSelector((state)=>state.products.prodColors)
    const features = useSelector((state)=>state.products.features)
    const [displayColor, setDisplayColor] = useState(product.image_url)


    useEffect(()=>{
        dispatch(fetchOneProduct(id))
    }, [id])

    const productColor = productColors.map((color)=>{
        return <div className='prod-image col-3 me-auto my-2'><img onClick={()=>setDisplayColor(color.image_url)} src = {color.image_url} alt = "" className = "h-100 w-100"></img></div>
    })

    const productFeatures = features.map((feature)=>{
        return <div key={feature.id} className='ms-3'><li className = "product-type">{feature.faeture_name}</li></div>
    })
    

  return (
    <>
    <SideNav/>
    <div className='container'>
        <div className='d-flex'>
        
        <button className='m-1 border-0 bg-white'><NavLink to={`/category/${protectedArea}`}  className='text-decoration-none'>{` ${protectedArea}`}</NavLink></button>
        <button className='m-1 border-0 bg-white'><NavLink to={`/category/${protectedArea}/${category}`} className='text-decoration-none'>{`${category}`}</NavLink></button>
        <button className='m-1 border-0 bg-white'><NavLink className='text-decoration-none text-dark'>{`${product.name}`}</NavLink></button>
        </div>
        <hr/>

        <div className = "row g-0 my-2 mx-auto">
            
            <div className = "product-img col-sm-12 col-lg-6">
                <img src = {product.image_url} alt = "" className = "img-fluid d-block mx-auto"></img>
                <NavLink className = "heart-icon text-decoration-none text-danger border-0">
                    <i className = "far fa-heart"></i>
                </NavLink>

                <h6 className='d-block text-dark py-2 product-name'>colors</h6>
                <div className = "product-type px-3 row">
                    {productColor}
                </div>
            </div>

            <div className = "col-sm-12 col-lg-6 p-3">
                <p className = "product-type">{category}</p>
                <p className = "d-block text-dark py-2 product-name">{product.name}</p>
                <span className = "product-price">$ 100.50</span>
                <div className = "product-type">{`origin: ${product.origin}`}</div>
                <div className = "product-type">{`dimensions: ${product.dimensions}`}</div>
                <div className = "product-type">{`weight: ${product.weight}`}</div>
                <div className = "product-type">{`standards: ${product.standards}`}</div>
                
                <h6 className='d-block text-dark py-2 product-name'>Features</h6>
                <ul>
                    {productFeatures}
                </ul>

            </div>
        </div>

        <SimilarProd id={id} simCategory={category} protectedArea={protectedArea}/>
        
    </div>
    <Footer/>
    </>
  )
}

export default Prod