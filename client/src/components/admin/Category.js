import React, { useEffect } from 'react'
import {NavLink} from "react-router-dom"
import { fetchCategories } from '../redux/categories/CategoryAction';
import { useSelector, useDispatch } from 'react-redux';

function Category() {
    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)

    useEffect(()=>{
        dispatch(fetchCategories())
    }, [])

    const categories = cat.map((category)=> <li className="col-lg-3 col-sm-12"><NavLink className="nav-link fs-6 text-dark"> {category.name} </NavLink> </li>)

  return (
    <ul className="navbar-nav p-1 justify-content-center row me-auto w-100 h-100">       
        {categories}
    </ul>
    
  )
}

export default Category