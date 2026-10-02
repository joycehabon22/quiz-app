function QuizHeader({ currentQuestion, totalQuestions }) {
  return (
    <div className="quiz-header">
      <h1>Quiz App</h1>
      <p>
        Question {currentQuestion} of {totalQuestions}
      </p>
    </div>
  );
}

export default QuizHeader;