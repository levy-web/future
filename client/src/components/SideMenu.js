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

    const respiratoryProtex = cat.map((category)=>{
        if (category.protected_area === 'Respiratory Protection'){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })

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

    const HearingProtex = cat.map((category)=>{
        if (category.protected_area === 'Hearing Protection'){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link product-name fs-6" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })
    const eyefaceProtex = cat.map((category)=>{
        if (category.protected_area === 'Eye and face Protection'){
            return <li key={category.id}><NavLink onClick={closeSideMenu} className="nav-link fs-6 product-name" to={`/category/${category.protected_area}/${category.name}`}>{category.name}</NavLink></li>
        }
    })
    
  return (
    <ul className={`navbar-nav p-1 me-auto h-100`}>
        
        <li className="nav-item active dropdown" >
            <NavLink 
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#headToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Head Protection
            </NavLink>
            <ul className="collapse navbar-collapse" id='headToggle'>
                {headProtex}
            </ul>
        </li>
        
        <li className="nav-item  dropdown">
            <NavLink
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#bodyToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Body Protection
            </NavLink>

            <ul className="collapse navbar-collapse" id='bodyToggle'>
                {bodyProtex}
            </ul>
        </li>
        <li className="nav-item dropdown">
        <NavLink
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#respiratoryToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Respiratory Protection
            </NavLink>
            <ul className="collapse navbar-collapse" id='respiratoryToggle'>
                {respiratoryProtex}
            </ul>
        </li>
        <li className="nav-item dropdown">
        <NavLink
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#footToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Foot Protection
            </NavLink>

            <ul className="collapse navbar-collapse" id='footToggle'>
                {footProtex}
            </ul>
        </li>
        <li className="nav-item dropdown">
        <NavLink
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#handToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Hand Protection
            </NavLink>

            <ul className="collapse navbar-collapse" id='handToggle'>
                {handProtex}
            </ul>
        </li>
        <li className="nav-item dropdown">
        <NavLink
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#hearingToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Hearing Protection
            </NavLink>
            <ul className="collapse navbar-collapse" id='hearingToggle'>
                {HearingProtex}
            </ul>
        </li>
        <li className="nav-item dropdown">
        <NavLink
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#faceneyeToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Face & eye Protection
            </NavLink>
            <ul className="collapse navbar-collapse" id='faceneyeToggle'>
                {eyefaceProtex}
            </ul>
        </li>
        <li className="nav-item dropdown">
        <NavLink
                className="nav-link product-name fs-4 dropdown-toggle text-dark" 
                data-toggle="collapse"
                data-target="#fireToggle"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
            Fire Protection
            </NavLink>
            <ul className="collapse navbar-collapse" id='fireToggle'>
                {eyefaceProtex}
            </ul>
        </li>
        </ul>
    
  )
}

export default SideMenu