import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMCQQuestions } from '../hooks/useQuestions';

const MCQPractice = () => {
  const navigate = useNavigate();
  const { category = 'software-development' } = useParams();
  const { questions, loading, error } = useMCQQuestions(category);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  if (loading) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQuestionData?.correctAnswer;

  const handleAnswerSelect = (answer: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      if (answer === currentQuestionData.correctAnswer) {
        setScore(prev => prev + 1);
      }
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Show final score or navigate to results
      navigate('/practice/mcq-results', { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 mb-6 hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</div>
              <div className="text-sm font-medium text-indigo-600">Score: {score}/{questions.length}</div>
            </div>
            <h2 className="text-xl font-semibold">{currentQuestionData.question}</h2>
          </div>

          <div className="space-y-4 mb-8">
            {currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  selectedAnswer === option
                    ? isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : selectedAnswer === null
                    ? 'border-gray-200 hover:border-indigo-500'
                    : option === currentQuestionData.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200'
                }`}
              >
                {option}
                {selectedAnswer === option && (
                  isCorrect
                    ? <CheckCircle className="h-5 w-5 text-green-500 inline float-right" />
                    : <XCircle className="h-5 w-5 text-red-500 inline float-right" />
                )}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Explanation:</h3>
              <p className="text-gray-600">{currentQuestionData.explanation}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQPractice;