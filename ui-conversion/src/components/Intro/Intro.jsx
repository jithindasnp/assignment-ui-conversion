import React from 'react'
import './Intro.css'
import Flickity from 'react-flickity-component'

export default function Intro() {
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
            ></Flickity>
            <div className="container-fluid introContainer my-5">
                <div className="row">
                    <div className="col-sm-12  ">
                        <div className="carousel" data-flickity='{ "wrapAround": true,"prevNextButtons": false }'>
                            <div className="carousel-cell introCarouselCell">
                                <img src="/images/Rectangle 9.png" className='img-fluid' alt="" />
                                <h3 id='carouselCaption'>From students to senior citizens
                                    this web portal of <br />
                                    <b className='fw-bold'>"Products and Classifieds”</b><br />
                                    provides it all
                                </h3>
                            </div>
                            <div className="carousel-cell introCarouselCell"><img src="/images/carousel 3.png" className='img-fluid img3' alt="" /></div>
                            <div className="carousel-cell introCarouselCell"><img src="/images/carousel 2.png" className='img-fluid img2' alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
