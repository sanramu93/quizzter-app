export default function Home({ handleStartQuiz }) {
  return (
    <section className="home">
      <h1 className="home__title">Quizzter</h1>
      <p className="home__description">Some description if needed</p>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </section>
  );
}
{
}
