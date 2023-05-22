import React from 'react'
import {toast} from 'react-hot-toast'
import { useSelector, useDispatch } from "react-redux";
import { addWish } from '../redux/wishlist/WishListAction';
import { NavLink } from 'react-router-dom'

function ProductItem({product, category, protection}) {
    const dispatch = useDispatch()
  return (
        
        <div className = "product-item mb-3 mx-auto">
            <div className = "product-img ">
                <img src = {product.image_url} alt = "" className = "img-fluid d-block mx-auto"></img>
                <div className = "row btns w-100 mx-auto text-center">
                    <button 
                        onClick={()=>dispatch(addWish(product))}
                        type = "button" 
                        className = "py-2">
                    <i className = "fs-4 far fa-heart"></i> Add to wish list
                    </button>
                </div>
            </div>

            <div className = "product-info p-3">
                <span className = "product-type">{category}</span>
                <NavLink to = {`/category/${protection}/${category}/product/${product.id}`} className = "d-block text-primary text-decoration-none py-2 product-name">{product.name.substring(0, 20)}...</NavLink>
            </div>
            
        </div>
    
    
  )
}

export default ProductItem