import React from 'react'
import {NavLink} from "react-router-dom"
import { logoutUser } from './redux/user/UserAction';
import { faShoppingCart, faSearch, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideMenu from './SideMenu';
import { useSelector, useDispatch } from "react-redux";

function SideNav() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const checkState = isLoggedIn ? 
    <NavLink onClick={()=>dispatch(logoutUser())} className='ms-3 me-2' to='/login'><i class="fas fa-sign-out-alt"></i></NavLink> : 
        <NavLink to='/login'><FontAwesomeIcon className='ms-3 me-2' color='black' icon={faUserCircle} size='2x'/></NavLink>

    const firstPath = window.location.pathname.split('/')[1];

    const renderMenu = (firstPath === 'register') || (firstPath === 'login') ? "d-none" : ""
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" id='secondnav'>
        <div className='container d-block'>
            <div className='d-flex justify-content-center align-items-center'>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavLink className="collapse navbar-collapse navbar-brand border-0" to='/'>
                        Moris
                    </NavLink>

                    <div className={`p-3 m-auto d-flex w-75 justify-content-center align-items-center ${renderMenu}`}>            
                        <input className='form-control w-100' placeholder='search . .'></input>
                        <FontAwesomeIcon icon={faSearch} className='text-dark ms-1' size='2x'/>                    
                    </div>
                    
                    
                    
                        <ul className="collapse navbar-collapse navbar-nav ms-auto my-2 text-center">
                            <li className={`${renderMenu} nav-item active `}>
                                <NavLink className='ms-3 me-2 text-danger'>
                                <i className = "far fa-heart"></i>
                                </NavLink>
                            </li>

                            <li className={`${renderMenu} nav-item `}>
                                <NavLink className='ms-3 me-2 text-danger  cart-icon'>
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="item-count">(3)</span>
                                </NavLink>
                                {/* <NavLink className='ms-3 me-2 text-danger'>
                                <i class="fas fa-shopping-cart"></i>
                                </NavLink> */}
                            </li>

                            <li className={`${renderMenu} nav-item`}>
                                {checkState}
                            </li>
                        </ul>
                    </div>
                </div>
            <div>
            <div className="collapse navbar-collapse" id="sidebarNav">            
                <SideMenu renderOptions={renderMenu}/>
            </div>
        </div>
        <hr className="collapse navbar-collapse"/>
      </div>   
    </nav>
    
  )
}

export default SideNav