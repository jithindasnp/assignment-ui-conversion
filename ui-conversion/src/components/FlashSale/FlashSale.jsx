import React from 'react'
import './FlashSale.css'

export default function FlashSale() {
    return (
        <div className="container rounded-5 my-5 pe-5 flashContainer ">
            <div className="row">
                <div className="col-sm-4  my-5 ps-5 text-white d-flex flex-column justify-content-center">
                    <h3 className='fw-bold'>Flash Sale</h3>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                    <h3 className='fw-bold fs-1'>05  :  42  :  19  :  54</h3>
                </div>
                <div className="col-sm-4  mb-5">
                    <div className="card flashCard my-5 d-flex flex-row  align-items-center" >
                        <img src="/images/flash1.png" width={80} className=" h-50" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title d-flex justify-content-start">Casio G-Shock Ana-Digi Quartz World Time 200m Black</h5>
                            <div className="cardText d-flex justify-content-between my-3">
                                <h6 className="card-text  fw-bold fs-5 ">$1,245.33</h6>
                                <p className=''>24 Left</p>
                            </div>
                            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-100" ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card flashCard my-5 d-flex flex-row  align-items-center" >
                        <img src="/images/flash2.png" width={80} className=" h-50" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title d-flex justify-content-start">Casio G-Shock Ana-Digi Quartz World Time 200m Black</h5>
                            <div className="cardText d-flex justify-content-between my-3">
                                <h6 className="card-text  fw-bold fs-5 ">$1,245.33</h6>
                                <p className=''>24 Left</p>
                            </div>
                            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-100" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
