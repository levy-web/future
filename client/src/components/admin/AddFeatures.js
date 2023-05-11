import React, {useState} from 'react'

function AddFeatures({ popFeature, popupFeature}) {
    const [feature, setFeature] = useState('')
  
    function featureChange(e){
        setFeature(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const formData = {
        name: feature
      }

      fetch('https://protexx.onrender.com/colors',{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)  
       })
       .then((r)=>r.json())
       .then((data)=>{
        console.log(data)
        popFeature()
      })
  
    }
  return (
    <div className={popupFeature ? "card container shadow add-f-open add-c p-5" : "add-f"}>
        <h2 className='text-center mb-5'>Add product feature</h2>
            <form onSubmit={handleSubmit}>             
                <div className="form-group mb-3"> 
                    <input type="text" required name='feature' placeholder="feature name" value={feature} onChange={featureChange} className="form-control"></input>
                </div>
                <button className='mt-2 form-control bg-primary text-white' type='submit'>add Feature</button>
            </form>
    </div>
  )
}

export default AddFeatures