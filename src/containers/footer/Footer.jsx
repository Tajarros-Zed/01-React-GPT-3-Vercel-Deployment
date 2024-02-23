import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">

      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do You Want to Step in to The Future Before Others</h1>
      </div>

      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Zedrick Jerol Tajarros, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Github</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Zedrick Jerol Tajarros</p>
          <p>09455702579</p>
          <p>zedrick@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>©2024 GPT-3. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer