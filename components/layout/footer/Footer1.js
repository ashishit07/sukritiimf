import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-x">
                <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link href="index"><img src="assets/images/resources/logo-1.png"
                                                alt=""/></Link>
                                    </div>

                                    <div className="footer-widget__title-box" style={{ marginBottom: '10px' }}>
                                        <h3 className="footer-widget__title"  >Registered Address</h3>
                                    </div>
                                    
                                    <p className="footer-widget__about-text" style={{ marginTop: '0px' }}>Samridhi Puthichal, Thannimoud P.O.,Thiruvananthapuram – 695123, Kerala, India</p>
                                    <div className="footer-widget__title-box" style={{ marginBottom: '10px' }}>
                                        <h3 className="footer-widget__title" style={{ marginBottom: '10px' }}>Phone Number</h3>
                                    </div>
                                    <div className="footer-widget__emergency-call" style={{ marginTop: '0px' }}>
                                        <Link href="tel:0471-2401591">0471-2401591 </Link>
                                        <Link href="tel:+91 9447124015">+91 9447124015</Link>
                                    </div>
                                    {/* <div className="footer-widget__social">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-instagram-1"></span></Link>
                                        <Link href="#"><span className="icon-tik-tok"></span></Link>
                                        <Link href="#"><span className="icon-youtube"></span></Link>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__navigation">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Navigation</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="index">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="insurance">Services</Link>
                                        </li>
                                        <li>
                                            <Link href="contact">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link href="blog">Our Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                                  <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Branch Office Address</h3>
                                    </div>
                                    <p className="footer-widget__newsletter-text">TC 43/657/5, UK Edifies, Valiyasalai, Chalai P.O.,<br/> Thiruvananthapuram – 685036, Kerala, India</p>
                               
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Email Address</h3>
                                    </div>
                                    <div className="footer-widget__emergency-call" style={{ marginTop: '0px' }}>
                                        <Link href="mailto:sukritiimfllp@gmail.com">sukritiimfllp@gmail.com   </Link> <br/>
                                        <Link href="mailto:satheeshrmbanca@gmail.com">satheeshrmbanca@gmail.com </Link> 
                                    </div>
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
