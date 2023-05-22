import React from 'react'
import Marquee from "react-fast-marquee";
import brand1 from './brand-3m.jpg'
import brand2 from './brand-BSD.png'
import brand3 from './brand-BSD2.png'
import brand4 from './brands-ameriza2.jpg'
import brand5 from './brands-msa.jpg'


function Brand() {
    const brands = [brand1, brand2, brand3, brand4, brand5]

    const displayBrands = brands.map(
        (item, index)=><img key={index} className="mx-5" src={item} alt="First slide"></img>)
  return (
    <div className='container'>
    <div className='row my-1 mx-1'>
        <Marquee
              style={{ overflow: "hidden"}}
            //   pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
            {displayBrands}
        </Marquee>
        
    </div>
    </div>
  )
}

export default Brand