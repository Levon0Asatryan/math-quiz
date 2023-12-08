import React from "react";
import "./Header.scss";
import logo from "../../photos/calculating.png";
import { useNavigate } from "react-router-dom";

type Props = {
  restart: Function;
};

const Header = ({ restart }: Props) => {
  const navigate = useNavigate();

  const restartClick = () => {
    restart();
    navigate("/");
  };

  return (
    <div className="headerContainer">
      <div className="photo">
        <img src={logo} alt="logo" onClick={restartClick} />
      </div>
      <div className="text" onClick={restartClick}>
        Math Quiz
      </div>
      <span></span>
    </div>
  );
};

export default Header;
