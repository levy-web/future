import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addFeatures, removeFeatures, clearFeatures } from '../redux/features/FeatureAction'

function AddFeatures({ popFeature, popupFeature}) {
    const [feature, setFeature] = useState('')
    const dispatch = useDispatch()
    const features = useSelector((state)=>state.features.features)
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
      features.map((feature)=>{
        let formData = {
          faeture_name:feature.name,
          product_id:item_id
        }
        fetch('https://protexx.onrender.com/features',{
          method: "POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)  
         })
         .then((r)=>r.json())
         .then((data)=>{
          console.log(data)
        })
      })
      popFeature()
    }
  return (
    <div className={popupFeature ? "card container shadow add-f-open add-c p-5" : "add-f"}>
        <h2 className='text-center mb-5'>Add product feature</h2>
        <form onSubmit={handleSubmit}>           
                <div className="form-group mb-3"> 
                    <input type="text" required name='feature' placeholder="feature name" value={feature} onChange={featureChange} className="form-control"></input>
                </div>
                <button className='mt-2 form-control bg-primary border-0 text-white' type='submit'>add Feature</button>
          </form>
            <div className='p-5'>
            <button className={features.length<1 ? "d-none": "my-2 d-block ms-auto bg-white text-danger border-0"} onClick={()=>dispatch(clearFeatures())}>clear list</button>      
              <ol>
                {featureItems}
              </ol>
            <button className={features.length<1 ? "d-none": "my-2 d-block mt-2 form-control text-success border-0"} onClick={postToApi}>submit</button>
            </div>
            

            
    </div>
  )
}

export default AddFeatures