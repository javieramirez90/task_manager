import React from 'react';
import './Header.css';
import SpringModal from '../UI/Modal/Modal'

const Header = (props) => {
  
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={require("../../images/logo.png")} alt="logo ironhack" className="header__logo"/>
      </div>
      <div className="header-btn">
      {/* <SpringModal props={props}/> */}
      </div>
    
      
    </div>
  );
}

export default Header;