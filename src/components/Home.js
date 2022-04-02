export default function Home({ handleStartQuizSetup }) {
  return (
    <section className="home">
      <h1 className="home__title">Quizzter</h1>
      <p className="home__description">
        Unlocking knowledge at the speed of <strong>thought.</strong>
      </p>
      <button className="btn" onClick={handleStartQuizSetup}>
        Start Quiz
      </button>
    </section>
  );
}
{
}
