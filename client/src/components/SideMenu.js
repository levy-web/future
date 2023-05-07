import React from 'react'
import {NavLink} from "react-router-dom"

function SideMenu() {
  return (
    <ul className="navbar-nav p-1 me-auto w-100 h-100">
        
        <li className="nav-item active w-100 dropdown" >
            <NavLink className="nav-link fs-6 dropdown-toggle text-dark" data-toggle="dropdown">
            Head protection
            </NavLink>
            <ul className="dropdown-menu text-center w-100">
                <li><NavLink to="#">Item 1</NavLink></li>
                <li><NavLink to="#">Item 2</NavLink></li>
                <li><NavLink to="#">Item 3</NavLink></li>
            </ul>
        </li>
        
        <li className="nav-item w-100 dropdown">
            <NavLink className="nav-link fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Body protection
            </NavLink>
            <ul className="dropdown-menu text-center w-100">
                <li><NavLink to="#">Item 4</NavLink></li>
                <li><NavLink to="#">Item 5</NavLink></li>
                <li><NavLink to="#">Item 6</NavLink></li>
            </ul>
        </li>
        <li className="nav-item w-100 dropdown">
            <NavLink className="nav-link fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Respiratory protection
            </NavLink>
            <ul className="dropdown-menu text-center w-100">
                <li><NavLink to="#">Item 7</NavLink></li>
                <li><NavLink to="#">Item 8</NavLink></li>
                <li><NavLink to="#">Item 9</NavLink></li>
            </ul>
        </li>
        <li className="nav-item w-100 dropdown">
            <NavLink className="nav-link fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Foot protection
            </NavLink>
            <ul className="dropdown-menu text-center w-100">
                <li><NavLink to="#">Item 10</NavLink></li>
                <li><NavLink to="#">Item 11</NavLink></li>
                <li><NavLink to="#">Item 12</NavLink></li>
            </ul>
        </li>
        <li className="nav-item w-100 dropdown">
            <NavLink className="nav-link fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Hand protection
            </NavLink>
            <ul className="dropdown-menu text-center w-100">
                <li><NavLink to="#">Item 13</NavLink></li>
                <li><NavLink to="#">Item 14</NavLink></li>
                <li><NavLink to="#">Item 15</NavLink></li>
            </ul>
        </li>
        <li className="nav-item w-100 dropdown">
            <NavLink className="nav-link fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Ear protection
            </NavLink>
            <ul className="dropdown-menu text-center w-100">
                <li><NavLink to="#">Item 16</NavLink></li>
                <li><NavLink to="#">Item 17</NavLink></li>
                <li><NavLink to="#">Item 18</NavLink></li>
            </ul>
        </li>
        <li className="nav-item w-100 dropdown">
            <NavLink className="nav-link fs-6 text-dark dropdown-toggle" data-toggle="dropdown">
            Face & eye protection
            </NavLink>
            <ul className="dropdown-menu text-center w-100">
                <li><NavLink to="#">Item 16</NavLink></li>
                <li><NavLink to="#">Item 17</NavLink></li>
                <li><NavLink to="#">Item 18</NavLink></li>
            </ul>
        </li>
        </ul>
    
  )
}

export default SideMenu