import React from 'react';
import { BsTwitter, BsInstagram,BsGithub,BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
     <div>
      <a href='https://github.com/Hassan-jr?tab=repositories'>
      <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/abdiladif-hassan-524168213'>
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://twitter.com/Hassan_jr_1?t=1Smv-fiNx7iVvsFEoyXvPg&s=09'>
      <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/updiladiph.hersonadan'>
      <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='http://instagram.com/hassan_jr_1?utm_source=qr'>
      <BsInstagram />
      </a>
      
    </div>
  </div>
);

export default SocialMedia;
