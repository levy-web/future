import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from '../redux/categories/CategoryAction';

function AddCategory() {
  const [name, setName] = useState('')
  const [protectionArea, setProtectionArea] = useState('')
  const dispatch = useDispatch()
  const cat = useSelector((state)=>state.categories.categories)

  function nameChange(e){
    setName(e.target.value)
  }

  function protectionAreaChange(e){
    setProtectionArea(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    e.preventDefault()
    const formData = {
      name: name,
      protected_area: protectionArea
    }

    fetch('https://protexx.onrender.com/categories',{
      method: "POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
     })
     .then((r)=>r.json())
     .then((data)=>{
      console.log(data)
      dispatch(addCategory(data))
    })
}

  return (
    <div className='container my-3 py-3'>
      <div className="row my-4 h-100">
        <div className="col-md-7 col-lg-8 col-sm-8 mx-auto">
          <div className="card shadow p-5">
            <h2 className='text-center mb-5'>Add new category</h2>
              <form onSubmit={handleSubmit}>                
                  <div className="form-group mb-3"> 
                    <input type="text" required name='name' placeholder="category name" value={name} onChange={nameChange} className="form-control"></input>
                  </div>

                  <div className="form-group mb-3"> 
                    <select required value={protectionArea} onChange={protectionAreaChange} className="form-control" aria-label="Default select example" >
                      <option>select protection Area</option>
                      <option defaultValue={'Head Protection'}>Head Protection</option>
                      <option value='Head Protection'>Body Protection</option>
                      <option value='Respiratory Protection'>Respiratory Protection</option>
                      <option value='Foot Protection'>Foot Protection</option>
                      <option value='Hand Protection'>Hand Protection</option>
                      <option value='Hearing Protection'>Hearing Protection</option>
                      <option value='Eye and face Protection'>Eye and face Protection</option>                      
                      
                    </select>
                  </div>
                  <button className='mt-2 form-control bg-primary text-white' type='submit'>add Product</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory