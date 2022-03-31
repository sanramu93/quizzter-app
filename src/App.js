import { useState } from "react";

import Home from "./components/Home";
import Quiz from "./components/Quiz";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <main className="container">
      {!showQuiz ? <Home handleStartQuiz={handleStartQuiz} /> : <Quiz />}
    </main>
  );
}
