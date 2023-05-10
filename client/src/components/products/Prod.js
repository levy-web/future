import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import Footer from '../Footer'
import SideNav from '../SideNav'
import SimilarProd from './SimilarProd'

function Prod() {
    const [product, setProduct] = useState([])
    const [productColors, setProductColors] = useState([])
    // const [category, setCategory] = useState('')
    const {category, protectedArea, id} = useParams()

    useEffect(()=>{
        fetch(`https://protexx.onrender.com/products/${id}`)
        .then((r)=>r.json())
        .then((data)=>{
            setProduct(data)
            setProductColors(data.product_colors)
            // setCategory(data.category.name)
        })
    }, [])

    const productColor = productColors.map((color)=>{
        return <img src = {color.image_url} alt = "" className = "d-block h-25 w-25 m-1"></img>
    })

    console.log(product)
    

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
                <img src = {product.image_url} alt = "" className = "img-fluid h-100 d-block mx-auto"></img>

                <div className = "row btns w-100 mx-auto text-center">
                    <button type = "button" className = "py-2">
                        <i className = "far fa-heart"></i> Add to wish list
                    </button>
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
                <h6 className='d-block text-dark py-2 product-name'>colors</h6>
                <div className = "product-type row">
                    {productColor}
                </div>
                <div className = "rating d-flex mt-1">
                    <span>
                        <i className = "fa fa-star"></i>
                    </span>
                    <span>
                        <i className = "fa fa-star"></i>
                    </span>
                    <span>
                        <i className = "fa fa-star"></i>
                    </span>
                    <span>
                        <i className = "fa fa-star"></i>
                    </span>
                    <span>
                        <i className = "fa fa-star"></i>
                    </span>
                    <span>(25 reviews)</span>
                </div>
            </div>
        </div>

        <SimilarProd simCategory={category} protectedArea={protectedArea}/>
        
    </div>
    <Footer/>
    </>
  )
}

export default Prod