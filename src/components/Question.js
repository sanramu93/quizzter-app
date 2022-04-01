import { useState, useEffect } from "react";
import HTMLDecoderEncoder from "html-encoder-decoder";

export default function Question({
  question,
  setIsCorrect,
  setCurrentQuestion,
  index,
  showScore,
  questionDisabled,
}) {
  const [correct, setCorrect] = useState("");
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("");

  const shuffleOptions = (arr) => arr.sort(() => Math.random() - 0.5);

  const decodeHtml = (str) => HTMLDecoderEncoder.decode(str);

  const highlightSelected = (option) => {
    if (showScore && option === selected) {
      return option === correct
        ? "question__opt--correct"
        : "question__opt--incorrect";
    } else {
      return option === selected && "question__opt--selected";
    }
  };

  const highlightCorrect = (option) => {
    if (showScore) {
      return option === correct ? "question__opt--correct" : "";
    }
  };

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
        className={`btn question__opt ${highlightSelected(
          opt
        )} ${highlightCorrect(opt)} `}
        key={opt}
        onClick={handleSelect}
        value={opt}
        disabled={questionDisabled}
      >
        {decodeHtml(opt)}
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
