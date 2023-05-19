import React from 'react'

function Footer() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+254 716 085 629';
  };
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row mx-auto py-5'>
          <div className='col-lg-4 text-white'>
          <h5>CONTACT DETAILS</h5>
            <hr className='border border-white'/>

            <div onClick={handlePhoneClick} className='d-flex container w-100 my-2'>
              <i className="text-primary m-auto fas fa-phone"></i>
              <small className='w-100 '>+254 716 085 629</small>
            </div>

            <div className='d-flex container m-auto w-100 my-2'>
              <i className="text-white fas fa-envelope"></i>
              <small className='w-100 '>info@sams-solutions.com</small>
            </div>
            <div className='d-flex container w-100 mb-2'>
              <i className="ms-1 text-danger fas fa-map-marker-alt"></i>
              <small className='ms-3 w-100'>hop # 29, Mount Royal Hotel, Deira, Dubai 183189, United Arab Emirates</small>
            </div>           

                        
          </div>

          <div className='col-lg-4 text-white'>
          <h5>Terms</h5>
          <hr className='border border-white'/> 
          <div className='d-flex container m-auto w-100 my-2'>
              <small className='w-100 '>Terms & Conditions</small>
            </div>
            <div className='d-flex container m-auto w-100 my-2'>
              <small className='w-100 '>Privacy Policy</small>
            </div>
            <div className='d-flex container m-auto w-100 my-2'>
              <small className='w-100 '>Cookie Policy</small>
            </div>           
          </div>

          <div className='col-lg-4 text-white'>
          <h5>CUSTOMER SERVICE</h5>
          <hr className='border border-white'/>
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>About</small>
          </div> 
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>General Enquiries</small>
          </div> 
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>Distribution Enquiries</small>
          </div> 
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>Contact Us</small>
          </div> 
                     
          </div>
        </div> 
        </div>       
    </div>
  )
}

export default Footer