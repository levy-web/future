import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import { logoutUser } from '../redux/user/UserAction';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from './AdminNav';


function AddProd() {
    const [name, setName] = useState('')
    const [material, setMaterial] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [weight, setWeight] = useState('')
    const [price, setPrice] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [origin, setOrigin] = useState('')
    const [standards, setStandards] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const cat = useSelector((state)=>state.categories.categories)
    const token = useSelector((state)=>state.user.token)

    const categories = cat.map((category)=> <option value={category.id}>{category.name}</option>)
  
    // const dispatch = useDispatch()
  
    function nameChange(e){
      setName(e.target.value)
    }

    function materialChange(e){
        setMaterial(e.target.value)
      }

  
    function weightChange(e){
      setWeight(e.target.value)
    }
  
    function priceChange(e){
      setPrice(e.target.value)
    }
  
    function dimensionsChange(e){
      setDimensions(e.target.value)
    }
  
    function categoryChange(e){
      setCategory(e.target.value)
    }
  
    function originChange(e){
      setOrigin(e.target.value)
    }

    function standardsChange(e){
        setStandards(e.target.value)
      }
  
    function imageChange(e){
      setImage(e.target.files[0])
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const data = new FormData();
  
      data.append("product[name]", name);
      data.append("product[material]", material);
      data.append("product[origin]", origin);
      data.append("product[standards]", standards);
      data.append("product[dimensions]", dimensions);
      data.append("product[weight]", weight);
      data.append("product[category_id]", category);
      data.append("product[price]", price);
      data.append("product[image]", image);
  
      handleSubmitToApi(data)
  
  
    }
  
    function handleSubmitToApi(data){
      setIsLoading(true)
  
       fetch('https://protexx.onrender.com/products',{
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
        setIsLoading(false)
        navigate(`/admin/product/${data.id}`)
        toast.success(`${data.name} added succesfully`)
      })
      .catch(error => {
        // Handle network error or response error.
        setIsLoading(false)
        console.error('There was an error:', error);
        toast.error(error.message)
      });
  
    }
  return (
    <div className='container my-3 py-3'>
      <div className="row my-4 h-100">
        <div className="col-md-7 col-lg-8 col-sm-8 mx-auto">
          <div className="card shadow p-5">
            <h2 className='text-center mb-5'>Add new product</h2>
              <form onSubmit={handleSubmit}>
                
                  <div className="form-group mb-3"> 
                    <input type="text" required name='name' placeholder="product name" value={name} onChange={nameChange} className="form-control"></input>
                  </div>

                  <div className="form-group mb-3"> 
                    <select required value={category} onChange={categoryChange} className="form-control" aria-label="Default select example" >
                      <option defaultValue>select product category</option>
                      {categories}
                    </select>
                  </div>

                  <div className="form-group mb-3"> 
                    <input required type="number" name='weight' placeholder="weight" value={weight} onChange={weightChange} className="form-control"></input>
                  </div>

                  <div className="form-group mb-3">       
                    <input required type="number" name='price' placeholder="price" value={price} onChange={priceChange} className="form-control" ></input>
                  </div>

                  <div className="form-group mb-3">          
                    <input required type="text" name='dimensions' placeholder="dimensions" value={dimensions} onChange={dimensionsChange} className="form-control"></input>
                  </div>

                  <div className="form-group mb-3">         
                    <input required type="text" name='material' placeholder="material" value={material} onChange={materialChange} className="form-control"></input>
                  </div>

                  <div className="form-group mb-3"> 
                    <input type="text" required name='origin' placeholder="origin" value={origin} onChange={originChange} className="form-control"></input>
                  </div>
                  <div className="form-group mb-3"> 
                    <input type="text" required name='standards' placeholder="standards" value={standards} onChange={standardsChange} className="form-control"></input>
                  </div>

                  <div className="form-group mb-3">                       
                    <input required onChange={imageChange} className="form-control" type="file" id="formFile"></input>
                  </div>

                  <button
                  disabled={isLoading} 
                    className='mt-2 form-control bg-primary text-white' 
                    type='submit'>
                     {isLoading ? "Loading..." : "add Product"}                      
                  </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProd