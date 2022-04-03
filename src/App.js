import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { fetchQuestions, fetchCategories } from "./apis/opentdb";
import Home from "./components/Home";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [questionsAmount, setQuestionsAmount] = useState(5);
  const [questions, setQuestions] = useState([]);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handlePlayAgain = () => {
    setShowQuiz(false);
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    if (name === "category") setCategory(value);
    if (name === "difficulty") setDifficulty(value);
    if (name === "type") setType(value);
  };

  const handleAmountChange = (e) => {
    let { min, max, value } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setQuestionsAmount(value);
  };

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setAllCategories(data.trivia_categories);
    };
    getCategories();
  }, []);

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

    return () => setQuestions([]);
  }, [showQuiz]);

  return (
    <Router>
      <main className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/setup">
            <QuizSetup
              allCategories={allCategories}
              questionsAmount={questionsAmount}
              handleStartQuiz={handleStartQuiz}
              handleSelect={handleSelect}
              handleAmountChange={handleAmountChange}
              setQuestionsAmount={setQuestionsAmount}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              questions={questions}
              handlePlayAgain={handlePlayAgain}
              setShowQuiz={setShowQuiz}
            />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
