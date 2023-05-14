import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function CarouselLoading() {
  return (
    <div className="my-4 py-4">
      <div className="d-flex">
        <div className="mx-4">
          <Skeleton height={300} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={300} width={250}/>
        </div>
        <div className="mx-4">
          <Skeleton height={300} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={300} width={250} />
        </div>
      </div>
    </div>
  )
}

export default CarouselLoading