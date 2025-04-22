'use client'
import CounterUp from "@/components/elements/CounterUp"
import BrandSlider from "@/components/slider/BrandSlider"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }



}



export default function section2() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
    

        {/* Why Choose Three Start */}
        <section className="why-choose-three why-choose-five">
            <div className="why-choose-three__shape-1">
                <img src="assets/images/shapes/why-choose-five-shape-1.png" alt=""/>
            </div>
            <div className="why-choose-three__shape-2 img-bounce">
                <img src="assets/images/shapes/why-choose-five-shape-2.png" alt=""/>
            </div>
            <div className="why-choose-three__shape-3 float-bob-x">
                <img src="assets/images/shapes/why-choose-five-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
               
                    <h2 className="section-title__title">Why India Needs Ethical 
                        <br/> Financial Distribution ?​</h2>
                </div>
                <div className="row">
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-save-money-1"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about"> Low Insurance Penetration</Link></h3>
                                <p>India’s life insurance penetration is only 3.2% of GDP, and non-life is less than 1%, far below global standards.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className=" icon-cashback"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about">Lack of Financial Literacy</Link></h3>
                                <p>Financial Literacy rates in India is very low and majority of the consumers are incompetent to choose the appropriate Insurance/ Mutual Funds/ Retirement Plans.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-bar-chart"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about">Fragmented and Biased Distribution</Link></h3>
                                <p>Tied agents, banks, and corporate agents often push products based on sales targets and with the highest commission—not on customer needs.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-save-money-1"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="about">Trust Deficit</Link></h3>
                                <p>Widespread mis-selling and absence of after-sales service have led to public mistrust in financial intermediaries.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                </div>
            </div>
        </section>
        {/* Why Choose Three End */}

       
        </>
    )
}


