import React, { useState } from 'react';
import emailjs from  'emailjs-com'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => {
  
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    setLoading(true)
    console.log("E target",e.target);
    e.preventDefault()
    emailjs.sendForm("service_apy8uk3","template_3pshzls" ,e.target,"Qs840L1BwZGTjBL76")
    .then(res=> {
      console.log(res);
      setLoading(false)
      setisFormSubmitted(true)
    }).catch (err=> console.log (err))
    e.target.reset()
   
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">abdiladifhassan114@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+254 725151165</a>
        </div>
      </div>
      {!isFormSubmitted ? (
       
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name"  /> 
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="user_email"  />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button  className="p-text" >{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
       
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
