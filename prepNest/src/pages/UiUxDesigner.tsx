import React from 'react';
import { Palette, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UiUxDesigner = () => {
  const navigate = useNavigate();

  const questions = [
    {
      category: "Design Process",
      items: [
        "Walk me through your design process for a recent project",
        "How do you handle stakeholder feedback that conflicts with user needs?",
        "What research methods do you use before starting a design?",
        "How do you prioritize features in your design process?"
      ]
    },
    {
      category: "User Research",
      items: [
        "How do you create and use user personas?",
        "What methods do you use to validate your designs?",
        "How do you conduct usability testing?",
        "Explain how you incorporate user feedback into your designs"
      ]
    },
    {
      category: "Technical Skills",
      items: [
        "How do you ensure your designs are accessible?",
        "What's your approach to responsive design?",
        "How do you handle design system maintenance?",
        "Explain your experience with design handoff to developers"
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
          <Palette className="h-12 w-12 text-indigo-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">UI/UX Designer Interview Prep</h1>
        </div>

        <p className="text-xl text-gray-600 mb-12">
          Prepare for your UI/UX design interviews with our comprehensive question set covering process, research, and technical skills.
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

export default UiUxDesigner;