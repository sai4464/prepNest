import React from 'react';
import { Code2, Brain, Timer, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Practice = () => {
  const navigate = useNavigate();

  const practiceTypes = [
    {
      title: 'Technical MCQs',
      description: 'Test your knowledge with role-specific multiple choice questions',
      categories: [
        { name: 'Data Structures & Algorithms', questions: 500 },
        { name: 'System Design', questions: 300 },
        { name: 'Frontend Development', questions: 400 }
      ],
      icon: Brain,
      color: 'from-primary-start to-primary-end',
      path: '/practice/mcq/software-development'
    },
    {
      title: 'Coding Challenges',
      description: 'Solve real-world programming problems and improve your skills',
      categories: [
        { name: 'Easy (100+)', platform: 'HackerRank' },
        { name: 'Medium (200+)', platform: 'LeetCode' },
        { name: 'Hard (50+)', platform: 'CodeSignal' }
      ],
      icon: Code2,
      color: 'from-secondary-start to-secondary-end',
      path: '/practice/coding-challenges/easy'
    },
    {
      title: 'Mock Interviews',
      description: 'Practice with AI-powered mock interviews tailored to your role',
      categories: [
        { name: 'Technical Rounds', duration: '45 mins' },
        { name: 'System Design', duration: '60 mins' },
        { name: 'Behavioral', duration: '30 mins' }
      ],
      icon: Timer,
      color: 'from-primary-start to-secondary-end',
      path: '/practice/mock-interview/software-developer'
    }
  ];

  return (
    <div className="pt-20 pb-12 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">
            Practice & Perfect
          </h1>
          <p className="text-xl text-dark">
            Choose from our comprehensive set of practice resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${type.color}`} />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold ml-3 text-dark">{type.title}</h3>
                  </div>
                  <p className="text-dark mb-6">{type.description}</p>
                  <div className="space-y-3">
                    {type.categories.map((category, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-dark">{category.name}</span>
                        <span className="text-primary font-medium">
                          {category.questions || category.platform || category.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(type.path)}
                    className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    Start Practice
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-start to-secondary-end rounded-xl p-8 text-white text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Track Your Progress</h2>
          <p className="mb-6">Complete challenges, earn points, and track your improvement over time</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;