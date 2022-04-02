export default function QuizSetup({
  categories,
  questionsAmount,
  handleAmountChange,
}) {
  const renderCategories = () => {
    return categories.map((cat) => (
      <button className="category__tag" key={cat.name}>
        {cat.name}
      </button>
    ));
  };

  return (
    <section className="quiz-setup">
      <div className="category">
        <h2 className="quiz-setup__title">Category</h2>
        <div className="category__tags">{renderCategories()}</div>
      </div>
      <div className="amount">
        <h2 className="quiz-setup__title">Amount of Questions (5-50)</h2>
        <div className="amount__wrapper">
          <input
            className="amount__input"
            type="number"
            min="5"
            max="50"
            value={questionsAmount}
            onChange={handleAmountChange}
          />
        </div>
      </div>
    </section>
  );
}
