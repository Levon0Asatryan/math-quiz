import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sure from "./pages/Sure/Sure";
import { AnimatePresence } from "framer-motion";
import Question from "./pages/Question/Question";
import { useState, useEffect } from "react";
import { QuestionArray } from "./types";
import Final from "./pages/Final/Final";

function App() {
  const location = useLocation();

  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(score);
  }, [score]);

  const questions: QuestionArray = [
    {
      question: "23 + 12",
      answers: [
        { answer: "33", isItRight: false },
        { answer: "34", isItRight: false },
        { answer: "35", isItRight: true },
        { answer: "36", isItRight: false },
      ],
    },
    {
      question: "54 * 47",
      answers: [
        { answer: "2538", isItRight: true },
        { answer: "3429", isItRight: false },
        { answer: "2647", isItRight: false },
        { answer: "2983", isItRight: false },
      ],
    },
    {
      question: "Find derivatives of function y=(3x - 7)^10",
      answers: [
        { answer: "y=9(3x-7)^10", isItRight: false },
        { answer: "y=10(3x-7)^9", isItRight: false },
        { answer: "y=27(3x-7)^10", isItRight: false },
        { answer: "y=30(3x-7)^9", isItRight: true },
      ],
    },
    {
      question: "Find asyptotes of y=2x+arctg(x/2)",
      answers: [
        { answer: "y=2x±π/2", isItRight: true },
        { answer: "x=2", isItRight: false },
        { answer: "y=arcsin(x)", isItRight: false },
        { answer: "y=tan(x)+2π", isItRight: false },
      ],
    },
    {
      question: "Find limit limx→(0+)(x^2*lnx)",
      answers: [
        { answer: "∞", isItRight: false },
        { answer: "-∞", isItRight: false },
        { answer: "0", isItRight: true },
        { answer: "2", isItRight: false },
      ],
    },
    {
      question: "Find limit limx→∞(((n+2)! + (n+1)!)/(n+3)!)",
      answers: [
        { answer: "1", isItRight: false },
        { answer: "0", isItRight: true },
        { answer: "∞", isItRight: false },
        { answer: "3", isItRight: false },
      ],
    },
    {
      question: "Find projection of a on b×c a={-1,2,1} b={1,0,-1} c={2,-1,0}",
      answers: [
        { answer: "-2√6/3", isItRight: true },
        { answer: "2√6/3", isItRight: false },
        { answer: "-√6/3", isItRight: false },
        { answer: "√6/3", isItRight: false },
      ],
    },
    {
      question: "Find where y=3x^3 +9x^2 -27x +30 is decreasing",
      answers: [
        { answer: "(-∞;-1]", isItRight: false },
        { answer: "[3;+∞)", isItRight: false },
        { answer: "(-∞;+∞)", isItRight: false },
        { answer: "[-1;3]", isItRight: true },
      ],
    },
    {
      question:
        "Find distance of x/-3=(y+4)/1=(z+18)/-4 and x+7/3=(y-5)/-1=(z-9)/4",
      answers: [
        { answer: "22", isItRight: false },
        { answer: "23", isItRight: false },
        { answer: "24", isItRight: false },
        { answer: "25", isItRight: true },
      ],
    },
  ];

  return (
    <div className="main">
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="sure" element={<Sure />} />
          <Route
            path="question/:id"
            element={<Question questions={questions} setScore={setScore} />}
          />
          <Route
            path="final"
            element={<Final score={score} allPoints={questions.length} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
