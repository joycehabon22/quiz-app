import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;

  const totalQuestions =
    location.state?.totalQuestions || 10;

  const userAnswers =
    location.state?.userAnswers || [];

  const incorrectAnswers = totalQuestions - score;

  const percentage = Math.round(
    (score / totalQuestions) * 100
  );

  const handleRetake = () => {
    navigate("/quiz");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleReview = () => {
    navigate("/review", {
      state: {
        userAnswers
      }
    });
  };

  return (
    <div className="result-page">

      <ResultCard
        totalQuestions={totalQuestions}
        correctAnswers={score}
        incorrectAnswers={incorrectAnswers}
        score={`${score} / ${totalQuestions}`}
        percentage={percentage}
      />

      <div className="result-buttons">

        <button
          className="primary-button"
          onClick={handleReview}
        >
          Review Answers
        </button>

        <button
          className="secondary-button"
          onClick={handleRetake}
        >
          Retake Quiz
        </button>

        <button
          className="secondary-button"
          onClick={handleHome}
        >
          Return Home
        </button>

      </div>

    </div>
  );
}

export default Result;