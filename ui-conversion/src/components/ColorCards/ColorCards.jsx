import React from 'react'
import './ColorCards.css'

export default function ColorCards() {
    return (
        <>
            <div className="container my-5 text-white">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="blueBox d-flex flex-column">
                            <div className="title ms-5 mt-5" >
                                <h3 className='fw-light fs-1'>Explore <br /><b> classifieds</b></h3>
                            </div>
                            <div className="subTitle mt-5 mx-5 fs-5 d-flex align-items-end justify-content-between">
                                <p className='fw-lighter mt-3 fs-3'>Over 5000 + Products</p>
                               <p className='angleBtn ps-2'> <i class="fa-solid fa-angle-right  fs-1"></i></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="violetBox d-flex flex-column">
                        <div className="title ms-5 mt-5" >
                                <h3 className='fw-light fs-1'>Add <br /><b>  classifieds</b></h3>
                            </div>
                            <div className="subTitle mt-5 mx-5 fs-5 d-flex align-items-end justify-content-between">
                                <p className='fw-lighter  fs-3'>Ads, Event Ads <br /> Service Requests etc</p>
                               <p className='angleBtn ps-2'> <i class="fa-solid fa-angle-right  fs-1"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="greenBox d-flex flex-column">
                        <div className="title ms-5 mt-5" >
                                <h3 className='fw-light fs-1'>Explore <br /><b>  Products</b></h3>
                            </div>
                            <div className="subTitle mt-5 mx-5 fs-5 d-flex align-items-end justify-content-between">
                                <p className='fw-lighter mt-3 fs-3'>Over 25000 + Products</p>
                               <p className='angleBtn ps-2'> <i class="fa-solid fa-angle-right  fs-1"></i></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="redBox d-flex flex-column">
                        <div className="title ms-5 mt-5" >
                                <h3 className='fw-light fs-1'>Partner <br /><b>  With us</b></h3>
                            </div>
                            <div className="subTitle mt-5 mx-5 fs-5 d-flex align-items-end justify-content-between">
                                <p className='fw-lighter mt-3 fs-3'>Sell your products</p>
                               <p className='angleBtn ps-2'> <i class="fa-solid fa-angle-right  fs-1"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
