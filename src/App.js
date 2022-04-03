import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchQuestions, fetchCategories } from "./apis/opentdb";
import Home from "./components/Home";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";

export default function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [questionsAmount, setQuestionsAmount] = useState(5);
  const [questions, setQuestions] = useState([]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    if (name === "category") setCategory(e.target.value);
    if (name === "difficulty") setDifficulty(e.target.value);
    if (name === "type") setType(e.target.value);
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
  }, [category, questionsAmount, difficulty, type]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setAllCategories(data.trivia_categories);
    };
    getCategories();
  }, []);

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
              handleSelect={handleSelect}
              handleAmountChange={handleAmountChange}
            />
          </Route>
          <Route path="/quiz">
            <Quiz questions={questions} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
