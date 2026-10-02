import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";

function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const question = questions[currentQuestion];

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      return;
    }

    const isCorrect = selectedAnswer === question.answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    const updatedAnswers = [
      ...userAnswers,
      {
        question: question.question,
        selectedAnswer: selectedAnswer,
        correctAnswer: question.answer,
        isCorrect: isCorrect
      }
    ];

    setUserAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      navigate("/result", {
        state: {
          score: isCorrect ? score + 1 : score,
          totalQuestions: questions.length,
          userAnswers: updatedAnswers
        }
      });

      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">

        <QuizHeader
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />

        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
        />

        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selectedAnswer}
        >
          {currentQuestion === questions.length - 1
            ? "See Results"
            : "Next Question"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;