import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProdLoad from './ProdLoad';
import ProductItem from './ProductItem';
import { setPageNumber } from '../redux/pagination/Action';


function AllProducts() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.products.products)
    const loading = useSelector((state)=>state.products.loading)
    // const [pageNumber, setPageNumber] = useState(0)
    const pageNumber = useSelector((state)=>state.pagination.pageNumber)
    const productsPerPage = useSelector((state)=>state.pagination.productsPerPage)
    const pagesVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(products.length / productsPerPage)

    const prodItem = products.slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product)=> <ProductItem protection={product.category.protected_area} category={product.category.name} product={product}/>)

    const showProducts = loading ? 
      <ProdLoad/> : prodItem
      
      const changePage = ({selected}) => {
        dispatch(setPageNumber(selected))
      }


  return (
    <div className='row carosel my-5 h-100'>
        <div className='d-flex'>
        <h6>All products</h6>
        <NavLink className='fs-6 ms-auto me-2'>view all{` (${products.length}) items`}</NavLink>
        </div>
        <hr/>
        {showProducts}
        <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={changePage}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginatonActive"}
        />
    </div>
  )
}

export default AllProducts