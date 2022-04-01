import { useState, useEffect } from "react";
import Question from "./Question";

export default function Quiz({ questions }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleCheckAnswers = () => {
    setScore(correctAnswers.reduce((a, b) => a + b));
  };

  const renderQuestions = () => {
    return questions.map((q, i) => (
      <Question
        question={q}
        index={i}
        setCurrentQuestion={setCurrentQuestion}
        setIsCorrect={setIsCorrect}
        key={q.question}
      />
    ));
  };

  useEffect(() => {
    setCorrectAnswers(Array(questions.length).fill(0));
  }, [questions]);

  useEffect(() => {
    setCorrectAnswers((prevAnswers) => {
      prevAnswers[currentQuestion] = isCorrect ? 1 : 0;
      return prevAnswers;
    });
  }, [isCorrect, currentQuestion]);

  return (
    <section className="quiz">
      {renderQuestions()}
      <div className="btn-wrapper">
        <button className="btn--check-answers" onClick={handleCheckAnswers}>
          CheckAnswers
        </button>
      </div>
    </section>
  );
}
