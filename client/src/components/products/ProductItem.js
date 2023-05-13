import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductItem({product, category, protection}) {
  return (
        
        <div className = "product-item h-100 mx-auto">
            <div className = "product-img ">
                <img src = {product.image_url} alt = "" className = "img-fluid d-block mx-auto"></img>
                <div className = "row btns w-100 mx-auto text-center">
                    <button type = "button" className = "py-2">
                    <i className = "far fa-heart"></i> Add to wish list
                    </button>
                </div>
            </div>

            <div className = "product-info p-3">
                <span className = "product-type">{category}</span>
                <NavLink to = {`/category/${protection}/${category}/product/${product.id}`} className = "d-block text-dark text-decoration-none py-2 product-name">{product.name}</NavLink>
                
                {/* <span className = "product-price">$ 100.50</span> */}
                {/* <div className = "rating d-flex mt-1">
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
                </div> */}
            </div>
        </div>
    
    
  )
}

export default ProductItem