import React from 'react'
import {NavLink} from "react-router-dom"
import { faShoppingCart, faSearch, faUserCircle, faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
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

      <NavLink className="navbar-toggler text-decoration-none border-0" to='/'>
            Moris
      </NavLink>

      <div className="navbar-toggler border-0">

        <FontAwesomeIcon
        className="navbar-toggler p-2 border-0"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        icon={faSearch} color="white"
        />
        
        <NavLink to='/login'>
          <FontAwesomeIcon className='p-2' color='black' icon={faUserCircle} />
        </NavLink>

        <NavLink>
          <FontAwesomeIcon className='p-2' icon={faShoppingCart} color='black' />          
        </NavLink>
      </div>

      <div className='collapse navbar-collapse p-2 text-white'>
        <FontAwesomeIcon  icon={faPhone} color='white' /> <span className='ms-1'>Call To Order +254 110001331 / +254 786432328</span>
        <span className='ms-3'><FontAwesomeIcon icon={faEnvelope} color='white' /></span> <span className='ms-1'>sales@electromart.co.ke</span>

      <FontAwesomeIcon className='ms-auto' icon={faUserCircle} color='white' /> <span className='ms-3'>My Account</span>
      </div>

      </div>
    </nav>
  )
}

export default Navbar;