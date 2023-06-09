import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import {logoutUser} from '../redux/user/UserAction'
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from '../redux/categories/CategoryAction';

function AddCategory() {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [protectionArea, setProtectionArea] = useState('')
  const dispatch = useDispatch()
  const cat = useSelector((state)=>state.categories.categories)
  const token = useSelector((state)=>state.user.token)


  function nameChange(e){
    setName(e.target.value)
  }

  function protectionAreaChange(e){
    setProtectionArea(e.target.value)
  }

  function handleSubmit(e){
    setIsLoading(true)
    e.preventDefault()
    e.preventDefault()
    const formData = {
      name: name,
      protected_area: protectionArea
    }

    fetch('https://protexx.onrender.com/categories',{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
    },
      body:JSON.stringify(formData)
     })
     .then((response)=>{
      if(response.ok){
        return response.json()
        
      }else if (response.status === 422) {
      return response.json().then(error => {
            throw new Error(error.message);
          });
      }else if (response.status === 401) {
        dispatch(logoutUser())
        return response.json().then(error => {
              throw new Error(error.error);
         })
      }else {
        throw new Error('Network response was not ok.');
      }    
    })
     .then((data)=>{
      setIsLoading(false)
      setProtectionArea('')
      setName('')
      toast.success(`${data.name} added succesfully`)
      dispatch(addCategory(data))
    })
    .catch(error => {
      // Handle network error or response error.
      console.error('There was an error:', error);
      setIsLoading(false)
      toast.error(error.message)
    });
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
                      <option value='Body Protection'>Body Protection</option>
                      <option value='Respiratory Protection'>Respiratory Protection</option>
                      <option value='Foot Protection'>Foot Protection</option>
                      <option value='Hand Protection'>Hand Protection</option>
                      <option value='Hearing Protection'>Hearing Protection</option>
                      <option value='Eye and face Protection'>Eye and face Protection</option>                      
                      
                    </select>
                  </div>
                  <button 
                    disabled={isLoading}
                    className='mt-2 form-control bg-primary text-white' 
                    type='submit'>
                      {isLoading ? "Loading..." : "add category"}  
                      
                  </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory