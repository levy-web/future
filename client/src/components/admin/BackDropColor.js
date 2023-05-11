import React from 'react'

function BackDropColor({popColor, popupColor, popFeature, popupFeature}) {
  
    return (
        <div onClick={popColor } className={ popupColor ? "backdrop backdrop-open" : "backdrop"}>

        </div>
    )
  
}

export default BackDropColor