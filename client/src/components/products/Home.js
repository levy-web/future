import React from 'react'
import imageOne from '../../slideone.jpg'
import imageTwo from '../../slidetwo.jpg'
import imageThree from '../../slidethree.jpg'
import imageFour from '../../slidefour.jpg'

function Home() {
  return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={imageFour} alt="First slide"></img>
                <div class="carousel-caption d-none d-md-block">
                    <h3>Get Protected First</h3>
                    <p>Quality products from sams solutions</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={imageOne} alt="Second slide"></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>All Round Safety Available</h5>
                    <p>Construction, welding, Fire, etc ..</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={imageTwo} alt="Third slide"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h3>FACE AND EYES PROTECTION</h3>
                    <p>get yourself protective gears and avoid side effects..</p>
                </div>
            </div>
        </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
  )
}

export default Home