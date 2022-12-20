import React, {useEffect} from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import ReactGA from 'react-ga';

const App = () => { 

  ReactGA.initialize('UA-198293761-2');

  useEffect(()=>{
   
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  const width2 = window.screen.width; 


  return(
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    {width2 < 450 && (
        <div className="app__social-m">
        <div>
          <a href="https://github.com/Hassan-jr?tab=repositories">
            <BsGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/abdiladif-hassan-524168213">
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/Hassan_jr_1?t=1Smv-fiNx7iVvsFEoyXvPg&s=09">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/updiladiph.hersonadan">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="http://instagram.com/hassan_jr_1?utm_source=qr">
            <BsInstagram />
          </a>
        </div>
      </div>
    )}
  </div>
);
}

export default App;
