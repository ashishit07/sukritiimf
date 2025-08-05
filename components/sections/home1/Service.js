'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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

export default function Service() {
    return (
        <>

     {/* Services One Start  */}
        <section className="services-one">
            <div className="services-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
            </div>
            <div className="services-one__shape-2 rotate-me">
                <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">Your Trusted Partner for Financial Well-being</p>
                    </div>
                    <h2 className="section-title__title">Personalized sessions to help <br/> you protect, plan, and prosper.
                        </h2>
                </div>
                <div className="services-one__bottom">
                    <Swiper {...swiperOptions} className="services-one__carousel">
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="family-insurance">One-to-One Sessions for NPS ​</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="https://img.freepik.com/premium-photo/engaging-office-meeting-with-couple_650366-8498.jpg?w=2000" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="health-insurance">One-to-One Sessions for Mutual Funds​</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="https://img.freepik.com/free-photo/pensive-colleagues-using-modern-device-while-taking-statistics_1262-17087.jpg?t=st=1754400503~exp=1754404103~hmac=bcecd93a5f2371a3e3d1152da8a6afef07e9df5f42273a4a76d110ff1cfc1cd0&w=2000" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                  
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="business-insurance">One-to-One Sessions for Insurance​</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="https://img.freepik.com/free-photo/this-is-your-booking-trip-young-man-planning-vacation-about-sign-purchase-agreement-with-travel-agent_662251-2163.jpg?t=st=1754400541~exp=1754404141~hmac=86ccd6dbcd2a6f2c8015955fd05be2a9dd555a31045f652452a5ba3a5ef85786&w=2000" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="family-insurance">Family Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="assets/images/services/services-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="family-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="health-insurance">Medical
                                                Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="assets/images/services/services-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="health-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="business-insurance">Busines
                                                Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="assets/images/services/services-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="business-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Services One End  */}
        </>
    )
}
