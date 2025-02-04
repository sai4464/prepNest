import React, { useState } from 'react';
import { ArrowLeft, Mic, Video, MessageSquare } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMockInterviews } from '../hooks/useQuestions';

const MockInterview = () => {
  const navigate = useNavigate();
  const { role = 'software-developer' } = useParams();
  const { questions, loading, error } = useMockInterviews(role);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

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

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 mb-6 hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Mock Interview Session</h1>
            <div className="flex space-x-4">
              <button 
                className={`p-2 rounded-full ${isRecording ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setIsRecording(!isRecording)}
              >
                <Video className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-2">Question {currentQuestion + 1} of {questions.length}</div>
            <h2 className="text-xl font-semibold mb-4">{currentQuestionData.question}</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Tips:</h3>
              <ul className="list-disc list-inside space-y-1">
                {currentQuestionData.tips.map((tip, index) => (
                  <li key={index} className="text-gray-600">{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-gray-400" />
              <textarea
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
                placeholder="Type your answer here..."
              />
            </div>

            <div className="flex justify-between">
              <button
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                className="px-4 py-2 text-indigo-600 disabled:text-gray-400"
              >
                Previous Question
              </button>
              <button
                onClick={() => {
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(prev => prev + 1);
                  } else {
                    navigate('/practice/feedback');
                  }
                }}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Interview'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;