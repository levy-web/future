import React from 'react'
import {NavLink} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

function SideMenu({closeSideMenu}) {
    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)

    const headProtex = cat.map((category)=>{
        if (category.protected_area === 'Head Protection'){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })

    const bodyProtex = cat.map((category)=>{
        if (category.protected_area === 'Body Protection'){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })

    // const respiratoryProtex = cat.map((category)=>{
    //     if (category.protected_area === 'Respiratory Protection'){
    //         return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
    //     }
    // })

    const footProtex = cat.map((category)=>{
        if (category.protected_area === 'Foot Protection'){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })

    const handProtex = cat.map((category)=>{
        if (category.protected_area === 'Hand Protection'){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })

    // const HearingProtex = cat.map((category)=>{
    //     if (category.protected_area === 'Hearing Protection'){
    //         return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
    //     }
    // })
    const eyefaceProtex = cat.map((category)=>{
        if ((category.protected_area === 'Eye and face Protection') || (category.protected_area === 'Hearing Protection') || (category.protected_area === 'Respiratory Protection')){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link fs-6 product-name" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })
    
  return (
    <ul className={`navbar-nav p-1 me-auto row w-100 h-100`}>
        
        <li className="nav-item active col-lg-2 dropdown" >
            <NavLink className="nav-link product-name fs-4 dropdown-toggle text-dark" data-toggle="dropdown">
            Head
            </NavLink>
            <ul className="dropdown-menu">
                {headProtex}
            </ul>
        </li>
        
        <li className="nav-item col-lg-2 dropdown">
            <NavLink className="nav-link fs-4 product-name text-dark dropdown-toggle" data-toggle="dropdown">
            Body
            </NavLink>

            <ul className="dropdown-menu">
                {bodyProtex}
            </ul>
        </li>
        {/* <li className="nav-item col-lg-1 dropdown">
            <NavLink className="nav-link product-name fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Respiratory
            </NavLink>
            <ul className="dropdown-menu">
                {respiratoryProtex}
            </ul>
        </li> */}
        <li className="nav-item col-lg-2 dropdown">
            <NavLink className="nav-link fs-4  product-name text-dark dropdown-toggle" data-toggle="dropdown">
            Foot
            </NavLink>

            <ul className="dropdown-menu">
                {footProtex}
            </ul>
        </li>
        <li className="nav-item col-lg-2 dropdown">
            <NavLink className="nav-link fs-4 text-dark product-name dropdown-toggle" data-toggle="dropdown">
            Hand
            </NavLink>

            <ul className="dropdown-menu">
                {handProtex}
            </ul>
        </li>
        {/* <li className="nav-item col-lg-1 dropdown">
            <NavLink className="nav-link product-name fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Hearing
            </NavLink>
            <ul className="dropdown-menu">
                {HearingProtex}
            </ul>
        </li> */}
        <li className="nav-item col-lg-2 dropdown">
            <NavLink className="nav-link product-name fs-4 text-dark dropdown-toggle" data-toggle="dropdown">
            Face & eye
            </NavLink>
            <ul className="dropdown-menu">
                {eyefaceProtex}
            </ul>
        </li>
        <li className="nav-item col-lg-2 dropdown">
            <NavLink className="nav-link product-name fs-4 text-dark dropdown-toggle" data-toggle="dropdown">
            Fire
            </NavLink>
            <ul className="dropdown-menu">
                {eyefaceProtex}
            </ul>
        </li>
        </ul>
    
  )
}

export default SideMenu