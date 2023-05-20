import React from 'react'
import imageOne from '../../slideone.jpg'
// import imageTwo from '../../slidetwo.jpg'
import imageThree from '../../slidethree.jpg'
import imageFour from '../../slidefour.jpg'
import Brand from './brands/Brand'

function Home() {
  return (
    <>
    <div className='container p-2 my-1'>
        <div className='row'>
            <div className="col-lg-8 my-3 col-12">
            
            <div id="carouselExampleIndicators" className="bg-light carousel-fade carousel slide"  data-interval="8000" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block carrz w-100" src={imageThree} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block carrz w-100" src={imageFour} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block carrz w-100" src={imageOne} alt="Third slide"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="bg-dark carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="bg-dark carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>


            <div className="col-4">
                <div className='bg-danger row my-4 small-display'>
                    <div className='col-6'>
                        <h4 className='animated-text py-3 px-3 text-white'> Your World Of Safety</h4>
                        <div className='pop-text text-center'>
                            <h6 className='bg-primary w-25 m-auto'>shop</h6>
                            <h6 className='bg-white m-auto w-25'>now</h6>
                        </div>
                    </div>
                    <div className='col-6 content-align-center'>
                        <img className="d-block animated-image w-100" src={imageFour} alt="First slide"></img>
                    </div>

                </div>
                <div className='row my-4 small-display'>
                    <div className='col-6 bg-primary text-center'><br/>
                        <small className='text-center'><strong>Great Value</strong><br/> Competitive Prices</small><br/>
                        <small className='text-center'><strong>M-Pesa On</strong><br/> Delivery</small>
                    </div>
                    <div className='col-6'>
                        <img className="d-block ms-auto h-100 w-100" src={imageOne} alt="First slide"></img>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    <Brand/>

    <div className='container'>
        <div className='d-flex advert my-3 py-2'>
                <div className='col-lg-4 adv-small border border-light d-flex align-items-center justify-content-center '>
                    <i className="me-2 fa-2x text-primary fas fa-truck"></i>
                    <small className='text-center'><strong>Fast Delivery</strong><br/> speedy delivery countrywide</small>
                </div>
                <div className='col-lg-4 adv-small border border-light d-flex align-items-center justify-content-center '>
                    <i className="me-2 fa-2x text-primary fab fa-cc-visa"></i>
                    <small className='text-center'><strong>Great Value</strong><br/> Competitive Prices</small>
                </div>
                <div className='col-lg-4 adv-small border border-light d-flex align-items-center justify-content-center '>
                    <i className="me-2 fa-2x text-primary far fa-money-bill-alt"></i>
                    <small className='text-center'><strong>M-Pesa On</strong><br/> Delivery</small>
                </div>
        </div>
    </div>
    </>
  )
}

export default Home