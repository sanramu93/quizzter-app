import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Question from "./Question";
import Spinner from "./Spinner";

export default function Quiz({ questions, setShowQuiz }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questionDisabled, setQuestionDisabled] = useState(false);

  const handleCheckAnswers = () => {
    setScore(correctAnswers.reduce((a, b) => a + b));
    setShowScore(true);
    setQuestionDisabled(true);

    // Scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handlePlayAgain = () => {
    setShowScore(false);
    setCorrectAnswers(Array(questions.length).fill(0));
    setQuestionDisabled(false);
    setShowQuiz(false);
    window.scrollTo(0, 0);
  };

  const renderQuestions = () => {
    if (questions.length < 1) return <Spinner />;
    else {
      return questions.map((q, i) => (
        <Question
          question={q}
          index={i}
          setCurrentQuestion={setCurrentQuestion}
          setIsCorrect={setIsCorrect}
          showScore={showScore}
          questionDisabled={questionDisabled}
          key={q.question}
        />
      ));
    }
  };

  const renderBottom = () => {
    if (questions.length < 1) return;
    else {
      return !showScore ? (
        <button
          className="btn btn--check-answers "
          onClick={handleCheckAnswers}
        >
          Check Answers
        </button>
      ) : (
        <>
          <div className="quiz__score">
            <h2 className="score__message">
              You scored <span className="score__num">{score}</span>
              <span className="score__num-slash">/</span>
              <span className="score__num">{questions.length}</span> correct
              answers
            </h2>
          </div>
          <Link
            to="/"
            className="btn btn--play-again"
            onClick={handlePlayAgain}
          >
            Play Again
          </Link>
        </>
      );
    }
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
      <div className="quiz__bottom">{renderBottom()}</div>
    </section>
  );
}
