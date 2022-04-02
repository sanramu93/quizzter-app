import { useState, useEffect } from "react";

import { fetchQuestions, fetchCategories } from "./apis/opentdb";
import Home from "./components/Home";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";

export default function App() {
  const [showQuizSetup, setShowQuizSetup] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionsAmount, setQuestionsAmount] = useState(5);

  const handleStartQuizSetup = () => {
    setShowQuizSetup(true);
  };

  const handleStartQuiz = () => {
    setShowQuizSetup(false);
    setShowQuiz(true);
  };

  const handleCategorySelect = (e) => {
    setCategory(e.target.value);
  };

  const handleDifficultySelect = (e) => {
    setDifficulty(e.target.value);
  };

  const handleTypeSelect = (e) => {
    setType(e.target.value);
  };

  const handleAmountChange = (e) => {
    setQuestionsAmount(e.target.value);
  };

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions(
        questionsAmount,
        category,
        difficulty,
        type
      );
      setQuestions(data.results);
    };
    getQuestions();
  }, [showQuiz, category, questionsAmount, difficulty, type]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setAllCategories(data.trivia_categories);
    };
    getCategories();
  }, [showQuizSetup]);

  return (
    <main className="container">
      {/* {!showQuizSetup ? (
        <Home handleStartQuizSetup={handleStartQuizSetup} />
      ) : (
        <QuizSetup
          allCategories={allCategories}
          questionsAmount={questionsAmount}
          handleCategorySelect={handleCategorySelect}
          handleDifficultySelect={handleDifficultySelect}
          handleTypeSelect={handleTypeSelect}
          handleAmountChange={handleAmountChange}
          handleStartQuiz={handleStartQuiz}
        />
      )} */}
      <Home handleStartQuizSetup={handleStartQuizSetup} />

      <QuizSetup
        allCategories={allCategories}
        questionsAmount={questionsAmount}
        handleCategorySelect={handleCategorySelect}
        handleDifficultySelect={handleDifficultySelect}
        handleTypeSelect={handleTypeSelect}
        handleAmountChange={handleAmountChange}
        handleStartQuiz={handleStartQuiz}
      />
      <Quiz questions={questions} setShowQuiz={setShowQuiz} />
    </main>
  );
}
