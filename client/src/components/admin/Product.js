import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import AdminNav from './AdminNav'


function Prodact({popColor}) {
    const [product, setProduct] = useState([])
    const [productColors, setProductColors] = useState([])
    const [category, setCategory] = useState('')
    const { id } = useParams()
    console.log(category)

    useEffect(()=>{
        fetch(`https://protexx.onrender.com/products/${id}`)
        .then((r)=>r.json())
        .then((data)=>{
            setProduct(data)
            setProductColors(data.product_colors)
            setCategory(data.category)
        })
    }, [])

    const productColor = productColors.map((color)=>{
        return <img src = {color.image_url} alt = "" className = "col-sm-6 d-block h-25 w-25 m-1"></img>
    })

    console.log(product)
  return (
    <>
    <AdminNav/>
    <div className='container'>
        <div className='d-flex'>          
        
        <button className='m-1 border-0 bg-white'><NavLink  className='text-decoration-none text-dark'>{` ${category.protected_area}`}</NavLink></button>
        <button className='m-1 border-0 bg-white'><NavLink to={`/category/${category}`} className='text-decoration-none'>{`${category.name}`}</NavLink></button>
        <button className='m-1 border-0 bg-white'><NavLink className='text-decoration-none'>{`${product.name}`}</NavLink></button>
        </div>
        <hr/>

        <div className = "row g-0 my-2 mx-auto">
            
                <div className = "product-img col-sm-12 col-lg-6">
                <img src = {product.image_url} alt = "" className = "img-fluid d-block mx-auto"></img>
                <span className = "heart-icon">
                    <i className = "far fa-heart"></i>
                </span>
                <div className = "product-type row">
                    {productColor}
                </div>
            </div>

            <div className = "col-sm-12 col-lg-6 p-3">
                <p className = "product-type">{`${category.name}`}</p>
                <p className = "d-block text-dark py-2 product-name">{product.name}</p>
                <span className = "product-price">$ 100.50</span>
                <div className = "product-type">{`origin: ${product.origin}`}</div>
                <div className = "product-type">{`dimensions: ${product.dimensions}`}</div>
                <div className = "product-type">{`weight: ${product.weight}`}</div>
                <div className = "product-type">{`standards: ${product.standards}`}</div>

                <div className='row mt-2 product-type'><h6 className='text-primary col-11'>product colors</h6><button onClick={popColor} className = "col-1 border-0 bg-dark"><i className = "text-white fa fa-plus"></i></button></div>
                


                <div className='row mt-2 product-type'><h6 className='text-primary col-11'>product features</h6><button className = "col-1 border-0 bg-dark"><i className = "text-white fa fa-plus"></i></button></div>
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
    </div>
    </>
  )
}

export default Prodact