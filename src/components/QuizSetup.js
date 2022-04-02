export default function QuizSetup({
  allCategories,
  questionsAmount,
  handleCategorySelect,
  handleDifficultySelect,
  handleTypeSelect,
  handleAmountChange,
  handleStartQuiz,
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
            onChange={handleCategorySelect}
            name="categories"
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
            onChange={handleDifficultySelect}
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
          <h2 className="quiz-setup__title">Difficulty</h2>
          <select
            onChange={handleTypeSelect}
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
            Amount of Questions <br /> (5-50)
          </h2>
          <div className="amount__wrapper">
            <input
              className="amount__input"
              type="number"
              min="5"
              max="50"
              value={questionsAmount}
              onInput={handleAmountChange}
            />
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <button onClick={handleStartQuiz} className="btn">
          Start
        </button>
      </div>
    </section>
  );
}
