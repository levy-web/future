import React from 'react'
import SideMenu from './SideMenu'
import Category from './admin/Category'

function Menu({sideMenu, closeSideMenu}) {
  const firstPath = window.location.pathname.split('/')[1];

  const renderMenu = firstPath === 'admin' ? <Category/> : <SideMenu closeSideMenu={closeSideMenu}/>

  return (
    <div className={sideMenu ? "side-b side-b-open menu-heights rounded-bottom" : "side-b"}>
      {renderMenu}        
    </div>
  )
}

export default Menu