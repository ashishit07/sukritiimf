'use client'
import { useState } from 'react'
 
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            {/* FAQ One Start  */}
            <section className="faq-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="faq-one__left">
                                    <div className="faq-one__shape-1 float-bob-x">
                                        <img src="assets/images/shapes/faq-one-shape-1.png" alt=""/>
                                    </div>
                                    <div className="faq-one__img-box">
                                        <div className="faq-one__img">
                                            <img src="assets/images/resources/faq-one-img-1.png" alt=""/>
                                        </div>
                                        <div className="faq-one__quick-box">
                                            <div className="faq-one__quick-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__quick-text">Quick, Easy and
                                                <br/> Hassle Free</h4>
                                        </div>
                                        <div className="faq-one__policy">
                                            <div className="faq-one__policy-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__policy-text">Save up to 50% in
                                                <br/> Our all Policy</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="faq-one__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">PEOPLE ASK QUESTION</p>
                                        </div>
                                        <h2 className="section-title__title">Offering Great
                                            <br/> Insurance Solutions</h2>
                                    </div>
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>Is my statement allowed on life insurance?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Arki features minimal and stylish design. The theme is well crafted for
                                                        all
                                                        the modern architect and interior design, it makes your website look
                                                        even
                                                        more attractive and impressive to</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>How to solve lunch your business?</h4>
                                            </div>
                                            <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                                <div className="inner">
                                                    <p>Arki features minimal and stylish design. The theme is well crafted for
                                                        all
                                                        the modern architect and interior design, it makes your website look
                                                        even
                                                        more attractive and impressive to</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>What do you look for in a founding team?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Arki features minimal and stylish design. The theme is well crafted for
                                                        all
                                                        the modern architect and interior design, it makes your website look
                                                        even
                                                        more attractive and impressive to</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                            <div className="accrodion-title">
                                                <h4>What do I get for $50 with my insurance plan</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Arki features minimal and stylish design. The theme is well crafted for
                                                        all
                                                        the modern architect and interior design, it makes your website look
                                                        even
                                                        more attractive and impressive to</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* FAQ One End  */}
            
        </>
    )
}
