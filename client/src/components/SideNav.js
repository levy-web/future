import React, {useState} from 'react'
import {toast} from 'react-hot-toast'
import {NavLink} from "react-router-dom"
import { logoutUser } from './redux/user/UserAction';
import { faShoppingCart, faSearch, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideMenu from './SideMenu';
import { useSelector, useDispatch } from "react-redux";

function SideNav() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const state = useSelector((state) => state.cart);
    const [searchValue, setSearchValue] = useState(null)
    const products = useSelector((state)=>state.products.products)

    
    const checkState = isLoggedIn ? 
    <NavLink onClick={()=>{
        dispatch(logoutUser())
        toast.success('succesfully logged out')
    }} className='ms-3 me-3' to='/login'><i className="fs-4 fas fa-sign-out-alt"></i></NavLink> : 
        <NavLink className='ms-3 me-3 text-dark' to='/login'><i className="fs-4 fas fa-user"></i></NavLink>

    const firstPath = window.location.pathname.split('/')[1];

    function handleInputChange(e){
        setSearchValue(e.target.value.toLowerCase())
    }

    const searchList = products.map((item)=>{
        if((item.name.toLowerCase()).includes(searchValue)) {
            return <li><NavLink to={`/category/${item.category.protected_area}/${item.category.name}/product/${item.id}`} className='text-decoration-none list-style-none'>{item.name}</NavLink></li>
        }
    })


    const renderMenu = (firstPath === 'register') || (firstPath === 'login') ? "d-none" : ""
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow p-0 navbar-light bg-white sticky-top ">
        <div className='container d-block'>
            <div className='d-flex align-items-center'>


                <div className="collapse navbar-collapse p-1" id="navbarNav">
                    <NavLink className="collapse navbar-collapse navbar-brand border-0" to='/'>
                        <h3>Moris</h3>
                    </NavLink>

                    <div className={`border border-primary bg-primary rounded-pill rounded p-1 d-flex ${renderMenu}`} >
                        <input onChange={handleInputChange} className='form-control justify-content-center ms-1 me-1 w-100 border-0' placeholder='search . .'></input>
                        <i className=" fs-5 m-auto fas fa-search"></i> 
                    </div>
                    
                    
                    
                        <ul className="collapse navbar-collapse navbar-nav p-1 my-2 text-center">
                            <li className={`ms-auto nav-item active `}>
                                <NavLink className='ms-3 my-2 me-3 text-danger'>
                                <i className = "fs-4 far fa-heart"></i>
                                </NavLink>
                            </li>

                            <li className={`m-auto nav-item `}>
                                <NavLink to={'/cart'} className='ms-3 my-2 me-3 cart-icon'>
                                    <i className="fs-4 fas fa-shopping-cart"></i>
                                    <span className="item-count text-dark">{state.length}</span>
                                </NavLink>
                            </li>

                            <li className={`me-auto nav-item`}>
                                {checkState}
                            </li>
                        </ul>
                    </div>

                </div>
                {searchValue ? <div className='w-100 search-list container border my-4'><ol className='text-center'>{searchList}</ol></div> : ""}
            <div>
            <div className="collapse justify-content-center navbar-collapse" id="sidebarNav">          
             <SideMenu renderOptions={renderMenu}/>
            </div>

        </div>

      </div>   
    </nav>

    </>
    
  )
}

export default SideNav