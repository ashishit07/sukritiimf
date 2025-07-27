// components/SatheeShProfile.js
import Link from "next/link";
import Image from "public/assets/images/resources/q.png";

export default function SatheeShProfile() {
    return (
        
        <section className="team-details">
            <div className="container">
                <div className="team-details__top">
                    <div className="team-details__top-bg">
                        <div className="team-details__top-shape-1 float-bob">
                            <img src="assets/images/shapes/team-details-top-shape-1.png" alt=""/>
                        </div>
                        <div className="team-details__top-shape-2 float-bob-y">
                            <img src="assets/images/shapes/team-details-top-shape-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__top-img-box">
                                <div className="team-details__top-img">
                                    <img src="assets/images/team/team-details-top-img-1.jpg" alt=""/>
                                </div>
                                <span>SUKRITI</span>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__top-right">
                                <h3 className="team-details__top-right-title">SATHEESH KUMAR N</h3>
                                <p className="team-details__top-right-sub-title">Principal Officer </p>
                       
                                {/* <ul className="team-details__top-points list-unstyled">
                                    <li>
                                        <span>Department:</span>
                                        <p>Web Design</p>
                                    </li>
                                    <li>
                                        <span>Experience:</span>
                                        <p>15 Years</p>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <p><Link href="mailto:sonchoyhelp@gmail.com">sonchoyhelp@gmail.com</Link></p>
                                    </li>
                                    <li>
                                        <span>Phone:</span>
                                        <p><Link href="tel:+1900938495743">+1-900-938-4957-43</Link></p>
                                    </li>
                                </ul> */}
                                <div className="team-details__social">
                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="#" className="team-details__social-color-2"><span
                                            className="icon-twitter"></span></Link>
                                    <Link href="#" className="team-details__social-color-3"><span
                                            className="icon-instagram"></span></Link>
                                    <Link href="#" className="team-details__social-color-4"><span
                                            className="icon-linkedin"></span></Link>
                                </div>
                                   <p className="team-details__text-2">​
Shri. Satheesh Kumar, Principal officer (PO) of Sukriti IMF LLP is an Industry​

expert having a total experience of 32 years with the top two life insurance​

companies in India (13 years in LIC and 19 years in SBI Life insurance Co Ltd).​

He is a firm believer and practitioner of “No Mis Selling & No Force Selling”​

concept and advocates only “Need based selling”. He is committed to continue​

ETHICAL & NEED BASED SELLING in his new role as the Principal Office (PO) of​

“Sukriti IMF LLP”.</p>
                   <p className="team-details__text-1">M.Com (Banking & Insurance), Fellow of Insurance institute of India (FIII)​

MBA (Sales and Marketing)​

</p>
                            </div>
                        </div>
                    </div>
                </div>
     
            </div>
        </section>
    );
}
