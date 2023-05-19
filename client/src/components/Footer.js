import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row mx-auto py-3'>
          <div className='col-lg-4 text-white'>
          <h5>CONTACT DETAILS</h5>
            <hr className='border border-white'/>

            <div className='d-flex container w-100 my-2'>
              <i className="text-primary m-auto fas fa-phone"></i>
              <small className='w-100 '>+254 716 085 629</small>
            </div>

            <div className='d-flex container m-auto w-100 my-2'>
              <i className="text-success fab fa-whatsapp"></i>
              <small className='w-100 '>+254 716 085 629</small>
            </div>

            <div className='d-flex container m-auto w-100 my-2'>
              <i className="text-white fas fa-envelope"></i>
              <small className='w-100 '>info@sams-solutions.com</small>
            </div>
            <div className='d-flex container w-100 mb-2'>
              <i className="ms-1 text-white fas fa-map-marker-alt"></i>
              <small className='ms-3 w-100'>hop # 29, Mount Royal Hotel, Deira, Dubai 183189, United Arab Emirates</small>
            </div>

            <div className='row m-auto container w-100 my-2'>
              <button className='col-2 border-0 m-1'><i className="text-primary fab fa-facebook"></i></button>
              <button className='col-2 border-0 m-1'><i className="text-dark fab fa-twitter"></i></button>
              <button className='col-2 border-0 m-1'><i className="text-danger fab fa-pinterest"></i></button>
              <button className='col-2 border-0 m-1'><i className="text-secondary fab fa-linkedin"></i></button>
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