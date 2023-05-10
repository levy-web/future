import React from 'react'
import SideMenu from './SideMenu'
import Category from './admin/Category'

function Menu({sideMenu}) {
  const firstPath = window.location.pathname.split('/')[1];

  const renderMenu = firstPath === 'admin' ? <Category/> : <SideMenu/>

  return (
    <div className={sideMenu ? "side-b side-b-open my-5" : "side-b"}>
      {renderMenu}        
    </div>
  )
}

export default Menu