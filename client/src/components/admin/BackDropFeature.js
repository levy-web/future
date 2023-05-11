import React from 'react'

function BackDropFeature({popFeature, popupFeature}) {
  return (
    <div onClick={popFeature } className={ popupFeature ? "backdrop backdrop-open" : "backdrop"}></div>
    )
}

export default BackDropFeature