import React from 'react'
import './Hotsale.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Hotsale() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-sm-2 d-flex justify-content-center"><h3>Hot Sale!</h3></div>
                    <div className="col-sm-9"></div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12 my-own-custom-container">
                        <Carousel
                            swipeable={false}
                            draggable={true}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all 1"
                            transitionDuration={500}
                            containerClass="carousel-container px-3"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <p className='discountBagde'>30% OFF</p>
                                <img src="/images/beanbag.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <img src="/images/desktop.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <img src="/images/jbl.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <img src="/images/console.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <img src="/images/lap.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <img src="/images/camera.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <img src="/images/macbook.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                            <div className="card hotsaleCard my-3" style={{ width: "18rem" }}>
                                <img src="/images/shoe.png" className="card-img-top" height={250} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-start">Holy Stone HS470 Foldable GPS RC Drone</h5>
                                    <div className="cardText d-flex justify-content-between">
                                        <h6 className="card-text  fw-bold fs-5 my-3">$1,245.33</h6>
                                    </div>
                                    <div className="cardTextBottom d-flex justify-content-between text-secondary">
                                        <p className='cardRecomPrice'>$1,300</p>
                                        <p className='fs-5'>4.5 <span className='text-blue'>★</span> </p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary w-100">Add to cart</button>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}
