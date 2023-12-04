import React from "react";
import "./Header.scss";
import logo from "../../photos/calculating.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="headerContainer">
      <div className="photo">
        <img src={logo} alt="logo" />
      </div>
      <div className="text">Math Quiz</div>
      <span></span>
    </div>
  );
};

export default Header;
