export type QuestionType = {
  question: string;
  answers: { answer: string; isItRight: boolean }[];
};

export type QuestionArray = QuestionType[];
