import React from 'react'
import {NavLink} from "react-router-dom"
import { faShoppingCart, faSearch, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideMenu from '../admin/AddProd';
import Category from './Category';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../redux/user/UserAction';

function AdminNav() {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const checkState = isLoggedIn ? 
    <NavLink onClick={()=>dispatch(logoutUser())} className='ms-3 me-2' to='/login'><i class="fs-4 fas fa-sign-out-alt"></i></NavLink> : 
    <NavLink className='ms-3 me-2' to='/login'><i class="fs-4 fas fa-user"></i></NavLink>
  return (
    <nav className="navbar navbar-expand-lg shadow navbar-light bg-white sticky-top" id='secondnav'>
        <div className='container d-block'>
            <div className='d-flex justify-content-center align-items-center'>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <h3 className="collapse navbar-collapse navbar-brand border-0" to='/'>
                        Moris
                    </h3>

                    <div className='p-3 m-auto d-flex justify-content-center align-items-center'>
                        <i class="fs-5 fas fa-search"></i>            
                        <input className='form-control w-100 border-0' placeholder='search . .'></input>
                        
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button  className='mx-2 border-0 bg-white'><NavLink className='text-decoration-none text-dark' to={'/admin'}>Product</NavLink></button>
                        <button  className='mx-2 border-0 bg-white'><NavLink className='text-decoration-none text-dark' to={'/admin/category'}>category</NavLink></button>
                        <button  className='mx-2 border-0 bg-white'><NavLink className='text-decoration-none text-dark' to={'/admin/product colors'}> product colors </NavLink></button>
                        <button  className='mx-2 border-0 bg-white'><NavLink className='text-decoration-none text-dark' to={'/admin/collaborators'}> admins </NavLink></button> 
                    </div>
                    
                    
                    
                    <ul className="collapse navbar-collapse navbar-nav my-2 text-center">
                        <li className="nav-item ms-auto">
                            {checkState}
                        </li>
                    </ul>
                    </div>
                </div>
            <div>
            <div className="collapse navbar-collapse" id="sidebarNav">
                {/* <Category/> */}
            </div>
        </div>
      </div>   
    </nav>
  )
}

export default AdminNav