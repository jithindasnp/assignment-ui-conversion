import React from 'react'

export default function RecentlyViewed() {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-sm-3 d-flex justify-content-center"><h3>Recently viewed</h3></div>
                    <div className="col-sm-8"></div>
                    <div className="col-sm-1"><i class="fa-solid fa-angle-left"></i><span className='mx-3'></span><i class="fa-solid fa-angle-right"></i></div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg mx-4 col-sm-4 col ">
                        <div className="card mb-3" style={{ maxWidth: 340, border: "none" }}>
                            <div className="row no-gutters">
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <img src="/images/best deals/smartband.png" className="" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body ms-3">
                                        <h6 className="card-title" id='itemName'>Fitness and activity Tracker</h6>
                                        <p className="card-text" id="price">
                                            $33.3
                                        </p>
                                        <p className="card-text " id="star">
                                            ★★★★ (12)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg mx-4 col-sm-4 col ">
                        <div className="card mb-3" style={{ maxWidth: 340, border: "none" }}>
                            <div className="row no-gutters">
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <img src="/images/best deals/joystick.png" className="" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body ms-3">
                                        <h6 className="card-title " id='itemName'>Xbox White Joystick</h6>
                                        <p className="card-text" id="price">
                                            $98.4
                                        </p>
                                        <p className="card-text " id="star">
                                            ★★★★ (12)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg mx-4 col-sm-4 col ">
                        <div className="card mb-3" style={{ maxWidth: 340, border: "none" }}>
                            <div className="row no-gutters">
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <img src="/images/best deals/headset.png" className="" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body ms-3">
                                        <h6 className="card-title" id='itemName'>Super Boost Headphones</h6>
                                        <p className="card-text" id="price">
                                            $33.3
                                        </p>
                                        <p className="card-text " id="star">
                                            ★★★★ (12)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg mx-4 col-sm-4 col ">
                        <div className="card mb-3" style={{ maxWidth: 340, border: "none" }}>
                            <div className="row no-gutters">
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <img src="/images/best deals/shoe.png" className="" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body ms-3">
                                        <h6 className="card-title" id='itemName'>X-Ray 2 Square PACK</h6>
                                        <p className="card-text" id="price">
                                            $33.3
                                        </p>
                                        <p className="card-text " id="star">
                                            ★★★★ (12)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg mx-4 col-sm-4 col ">
                        <div className="card mb-3" style={{ maxWidth: 340, border: "none" }}>
                            <div className="row no-gutters">
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <img src="/images/best deals/watch.png" className="" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body ms-3">
                                        <h6 className="card-title" id='itemName'>AX1326 Automatic Analog</h6>
                                        <p className="card-text" id="price">
                                            $33.3
                                        </p>
                                        <p className="card-text " id="star">
                                            ★★★★ (12)
                                        </p>
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
