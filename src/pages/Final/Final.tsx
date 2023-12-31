import React from "react";
import "./Final.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  score: number;
  allPoints: number;
  restart: Function;
};

const Final = ({ score, allPoints, restart }: Props) => {
  const navigate = useNavigate();
  let text = "";

  if (score <= allPoints / 3) {
    text = "You need to improve your math skills";
  } else if (score < (allPoints * 2) / 3) {
    text = "Not bad";
  } else if (score < allPoints) {
    text = "You are good at math";
  } else if (score === allPoints) {
    text = "WONDERFUL! EXCELLLENT";
  }

  const restartClick = () => {
    restart();
    navigate("/");
  };

  return (
    <div className="homeContainer diraction">
      <h1 className="score">{`${score}/${allPoints}`}</h1>
      <h1>{text}</h1>
      <button className="button" onClick={restartClick}>
        Restart
      </button>
    </div>
  );
};

export default Final;
