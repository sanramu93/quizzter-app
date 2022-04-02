import { useState, useEffect } from "react";

import { fetchQuestions, fetchCategories } from "./apis/opentdb";
import Home from "./components/Home";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";

export default function App() {
  const [showQuizSetup, setShowQuizSetup] = useState(true);
  const [showQuiz, setShowQuiz] = useState(true);
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionsAmount, setQuestionsAmount] = useState(5);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleAmountChange = (e) => {
    console.log(e.target.value);
    setQuestionsAmount(e.target.value);
  };

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions(questionsAmount);
      setQuestions(data.results);
    };
    getQuestions();
  }, [showQuiz]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data.trivia_categories);
    };
    getCategories();
  }, [showQuizSetup]);

  return (
    <main className="container">
      {/* {!showQuiz ? (
        <Home handleStartQuiz={handleStartQuiz} />
      ) : (
        <Quiz questions={questions} setShowQuiz={setShowQuiz} />
      )} */}
      <QuizSetup
        categories={categories}
        questionsAmount={questionsAmount}
        handleAmountChange={handleAmountChange}
      />
    </main>
  );
}
