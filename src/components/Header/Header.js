import useAppAuthState from "../../useAppState";

import React from "react";
import "./Header.css";

import Button from "../UI/Button/Button";

const Header = props => {
  const { state, actions } = useAppAuthState();

  console.log(state);

  return (
    <div className="header">
      <div className="header__logo-box">
        <img
          src={require("../../images/logo.png")}
          alt="logo ironhack"
          className="header__logo"
        />
      </div>
      <div className="header-btn">
        {state.user ? (
          <Button type="button" onClick={() => actions.logout()}>
            LOGOUT
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
