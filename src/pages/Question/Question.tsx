import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Question.scss";
import { QuestionArray } from "../../App";
import { ParsedUrlQuery } from "querystring";

type Props = {
  questions: QuestionArray;
};

const Question = ({ questions }: Props) => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState("-100%");
  const params = useParams();
  const id = params.id ? +params.id : 0;
  let question;
  if (!params) {
    navigate("/");
  }
  if (params.id && params) question = questions[+params.id];

  return (
    <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: direction, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="homeContainer">
        <div className="buttonContainer">
          <button
            onClick={() => {
              setDirection("100%");
              navigate(`/question/${id - 1}`);
            }}
            className="back"
          >
            Back
          </button>
          <button
            onClick={() => {
              setDirection("-100%");
              navigate(`/question/${id + 1}`);
            }}
            className="back"
          >
            Next
          </button>
        </div>
        <div>
          <h1>{question?.question}</h1>
          <div className="buttonsGrid">
            <button className="button">{question?.answers[0].answer}</button>
            <button className="button">{question?.answers[1].answer}</button>
            <button className="button">{question?.answers[2].answer}</button>
            <button className="button">{question?.answers[3].answer}</button>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Question;
