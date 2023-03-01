import React from 'react'
import './Footer.css'


export default function Footer() {
    return (
        <>
            <div className="container-fluid topOfPage ">
                <div className="row ">
                    <div className="col-sm-12  d-flex justify-content-center align-items-center">
                        <p className='mt-2'>Back to Top<i class="fa-solid fa-angle-up ms-3"></i></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-5 pt-5 pb-3 mb-5 text-white newsLetter ">
                <div className="row align-items-center">
                    <div className="col-sm-1">
                        <div className="iconDiv">
                            <img src="/images/newsletter.png" className='iconImg img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-sm-5 px-3">
                        <h3>Sign Up for Newsletter</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <div className="">
                            <input className='form-control' type="text" id="inpNewsletter" />
                            <button className='btn btn-dark' id="subBtn">subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-sm-3 d-flex flex-column align-items-start">
                            <img src="/images/logo-6 1.png" className='img-fluid mb-3' alt="" />
                            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <div className="row my-3">
                                <div className="col-auto"><i class="fa-brands footerIcons fa-youtube"></i></div>
                                <div className="col-auto"><i class="fa-brands footerIcons fa-linkedin"></i></div>
                                <div className="col-auto"><i class="fa-brands footerIcons fa-twitter"></i></div>
                                <div className="col-auto"><i class="fa-brands footerIcons fa-facebook"></i></div>
                                <div className="col-auto"><i class="fa-brands footerIcons fa-instagram"></i></div>
                            </div>
                        </div>
                        <div className="col-sm-auto mx-3 mt-3">
                            <p className='mb-3 fw-bolder'>QUICK LINKS</p>
                            <p>Products</p>
                            <p>Classifieds </p>
                            <p>Contact us</p>
                            <p>Login</p>
                            <p>Sign Up</p>
                        </div>
                        <div className="col-sm-auto mx-3 mt-3">
                            <p className='mb-3 fw-bolder'>CUSTOMER AREA</p>
                            <p>My Account </p>
                            <p>Orders  </p>
                            <p>Tracking List</p>
                            <p>Terms </p>
                            <p>Privacy Policy</p>
                            <p>Return Policy</p>
                            <p>My Cart</p>
                        </div>
                        <div className="col-sm-auto mx-3 mt-3">
                            <p className='mb-3 fw-bolder'>VENDOR AREA</p>
                            <p>Partner with us</p>
                            <p>Training </p>
                            <p>Procedures</p>
                            <p>Terms</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="col-sm-4 mt-3">
                            <p className='mb-3 fw-bolder'>CONTACT</p>
                            <p>Lorem ipsum dolor sit amet, consectetur \
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                            </p>
                            <div className="row mt-">
                                <div className="col-sm-3">
                                    <img src="/images/headphone.png" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <p className='p-0 m-0'>Have any question?</p>
                                    <p className='p-0 m-0 mt-1 text-info'>+ 123 456 789</p>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" class="btn btn-outline-info">CHAT</button>
                                </div>
                            </div>
                            <div className="download d-flex mt-5">
                                <div className="apple p-3 d-flex align-items-center">
                                    <i class="fa-brands fa-apple fs-1"></i>
                                    <div className="titleApple mt-3 ms-2">
                                        <p className='p-0 m-0' style={{ fontSize: "10px" }}>Download on the </p>
                                        <p className='fw-bolder'>App Store</p>
                                    </div>
                                </div>
                                <div className="android ms-3 p-3 d-flex align-items-center">
                                    <i class="fa-brands fa-google-play fs-1"></i>
                                    <div className="titleApple mt-3 ms-2">
                                        <p className='p-0 m-0' style={{ fontSize: "10px" }}>GET IT ON </p>
                                        <p className='fw-bolder'>Google Play</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
