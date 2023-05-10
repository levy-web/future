import React, {useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import AddCategory from './AddCategory'
import AddColor from './AddColor'
import AddProd from './AddProd'
import AdminNav from './AdminNav'
import Category from './Category'


function Admin() {
  const params = useParams()
  console.log(params)

  useEffect(()=>{
    renderItem()
  }, [params])
  const renderItem = ()=>{
    if (params.add === 'category'){
      return <AddCategory/>
    }else if(params.add === 'product colors'){
      return <AddColor/>
    }else {
      return <AddProd/>
    }
      
  }

  console.log(renderItem())




  return (
    <>
    <AdminNav/>
    <div className='container add-to my-3 py-3'>
        <div className='d-flex justify-content-center'>
            <button  className='mx-2 border-0'><NavLink className='text-decoration-none text-dark' to={'/admin'}>Product</NavLink></button>
            <button  className='mx-2 border-0'><NavLink className='text-decoration-none text-dark' to={'/admin/category'}>category</NavLink></button>
            <button  className='mx-2 border-0'><NavLink className='text-decoration-none text-dark' to={'/admin/product colors'}> product colors </NavLink></button>
        </div>
    <hr/>
    {renderItem()}
    </div>
    </>
  )
}

export default Admin