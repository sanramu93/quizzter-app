import { useState, useEffect } from "react";

import { fetchQuestions } from "./apis/opentdb";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionsAmount, setQuestionsAmount] = useState(5);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions(questionsAmount);
      setQuestions(data.results);
    };
    getQuestions();
  }, [showQuiz]);

  return (
    <main className="container">
      {!showQuiz ? (
        <Home handleStartQuiz={handleStartQuiz} />
      ) : (
        <Quiz questions={questions} setShowQuiz={setShowQuiz} />
      )}
    </main>
  );
}
