import React, {useState} from 'react'
import {toast} from 'react-hot-toast'
import { logoutUser } from '../redux/user/UserAction'
import {useSelector, useDispatch} from 'react-redux'
import { addFeatures, removeFeatures, clearFeatures } from '../redux/features/FeatureAction'

function AddFeatures({ popFeature, popupFeature}) {
    const [feature, setFeature] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const features = useSelector((state)=>state.features.features)
    const token = useSelector((state)=>state.user.token)

    console.log(features)

    const item_id = window.location.pathname.split('/').pop();

    const removeFeature = (e)=>{
      console.log(e.target.value)
      dispatch(removeFeatures(e.target.value))
    }

    const featureItems = features.map((item)=><div className='row' key={item.id}><li className='me-auto col-9'>{item.name}</li><button value={item.name} onClick={removeFeature} className='me-auto border-0 bg-white col-3 text-danger'>X</button></div>)
  
    function featureChange(e){
        setFeature(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const formData = {
        name: feature
      }
      dispatch(addFeatures(formData))
      setFeature('')  
    }

    function postToApi(){
      setIsLoading(true)
      features.map((feature)=>{
        let formData = {
          faeture_name:feature.name,
          product_id:item_id
        }
        fetch('https://protexx.onrender.com/features',{
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
          setFeature('')
          setIsLoading(false)
          toast.success(`${data.faeture_name} added succesfully`)
        })
        .catch(error => {
          // Handle network error or response error.
          console.error('There was an error:', error);
          setIsLoading(false)
          toast.error(error.message)
        });
      })
      popFeature()
      dispatch(clearFeatures())

    }
  return (
    <div className={popupFeature ? "card container shadow add-f-open add-c p-5" : "add-f"}>
        <h2 className='text-center mb-5'>Add product feature</h2>
        <form onSubmit={handleSubmit}>           
                <div className="form-group mb-3"> 
                    <input type="text" required name='feature' placeholder="feature name" value={feature} onChange={featureChange} className="form-control"></input>
                </div>
                <button className='my-2 d-block mt-2 form-control bg-light border-0' type='submit'>add Feature</button>
          </form>
            <div className='p-5'>
            <button className={features.length<1 ? "d-none": "my-2 d-block ms-auto bg-white text-danger border-0"} onClick={()=>dispatch(clearFeatures())}>clear list</button>      
              <ol>
                {featureItems}
              </ol>
            <button
            disabled={isLoading}
              className={features.length<1 ? "d-none": "my-2 d-block mt-2 form-control bg-success border-0"} 
              onClick={postToApi}>
                 {isLoading ? "Loading..." : "add Product"}
              </button>
            </div>
          
    </div>
  )
}

export default AddFeatures