import React from 'react';
import { Code2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SoftwareDeveloper = () => {
  const navigate = useNavigate();

  const questions = [
    {
      category: "Data Structures & Algorithms",
      items: [
        "Explain the difference between Stack and Queue data structures",
        "How would you implement a binary search algorithm?",
        "What is the time complexity of quicksort in best, average, and worst cases?",
        "Explain how you would detect a cycle in a linked list"
      ]
    },
    {
      category: "System Design",
      items: [
        "How would you design a URL shortening service?",
        "Explain the architecture of a real-time chat application",
        "How would you design Instagram's backend?",
        "Describe how you would implement a rate limiter"
      ]
    },
    {
      category: "JavaScript/React",
      items: [
        "What is the difference between props and state in React?",
        "Explain closure in JavaScript with an example",
        "How does the virtual DOM work in React?",
        "What are React hooks and why were they introduced?"
      ]
    }
  ];

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 mb-6 hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="flex items-center mb-8">
          <Code2 className="h-12 w-12 text-indigo-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">Software Developer Interview Prep</h1>
        </div>

        <p className="text-xl text-gray-600 mb-12">
          Master your software development interviews with our curated list of questions and topics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {questions.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.category}</h2>
              <ul className="space-y-4">
                {section.items.map((question, qIndex) => (
                  <li key={qIndex} className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                      {qIndex + 1}
                    </span>
                    <p className="text-gray-700">{question}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/practice/mock-interviews')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Start Mock Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDeveloper;