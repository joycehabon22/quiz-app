function AnswerOption({ option, selected, onClick }) {
  return (
    <label
      className={`answer-option ${
        selected ? "selected" : ""
      }`}
    >
      <input
        type="radio"
        name="answer"
        checked={selected}
        onChange={onClick}
      />

      <span>{option}</span>
    </label>
  );
}

export default AnswerOption;