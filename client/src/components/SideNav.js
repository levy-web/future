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
    <NavLink onClick={()=>dispatch(logoutUser())} className='ms-3 me-3' to='/login'><i class="fs-4 fas fa-sign-out-alt"></i></NavLink> : 
        <NavLink className='ms-3 me-3 text-dark' to='/login'><i class="fs-4 fas fa-user"></i></NavLink>

    const firstPath = window.location.pathname.split('/')[1];

    const renderMenu = (firstPath === 'register') || (firstPath === 'login') ? "d-none" : ""
  return (
    <nav className="navbar navbar-expand-lg shadow navbar-light bg-white sticky-top " id='secondnav'>
        <div className='container d-block'>
            <div className='d-flex p-2 align-items-center'>


                <div className="collapse navbar-collapse p-1" id="navbarNav">
                    <NavLink className="collapse navbar-collapse navbar-brand border-0" to='/'>
                        <h3>Moris</h3>
                    </NavLink>

                    <div className={`border border-primary bg-primary rounded-pill rounded p-1 w-50 d-flex ${renderMenu}`}>
                        <input className='form-control justify-content-center ms-1 me-1 w-100 border-0' placeholder='search . .'></input>
                        <i class=" fs-5 m-auto fas fa-search"></i> 
                    </div>
                    
                    
                    
                        <ul className="collapse navbar-collapse navbar-nav p-1 my-2 text-center">
                            <li className={`${renderMenu} ms-auto nav-item active `}>
                                <NavLink className='ms-3 my-2 me-3 text-danger'>
                                <i className = "fs-4 far fa-heart"></i>
                                </NavLink>
                            </li>

                            <li className={`${renderMenu} m-auto nav-item `}>
                                <NavLink className='ms-3 my-2 me-3 cart-icon'>
                                    <i className="fs-4 fas fa-shopping-cart"></i>
                                    <span className="item-count text-dark">3</span>
                                </NavLink>
                            </li>

                            <li className={`${renderMenu} me-auto nav-item`}>
                                {checkState}
                            </li>
                        </ul>
                    </div>
                </div>
            <div>
            <div className="collapse justify-content-center navbar-collapse" id="sidebarNav">            
                <SideMenu renderOptions={renderMenu}/>
            </div>
        </div>

      </div>   
    </nav>
    
  )
}

export default SideNav