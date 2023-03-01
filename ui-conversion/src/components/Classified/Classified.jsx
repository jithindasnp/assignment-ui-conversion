import React from 'react'
import './Classified.css'
import Flickity from 'react-flickity-component'



export default function Classified() { 


    const flickityOptions = {
        initialIndex: 2
    }

    return (
        <>
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={false}
                draggable='>1'
                reloadOnUpdate
                static
                pageDots='false'
            ></Flickity>
            <div className="container-fluid classifiedContainer my-5">
                <div className="row">
                    <div className="col-sm-3 d-flex flex-column align-items-center justify-content-center">
                        <h3 className='classifiedCarouselTitle'>Classified Products on the week</h3>
                        <div className="buttons mb-5 mt-3">
                            <button  className='classifiedScrollBtn me-3'></button>
                            <button className='classifiedScrollBtn ms-3'></button>
                        </div>
                        <button type="button" class="btn btn-info classifiedCarouselBtn text-white mt-3">Explore<i class="fa-solid fa-angle-right ms-1"></i> </button>
                    </div>
                    <div className="col-sm-9  my-3">
                        <div className="carousel" id='carouselBox' data-flickity='{ "wrapAround": true }'>
                            <div className="carousel-cell mx-2 ">
                                <div className="card classifiedCard my-3" style={{ width: "18rem" }}>
                                    <img src="/images/drone.png" className="card-img-top" height={250} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                        <div className="cardText d-flex justify-content-between">
                                            <h6 className="card-text text-info fw-bold fs-5 my-3">$300.98</h6>
                                            <p className="card-text text-secondary my-3"><i class="fa-solid fa-location-dot"></i>Cape Hadstone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell mx-2">
                                <div className="card classifiedCard my-3" style={{ width: "18rem" }}>
                                    <img src="/images/speaker.png" className="card-img-top" height={250} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Marshall Stockwell II Portable Speaker</h5>
                                        <div className="cardText d-flex justify-content-between">
                                            <h6 className="card-text text-info fw-bold fs-5 my-3">$300.98</h6>
                                            <p className="card-text text-secondary my-3"><i class="fa-solid fa-location-dot"></i>Cape Hadstone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell mx-2">
                                <div className="card classifiedCard my-3" style={{ width: "18rem" }}>
                                    <img src="/images/car.png" className="card-img-top" height={250} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">2020 Ford Mustang GT Fastback</h5>
                                        <div className="cardText d-flex justify-content-between">
                                            <h6 className="card-text text-info fw-bold fs-5 my-3">$300.98</h6>
                                            <p className="card-text text-secondary my-3"><i class="fa-solid fa-location-dot"></i>Cape Hadstone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell mx-2">
                                <div className="card classifiedCard my-3" style={{ width: "18rem" }}>
                                    <img src="/images/phone.png" className="card-img-top rounded-end-5" height={250} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Iphone 11 pro <br /> max</h5>
                                        <div className="cardText d-flex justify-content-between">
                                            <h6 className="card-text text-info fw-bold fs-5 my-3">$300.98</h6>
                                            <p className="card-text text-secondary my-3"><i class="fa-solid fa-location-dot"></i>Cape Hadstone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell mx-2">
                                <div className="card classifiedCard my-3" style={{ width: "18rem" }}>
                                    <img src="/images/console.png" className="card-img-top" height={250} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Xbox White <br /> Joystick</h5>
                                        <div className="cardText d-flex justify-content-between">
                                            <h6 className="card-text text-info fw-bold fs-5 my-3">$300.98</h6>
                                            <p className="card-text text-secondary my-3"><i class="fa-solid fa-location-dot"></i>Cape Hadstone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell mx-2">
                                <div className="card classifiedCard my-3" style={{ width: "18rem" }}>
                                    <img src="/images/headset.png" className="card-img-top" height={250} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Super Boost <br /> Headphones</h5>
                                        <div className="cardText d-flex justify-content-between">
                                            <h6 className="card-text text-info fw-bold fs-5 my-3">$300.98</h6>
                                            <p className="card-text text-secondary my-3"><i class="fa-solid fa-location-dot"></i>Cape Hadstone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
