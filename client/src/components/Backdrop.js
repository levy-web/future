import React from 'react'

function Backdrop({sideMenu, closeSideMenu}) {
  return (
    <div onClick={closeSideMenu} className={sideMenu ? "backdrop backdrop-open" : "backdrop"}></div>
  )
}

export default Backdrop