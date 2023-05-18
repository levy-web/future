import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import { logoutUser } from '../redux/user/UserAction'
import {useSelector, useDispatch} from 'react-redux'

function AddColor() {
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const token = useSelector((state)=>state.user.token)
    console.log(token)


  
    function nameChange(e){
      setName(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      setIsLoading(true)
      const formData = {
        name: name
      }

      fetch('https://protexx.onrender.com/colors',{
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
        setName('')
        setIsLoading(false)
        toast.success(`${data.name} added succesfully`)
      })
      .catch(error => {
        setIsLoading(false)
        // Handle network error or response error.
        console.error('There was an error:', error);
        toast.error(error.message)
      });
  }  
  return (
    <div className='container my-3 py-3'>
      <div className="row my-4 h-100">
        <div className="col-md-7 col-lg-8 col-sm-8 mx-auto">
          <div className="card shadow p-5">
            <h2 className='text-center mb-5'>Add new color</h2>
              <form onSubmit={handleSubmit}>             
                  <div className="form-group mb-3"> 
                    <input type="text" required name='name' placeholder="color name" value={name} onChange={nameChange} className="form-control"></input>
                  </div>
                  <button
                    disabled={isLoading}
                    className='mt-2 form-control bg-primary text-white' 
                    type='submit'>
                      {isLoading ? "Loading..." : "add color"}  
                  </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddColor