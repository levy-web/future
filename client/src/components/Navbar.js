import React from 'react'
import {NavLink} from "react-router-dom"
import img from '../y.png'
import { logoutUser } from './redux/user/UserAction';
import { faShoppingCart, faSearch, faUserCircle, faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from "react-redux";



function Navbar({openSideMenu}) {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
  const admin = useSelector((state)=>state.user.isAdmin)
  const user = useSelector((state)=>state.user.buyer)
  const state = useSelector((state) => state.cart);

  console.log(admin)

  const isAdmin = admin ? "" : "d-none"

  const profile = user ? <span className='ms-3'>{user.data.user.name}</span>:<span className='ms-3'>My Account</span>

  const checkState = isLoggedIn ? 
  <NavLink onClick={()=>dispatch(logoutUser())} className='p-2 text-white' to='/login'><i className="fas fa-sign-out-alt"></i></NavLink> : 
      <NavLink className='p-2 text-white' to='/login'><i className="fas fa-user"></i></NavLink>



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



        <NavLink to={'/cart'} className='cart-icon p-2'>
          <i className="fas fa-shopping-cart text-light"></i>
          <span className="item-count text-light">{state.length}</span>
        </NavLink>        
        {checkState}
      </div>

      <div className='collapse navbar-collapse p-2 text-white'>
        <FontAwesomeIcon  icon={faPhone} color='white' /> <span className='ms-1'>Call To Order +971 56 409 8879 / +971 55 881 3452 </span>
        <span className='ms-3'><FontAwesomeIcon icon={faEnvelope} color='white' /></span> <span className='ms-1'>info@sams-solutions.com</span>

      <FontAwesomeIcon className='ms-auto' icon={faUserCircle} color='white' /> 
      {profile}
      <NavLink to='/admin' className={`text-white text-decoration-none ms-auto ${isAdmin}`}><i className="fas fa-user-cog"></i> <span>dashboard</span></NavLink>      
      </div>

      </div>
    </nav>
  )
}

export default Navbar;