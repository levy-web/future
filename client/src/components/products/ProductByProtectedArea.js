import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToProtectedArea, resetProtectedArea, fetchCategories } from '../redux/categories/CategoryAction'
import { fetchProducts } from '../redux/product/ProductAction';
import ProductItem from './ProductItem'
import ReactPaginate from 'react-paginate';
import Marquee from "react-fast-marquee";
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../Footer';
import SideNav from '../SideNav';

function ProductByProtectedArea() {
    const {protectedArea, category} = useParams()
    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)
    const protectedAreaProd = useSelector((state)=>state.categories.protectedArea)
    // const [paginated, setPaginated] = useState(protectedAreaProd.slice(0, protectedAreaProd.length))
    const [pageNumber, setPageNumber] = useState(0)
    const productsPerPage = 10
    const pagesVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(protectedAreaProd.length / productsPerPage)
    console.log(category)
    

    console.log(protectedAreaProd)

    useEffect(()=>{
      dispatch(resetProtectedArea())
      dispatch(fetchProducts())
      dispatch(fetchCategories())
      cat.map((category)=>{
        if (category.protected_area === protectedArea){
            let items = category.products
            let categori = category.name
            items.map(element => {
                console.log(element)
                dispatch(addToProtectedArea(element, categori))             
            });              
        }
      })

    }, [protectedArea])

    // const similarProducts = protectedAreaProd.map((item)=>{
    //     return <ProductItem category={item.category} protection={protectedArea} product={item.product}/>
    // })
     
    const displayProducts = protectedAreaProd.slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item)=>{
      return <ProductItem category={item.category} protection={protectedArea} product={item.product}/>
  })

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <>
    <SideNav/>
    <div className='container my-5'>
    <h3>{protectedArea}</h3>
    <hr/>
    <div className='row carosel h-100'>     
        {displayProducts}
        <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={changePage}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginatonActive"}
        />
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductByProtectedArea