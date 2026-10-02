import { useLocation, useNavigate } from "react-router-dom";

function Review() {
  const location = useLocation();
  const navigate = useNavigate();

  const userAnswers =
    location.state?.userAnswers || [];

  return (
    <div className="review-page">

      <div className="review-container">

        <h1>Review Your Answers</h1>

        <p className="review-subtitle">
          See which answers you got right and wrong.
        </p>

        {userAnswers.map((item, index) => (
          <div
            className={`review-card ${
              item.isCorrect
                ? "review-correct"
                : "review-wrong"
            }`}
            key={index}
          >

            <h2>
              Question {index + 1}
            </h2>

            <p className="review-question">
              {item.question}
            </p>

            <p>
              <strong>Your Answer:</strong>{" "}
              {item.selectedAnswer}
            </p>

            {item.isCorrect ? (
              <p className="correct-text">
                ✓ Correct
              </p>
            ) : (
              <>
                <p className="wrong-text">
                  ✗ Wrong
                </p>

                <p className="correct-answer">
                  <strong>Correct Answer:</strong>{" "}
                  {item.correctAnswer}
                </p>
              </>
            )}

          </div>
        ))}

        <button
          className="primary-button review-home-button"
          onClick={() => navigate("/")}
        >
          Return Home
        </button>

      </div>

    </div>
  );
}

export default Review;