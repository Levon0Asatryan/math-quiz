import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Question.scss";
import leftArrow from "../../photos/left-arrow.png";
import rightArrow from "../../photos/right-arrow.png";
import { QuestionArray, QuestionType } from "../../types";

type Props = {
  questions: QuestionArray;
  setScore: Function;
  isPagesClicked: Boolean[];
  setIsPagesClicked: Function;
};

const Question = ({
  questions,
  setScore,
  isPagesClicked,
  setIsPagesClicked,
}: Props) => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState("-100%");
  const params = useParams();
  const id = params.id ? +params.id : 0;
  const [clicked, setClicked] = useState(isPagesClicked[id]);
  let question: QuestionType = {
    question: "",
    answers: [{ answer: "", isItRight: false }],
  };

  if (params.id && params) {
    question = questions[+params.id];
  } else {
    navigate("/");
  }

  const goBack = () => {
    setDirection("100%");
    if (id === 0) {
      navigate("/sure");
    } else {
      navigate(`/question/${id - 1}`);
    }
  };

  const goNext = () => {
    if (clicked) {
      setDirection("-100%");
      if (id === questions.length - 1) {
        navigate("/final");
      } else {
        navigate(`/question/${id + 1}`);
      }
    }
  };

  const buttonClick = (isRight: boolean) => {
    if (!clicked) {
      setClicked(true);
      const newClickedArray = isPagesClicked;
      newClickedArray[id] = true;
      setIsPagesClicked(newClickedArray);

      if (isRight) setScore((prev: number) => prev + 1);
    }
  };

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
          <button onClick={goBack} className="back">
            <img src={leftArrow} alt="leftArrow" />
            Back
          </button>
          <button onClick={goNext} className="back">
            Next
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </div>
        <div className="questionContainer">
          <h1 className="question">{question.question}</h1>
          <div className="buttonsGrid">
            {question.answers.map((answer) => (
              <button
                className={`button ${
                  clicked
                    ? answer.isItRight
                      ? "rightAnswer"
                      : "falseAnswer"
                    : ""
                }`}
                onClick={() => buttonClick(answer.isItRight)}
              >
                {answer.answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Question;
