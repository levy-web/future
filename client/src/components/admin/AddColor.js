import React, { useState } from 'react'

function AddColor() {
    const [name, setName] = useState('')
  
    function nameChange(e){
      setName(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const formData = {
        name: name
      }

      fetch('/colors',{
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
                  <button className='mt-2 form-control bg-primary text-white' type='submit'>add Color</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddColor