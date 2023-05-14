import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function ProductLoading() {
  return (
    <>
      <div className="col-md-6 py-3">
        <Skeleton height={300} width={300} />
      </div>
      <div className="col-md-6 py-5">
        <Skeleton height={30} width={250} />
        <Skeleton height={90} />
        <Skeleton height={40} width={70} />
        <Skeleton height={50} width={110} />
        <Skeleton height={120} />
        <Skeleton height={40} width={110} inline={true} />
        <Skeleton className="mx-3" height={40} width={110} />
      </div>
    </>


  )
}

export default ProductLoading