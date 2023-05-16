import React from 'react'
import {toast} from 'react-hot-toast'
import { useSelector, useDispatch } from "react-redux";
import { addCart } from '../redux/cart/CartAction'
import { NavLink } from 'react-router-dom'

function ProductItem({product, category, protection}) {
    const dispatch = useDispatch()
  return (
        
        <div className = "product-item mb-3 mx-auto">
            <div className = "product-img ">
                <img src = {product.image_url} alt = "" className = "img-fluid d-block mx-auto"></img>
                <div className = "row btns w-100 mx-auto text-center">
                    <button onClick={
                        ()=>{dispatch(addCart(product))
                        toast.success(`1 ${product.name} added to the cart.`);
                        }} type = "button" className = "py-2">
                    <i className = "fas fa-shopping-cart"></i> Add to cart
                    </button>
                </div>
            </div>

            <div className = "product-info p-3">
                <span className = "product-type">{category}</span>
                <NavLink to = {`/category/${protection}/${category}/product/${product.id}`} className = "d-block text-primary text-decoration-none py-2 product-name">{product.name}</NavLink>
            </div>
            
        </div>
    
    
  )
}

export default ProductItem