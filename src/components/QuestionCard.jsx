import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer
}) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      <div className="answers">
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            selected={selectedAnswer === option}
            onClick={() => onSelectAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;