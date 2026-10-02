import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Quiz App</h1>

        <p>
          Test your knowledge with our 10-question quiz!
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;