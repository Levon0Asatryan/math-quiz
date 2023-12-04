import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sure from "./pages/Sure/Sure";
import { AnimatePresence } from "framer-motion";
import Question from "./pages/Question/Question";

export type QuestionArray = {
  question: string;
  answers: { answer: string; isItRight: boolean }[];
}[];

function App() {
  const location = useLocation();

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
        { answer: "y=9(3x - 7)^10", isItRight: false },
        { answer: "y=10(3x - 7)^9", isItRight: false },
        { answer: "y=27(3x - 7)^10", isItRight: false },
        { answer: "y=30(3x - 7)^9", isItRight: true },
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
            element={<Question questions={questions} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
