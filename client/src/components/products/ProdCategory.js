import React, { useEffect, useState } from 'react'
import {NavLink, useParams} from 'react-router-dom'
import { fetchCategories } from '../redux/categories/CategoryAction'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNumber } from '../redux/pagination/Action'
import Footer from '../Footer'
import SideNav from '../SideNav'
import ProdLoad from './ProdLoad'
import ProductItem from './ProductItem'
import ProtectedAreaCategory from './ProtectedAreaCategory'
import CarouselLoading from './CarouselLoading'
import ReactPaginate from 'react-paginate'

function ProdCategory() {
    const [products, setProducts] = useState([])
    const {category, protectedArea} = useParams()
    const [loading, setLoading] = useState(false)
    const simProdLoading = useSelector((state)=>state.categories.loading)
    console.log(simProdLoading)
    const pageNumber = useSelector((state)=>state.pagination.pageNumber)
    const productsPerPage = useSelector((state)=>state.pagination.productsPerPage)
    const pagesVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(products.length / productsPerPage)

    const dispatch = useDispatch()


    useEffect(()=>{
      setLoading(true)
      dispatch(fetchCategories())          
        fetch(`https://protexx.onrender.com/categories/${category}`)
        .then((response)=>{
          if(response.ok){
            return response.json()            
          }else if (response.status === 422) {
            console.log(response)
              return response.json().then(error => {
                throw new Error(error.message);
              });
          }else {
            throw new Error('Network response was not ok.');
          }
        })
        .then((data)=>{
          setProducts(data.products)
          setLoading(false)
        })
        .catch(error => {
          // Handle network error or response error.
          console.error('There was an error:', error);
        }); 

    }, [category])

    const categoryItems = products.slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product)=><ProductItem protection={protectedArea} category={category} product={product}/>)

    const showCategoriesProd = loading ? <ProdLoad/> : categoryItems

    const showSimProtectedArea = loading ? <CarouselLoading/> : <ProtectedAreaCategory simCategory={category} protectedArea={protectedArea}/>

    const changePage = ({selected}) => {
      dispatch(setPageNumber(selected))
    }



  return (
    <>
    <SideNav/>
    <div className='container'>
        <div className='d-flex'>          
        
        <button className='m-1 bg-white border-0'><NavLink to={`/category/${protectedArea}`} className='text-decoration-none'>{` ${protectedArea}`}</NavLink></button>
        <button className='m-1 bg-white border-0'><NavLink className='text-decoration-none text-dark'>{`${category}`}</NavLink></button>
        <p className='ms-auto'>{` (${products.length}) items`}</p>
        </div>
        <hr/>
        <div className='row g-4 my-2 mx-auto carosel'>
          {showCategoriesProd}
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

      {showSimProtectedArea}    
      </div>
    <Footer/>
    </>
  )
}

export default ProdCategory