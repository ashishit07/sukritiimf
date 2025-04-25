'use client';
import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Quote() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_skj8m4n",         // ✅ Your Service ID
      "template_csbd24f",        // ✅ Your Template ID
      e.target,
      "UbZb29OCm3xc26dvg"        // ✅ Your Public Key
    )
    .then(() => {
      alert("Email sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Email send failed.");
    });
  };

  return (
    <section className="get-quote">
      {/* ... shape and decorative code ... */}
      <div className="container">
        <div className="get-quote__inner">
          <div className="row tabs-box">
            {/* Tabs */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              {/* ... tab buttons code unchanged ... */}
            </div>

            {/* Forms section */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tabs-content">
                
                {/* ✅ Life Insurance tab with Email */}
                <div className={activeIndex === 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                  <div className="get-quote__content">
                    <p className="get-quote__tagline">GET FREE QUOTE</p>
                    <h2 className="get-quote__title">Life Insurance</h2>
                    <form className="get-quote__form" onSubmit={sendEmail}>
                      <div className="get-quote__content-box">
                        <div className="get-quote__input-box">
                          <input type="text" placeholder="Your Name" name="name" required />
                        </div>
                        <div className="get-quote__input-box">
                          <input type="email" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="get-quote__input-box">
                          <input type="text" placeholder="Phone Number" name="phone" required />
                        </div>
                        <div className="get-quote__input-box">
                          <input type="text" placeholder="Property Types" name="property" required />
                        </div>
                      </div>
                      <div className="get-quote__content-bottom">
                        <button type="submit" className="thm-btn get-quote__btn">GET YOUR QUOTE</button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* 🚧 Other tabs still unchanged (can update same way) */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
