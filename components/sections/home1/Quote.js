'use client'
import { useState } from "react"
import emailjs from "emailjs-com"

export default function Quote() {
    const [activeIndex, setActiveIndex] = useState(1)

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_skj8m4n",
            "template_csbd24f",
            e.target,
            "UbZb29OCm3xc26dvg"
        )
        .then(() => {
            alert("Email sent successfully!");
            e.target.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Email send failed.");
        });
    }

    return (
        <section className="get-quote">
            <div className="container">
                <div className="get-quote__inner">
                    <div className="row tabs-box">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-quote__left clearfix">
                                <div className="get-quote__tab-box clearfix">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-life-insurance-1"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Life</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-insurance-1"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Veichle</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-home-insurance"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Home</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-briefcase"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Business</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-health-insurance"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Health</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-quote__right">
                                <div className="tabs-content">
                                    {["Life Insurance", "Veichle Insurance", "Home Insurance", "Business Insurance", "Health Insurance"].map((title, idx) => (
                                        <div key={idx} className={activeIndex === idx + 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="get-quote__content">
                                                <p className="get-quote__tagline">GET FREE QUOTE</p>
                                                <h2 className="get-quote__title">{title}</h2>
                                                <form className="get-quote__form" onSubmit={sendEmail}>
                                                    <div className="get-quote__content-box">
                                                        <div className="get-quote__input-box">
                                                            <input type="text" name="name" placeholder="Your Name" required />
                                                        </div>
                                                        <div className="get-quote__input-box">
                                                            <input type="email" name="email" placeholder="Email Address" required />
                                                        </div>
                                                        <div className="get-quote__input-box">
                                                            <input type="text" name="phone" placeholder="Phone Number" required />
                                                        </div>
                                                        <div className="get-quote__input-box">
                                                            <input type="text" name="property" placeholder="Property Types" required />
                                                        </div>
                                                    </div>
                                                    <div className="get-quote__content-bottom">
                                                        <button type="submit" className="thm-btn get-quote__btn">GET YOUR QUOTE</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}