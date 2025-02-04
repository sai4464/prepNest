import React from 'react';
import { Terminal, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PythonDeveloper = () => {
  const navigate = useNavigate();

  const questions = [
    {
      category: "Python Fundamentals",
      items: [
        "What are Python decorators and how do they work?",
        "Explain the difference between lists and tuples",
        "How does memory management work in Python?",
        "What are context managers and when would you use them?"
      ]
    },
    {
      category: "Web Frameworks",
      items: [
        "Compare Django and Flask - when would you use each?",
        "Explain Django's MTV architecture",
        "How do you handle authentication in Django?",
        "What are Django middleware classes?"
      ]
    },
    {
      category: "Data Processing",
      items: [
        "How do you handle large datasets in Python?",
        "Explain the key features of NumPy and Pandas",
        "How would you optimize a slow Python script?",
        "Describe your experience with Python async/await"
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
          <Terminal className="h-12 w-12 text-indigo-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">Python Developer Interview Prep</h1>
        </div>

        <p className="text-xl text-gray-600 mb-12">
          Excel in your Python developer interviews with our curated questions covering fundamentals, frameworks, and best practices.
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

export default PythonDeveloper;