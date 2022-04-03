import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h1 className="home__title">Quizzter</h1>
      <p className="home__description">
        Unlocking knowledge at the speed of <strong>thought.</strong>
      </p>
      <Link to="/setup" className="btn">
        Start Quiz
      </Link>
    </section>
  );
}
{
}
