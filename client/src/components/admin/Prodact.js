import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import AdminNav from './AdminNav'
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneProduct } from '../redux/product/ProductAction';
import ProdactItem from './ProdactItem';
import Loading from './Loading';


function Prodact({popColor, popFeature}) {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchOneProduct(id))
    }, [popColor])

    const isLoading = useSelector((state)=>state.products.loading)

  return (
    <>
    <AdminNav/>
    {isLoading ? <Loading/> : <ProdactItem popColor={popColor} popFeature={popFeature}/>}
    </>
  )
}

export default Prodact