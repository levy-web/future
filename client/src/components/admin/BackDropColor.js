import React from 'react'

function BackDropColor({popColor, popupColor}) {
  
    return (
        <div onClick={popColor} className={ popupColor ? "backdrop backdrop-open" : "backdrop"}>

        </div>
    )
  
}

export default BackDropColor