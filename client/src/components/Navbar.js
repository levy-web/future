import React from 'react'
import {NavLink} from "react-router-dom"
import img from '../y.png'
import { faSearch, faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar({openSideMenu}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary py-1 sticky-top">
      
      <div className='container'>
      <button
          className="navbar-toggler border-0"
          type="button"
          onClick={openSideMenu}
      >
      <span className="border-0 text-light"><FontAwesomeIcon icon={faBars} /></span>
      </button>

      <NavLink className="navbar-toggler me-auto text-decoration-none border-0" to='/'>
      <img className='img-fluid me-auto' src={img}></img>
      </NavLink>

      <div className="navbar-toggler border-0 p-3">

        <NavLink
            className="navbar-toggler p-2 border-0"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            icon={faSearch} color="white"
        >
        <i className="navbar-toggler text-light border-0 fas fa-search"></i>

        </NavLink>

      </div>

      <div className='collapse navbar-collapse p-2 text-white'>
        <FontAwesomeIcon  icon={faPhone} color='white' /> <span className='ms-3'> Call To Order +254 716 085 629 </span>
        <span className='ms-auto'><FontAwesomeIcon icon={faEnvelope} color='white' /></span> <span className='ms-3'>info@sams-solutions.com</span>
      </div>

      </div>
    </nav>
  )
}

export default Navbar;