import React, {useEffect, useState} from 'react'
import {toast} from 'react-hot-toast'
import { logoutUser } from '../redux/user/UserAction'
import { useSelector, useDispatch } from 'react-redux'

function Collaborators() {
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
    const [fetchedName, setFetchedName] = useState(null)
    const dispatch = useDispatch()
    const token = useSelector((state)=>state.user.token)
    console.log(token)

    function removeAdmin(id){
      fetch(`https://protexx.onrender.com/admins/${id}`,{
        method: "DELETE",
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`
      }
       })
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
        console.log(data)
        toast.success("deleted successfully")

      })
      .catch(error => {
        // Handle network error or response error.
        console.error('There was an error:', error);
        toast.error(error.message)
      });

    }


    function addAsAdmin(id){
      const formData = {
        user_id: id
      }

      fetch("https://protexx.onrender.com/admins",{
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
        console.log(response)
          return response.json().then(error => {
            throw new Error(error.message);
          });
      }else {
        throw new Error('Network response was not ok.');
      }    
    })
    .then((data)=>{
      console.log(data)
    })
    .catch(error => {
      // Handle network error or response error.
      console.error('There was an error:', error);
      toast.error(error.message)
    });
    }

    useEffect(()=>{
        fetch('https://protexx.onrender.com/admins',{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        }
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
            setUsers(data)
            console.log(data)
          })
          .catch(error => {
            // Handle network error or response error.
            console.error('There was an error:', error);
            toast.error(error.message)
          });
        
    },[])

    const admins = users.map((user)=> <div className='row mx-2'><li className='col-10'>{user.user.email}</li><button onClick={()=>removeAdmin(user.id)} className='col-2 border-0 text-danger bg-white'>remove</button></div>)


  
    function emailChange(e){
      setEmail(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const formData = {
        email: email
      }

      fetch(`https://protexx.onrender.com/usersAdmin`,{
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
        setFetchedName(data)
      })
      .catch(error => {
        // Handle network error or response error.
        console.error('There was an error:', error);
        toast.error(error.message)
      });
    }
  return (
    <div className='container my-1 py-1'>
    <div className="row my-1 h-100">
      <div className="col-md-7 col-lg-8 col-sm-8 mx-auto">
        <div className="card shadow p-2">
          <h2 className='text-center mb-2'>Add Contributor</h2>
            <form onSubmit={handleSubmit}>             
                <div className="form-group mb-3"> 
                  <input type="email" required name='email' placeholder="Enter email" value={email} onChange={emailChange} className="form-control"></input>
                </div>
                <button className='mt-2 form-control bg-primary text-white' type='submit'>search</button>
            </form>
            <div className='py-1 px-1 my-4'>
            {fetchedName ? <div className="row"><li className="col-10">{fetchedName.email} </li><button onClick={()=>addAsAdmin(fetchedName.id)} className='col-2 border-0 text-danger bg-white'>add</button></div> : ""}
            </div>
        </div>

        <hr/>
        <h6 className='text-center'>Contributors</h6>
        <ol>
        {admins}
        </ol>
      </div>
    </div>
  </div>
  )
}

export default Collaborators