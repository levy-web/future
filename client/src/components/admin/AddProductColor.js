import React, {useEffect, useState} from 'react'
import {toast} from 'react-hot-toast'
import { logoutUser } from '../redux/user/UserAction';
import { useDispatch, useSelector } from "react-redux";
import { addProductColor } from '../redux/product/ProductAction'; 

function AddProductColor({popupColor, popColor}) {
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [colors, setColors] = useState([])
    const [image, setImage] = useState(null)
    const token = useSelector((state)=>state.user.token)
    const item = window.location.pathname.split('/').pop();

    const dispatch = useDispatch()


    useEffect(()=>{
        fetch('https://protexx.onrender.com/colors')
        .then((r)=>r.json())
        .then((data)=>setColors(data))
    },[])

    const prodColors = colors.map((color)=><option key={color.id} value={color.id}>{color.name}</option>)
  
    function nameChange(e){
      setName(e.target.value)
    }

    function imageChange(e){
        setImage(e.target.files[0])
      }
  
    function handleSubmit(e){
        e.preventDefault()
        const data = new FormData();
    
        data.append("product_color[color_id]", name);
        data.append("product_color[product_id]", item);
        data.append("product_color[image]", image);
    
        handleSubmitToApi(data)
        
    
    
      }
    
      function handleSubmitToApi(data){
        setIsLoading(true)
    
         fetch('https://protexx.onrender.com/prod-colors',{
          method: "POST",
          headers:{
            Authorization: `Bearer ${token}`
        },
          body:data  
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
          
          dispatch(addProductColor(data.id, data.image_url))
          setIsLoading(false)
          popColor()
          setName("")
          setImage("")
          toast.success(`${data.name} added succesfully`)
        })
        .catch(error => {
          // Handle network error or response error.
          console.error('There was an error:', error);
          setIsLoading(false)
          toast.error(error.message)
        });
    
      }
  return (
    <div className={popupColor ? "card container shadow add-c-open add-c p-5" : "add-c"}>
        <h2 className='text-center mb-5'>Add product color</h2>
            <form onSubmit={handleSubmit}>             
                <div className="form-group mb-3"> 
                    <select required value={name} onChange={nameChange} className="form-control" aria-label="Default select example" >
                      <option defaultValue>select product color</option>
                      {prodColors}
                    </select>
                </div>
                <div className="form-group mb-3">                       
                    <input required onChange={imageChange} className="form-control" type="file" id="formFile"></input>
                  </div>
                <button 
                disabled={isLoading}
                  className='mt-2 form-control bg-primary text-white' 
                  type='submit'>
                   {isLoading ? "Loading..." : "add Color"}
                </button>
            </form>
    </div>
  )
}

export default AddProductColor