import React from 'react'
import SideMenu from './SideMenu'

function Menu({sideMenu}) {
    console.log(sideMenu)
  return (
    <div className={sideMenu ? "side-b side-b-open" : "side-b"}>
        <SideMenu/>
    </div>
  )
}

export default Menu