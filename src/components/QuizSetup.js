import { Link } from "react-router-dom";

export default function QuizSetup({
  allCategories,
  questionsAmount,
  handleSelect,
  handleAmountChange,
  handleStartQuiz,
  setQuestionsAmount,
}) {
  const renderCategories = () => {
    return allCategories.map((cat) => (
      <option className="quiz-setup__select__opt" key={cat.name} value={cat.id}>
        {cat.name}
      </option>
    ));
  };

  return (
    <section className="quiz-setup">
      <div className="quiz-setup__inputs">
        {/* Category */}
        <div className="category">
          <h2 className="quiz-setup__title">Category</h2>
          <select
            onChange={handleSelect}
            name="category"
            className="quiz-setup__select"
          >
            <option className="quiz-setup__select__opt" value="">
              Any Category
            </option>
            {renderCategories()}
          </select>
        </div>

        {/* Difficulty */}
        <div className="difficulty">
          <h2 className="quiz-setup__title">Difficulty</h2>
          <select
            onChange={handleSelect}
            name="difficulty"
            className="quiz-setup__select"
          >
            <option className="quiz-setup__select__opt" value="">
              Any Difficulty
            </option>
            <option className="quiz-setup__select__opt" value="easy">
              Easy
            </option>
            <option className="quiz-setup__select__opt" value="medium">
              Medium
            </option>
            <option className="quiz-setup__select__opt" value="hard">
              Hard
            </option>
          </select>
        </div>

        {/* Type */}
        <div className="type">
          <h2 className="quiz-setup__title">Type</h2>
          <select
            onChange={handleSelect}
            name="type"
            className="quiz-setup__select"
          >
            <option className="quiz-setup__select__opt" value="">
              Any Type
            </option>
            <option className="quiz-setup__select__opt" value="multiple">
              Multiple Choice
            </option>
            <option className="quiz-setup__select__opt" value="boolean">
              True / False
            </option>
          </select>
        </div>
        <div className="amount">
          <h2 className="quiz-setup__title">
            Amount of Questions <br /> (1-50)
          </h2>
          <div className="amount__wrapper">
            <input
              className="amount__input"
              type="number"
              min="1"
              max="50"
              value={questionsAmount}
              onFocus={() => setQuestionsAmount("")}
              onChange={handleAmountChange}
            />
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <Link to="/quiz" className="btn" onClick={handleStartQuiz}>
          Start
        </Link>
      </div>
    </section>
  );
}
