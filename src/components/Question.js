import { useState, useEffect } from "react";
import decodeHtml from "decode-html";

export default function Question({
  question,
  setIsCorrect,
  setCurrentQuestion,
  index,
}) {
  const [correct, setCorrect] = useState("");
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("");

  const shuffleOptions = (arr) => arr.sort(() => Math.random() - 0.5);

  const handleSelect = (e) => {
    setCurrentQuestion(index);
    const { value } = e.target;
    setSelected(value);
    value === correct ? setIsCorrect(true) : setIsCorrect(false);
  };

  useEffect(() => {
    const { correct_answer, incorrect_answers } = question;
    const allOptions = [correct_answer, ...incorrect_answers];
    setCorrect(correct_answer);
    setOptions(shuffleOptions(allOptions));
  }, [question]);

  const renderOptions = () => {
    return options.map((opt) => (
      <button
        className={`question__opt ${
          opt === selected && "question__opt--selected"
        }`}
        key={opt}
        onClick={handleSelect}
        value={opt}
      >
        {opt}
      </button>
    ));
  };
  return (
    <div className="question">
      <h2 className="question__title">{decodeHtml(question.question)}</h2>
      <div className="question__options">{renderOptions()}</div>
    </div>
  );
}
