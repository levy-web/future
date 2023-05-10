import React from 'react'
import {NavLink} from "react-router-dom"
import { faShoppingCart, faSearch, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideMenu from '../admin/AddProd';
import Category from './Category';

function AdminNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" id='secondnav'>
        <div className='container d-block'>
            <div className='d-flex justify-content-center align-items-center'>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <h3 className="collapse navbar-collapse navbar-brand border-0" to='/farm'>
                        Moris
                    </h3>

                    <div className='p-3 m-auto d-flex w-75 justify-content-center align-items-center'>            
                        <input className='form-control w-100' placeholder='search . .'></input>
                        <FontAwesomeIcon icon={faSearch} className='text-dark ms-1' size='2x'/>                    
                    </div>
                    
                    
                    
                        <ul className="collapse navbar-collapse navbar-nav ms-auto my-2 text-center">

                            <li className="nav-item">
                                <NavLink>
                                <FontAwesomeIcon className='ms-3 me-2' color='black' icon={faUserCircle} size='2x'/>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            <div>
            <div className="collapse navbar-collapse" id="sidebarNav">
                {/* <Category/> */}
            </div>
        </div>
        <hr className="collapse navbar-collapse"/>
      </div>   
    </nav>
  )
}

export default AdminNav