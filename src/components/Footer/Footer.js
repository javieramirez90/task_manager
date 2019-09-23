import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>MADE WITH LOVE FOR MY COLLEAGUES</p>
        <div className="icons">
          <img src={require("../../images/github_600905.png")} alt="linkedin logo"/>
          <img src={require("../../images/linkedin-logo.png")} alt="github logo"/>
      </div>
      
    </div>
  );
}

export default Footer;