function ResultCard({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  score,
  percentage
}) {
  return (
    <div className="result-card">
      <h1>Quiz Complete!</h1>

      <div className="result-item">
        <span>Total Questions</span>
        <strong>{totalQuestions}</strong>
      </div>

      <div className="result-item">
        <span>Correct Answers</span>
        <strong>{correctAnswers}</strong>
      </div>

      <div className="result-item">
        <span>Incorrect Answers</span>
        <strong>{incorrectAnswers}</strong>
      </div>

      <div className="result-item">
        <span>Final Score</span>
        <strong>{score}</strong>
      </div>

      <div className="result-item">
        <span>Percentage</span>
        <strong>{percentage}%</strong>
      </div>
    </div>
  );
}

export default ResultCard;