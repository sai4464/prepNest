import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Filter, Plus } from 'lucide-react';

const InterviewExperiences = () => {
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [filter, setFilter] = useState('all');

  // Mock interview experiences
  const experiences = [
    {
      id: 1,
      company: 'Google',
      role: 'Software Developer',
      date: '2024-03-10',
      difficulty: 'hard',
      rounds: [
        {
          type: 'Technical',
          questions: [
            'Implement a LRU Cache',
            'Design a distributed key-value store',
            'System design: Design YouTube'
          ],
          tips: 'Focus on scalability and edge cases'
        },
        {
          type: 'Behavioral',
          questions: [
            'Tell me about a challenging project',
            'How do you handle conflicts in team?'
          ],
          tips: 'Use STAR method for behavioral questions'
        }
      ],
      outcome: 'accepted',
      likes: 245,
      comments: 18
    },
    {
      id: 2,
      company: 'Microsoft',
      role: 'Frontend Developer',
      date: '2024-03-08',
      difficulty: 'medium',
      rounds: [
        {
          type: 'Coding',
          questions: [
            'Implement debounce function',
            'Create a virtual DOM from scratch'
          ],
          tips: 'Practice JavaScript fundamentals'
        }
      ],
      outcome: 'pending',
      likes: 156,
      comments: 12
    }
  ];

  const AddExperienceForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Share Your Interview Experience</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Interview Rounds</label>
            <textarea className="w-full p-2 border rounded-lg h-32" placeholder="Describe the interview rounds..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tips for Others</label>
            <textarea className="w-full p-2 border rounded-lg h-24" placeholder="Share your advice..." />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setShowAddExperience(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Share Experience
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Interview Experiences</h1>
          <button
            onClick={() => setShowAddExperience(true)}
            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            <Plus className="h-5 w-5 mr-2" />
            Share Experience
          </button>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="all">All Companies</option>
            <option value="google">Google</option>
            <option value="microsoft">Microsoft</option>
            <option value="amazon">Amazon</option>
          </select>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{exp.company}</h2>
                  <p className="text-gray-600">{exp.role}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  exp.outcome === 'accepted' ? 'bg-green-100 text-green-800' :
                  exp.outcome === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {exp.outcome.charAt(0).toUpperCase() + exp.outcome.slice(1)}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {exp.rounds.map((round, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{round.type} Round</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {round.questions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                    {round.tips && (
                      <p className="mt-2 text-sm text-primary font-medium">
                        Tip: {round.tips}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center hover:text-primary">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {exp.likes}
                  </button>
                  <button className="flex items-center hover:text-primary">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {exp.comments}
                  </button>
                  <button className="flex items-center hover:text-primary">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
                <span>{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddExperience && <AddExperienceForm />}
    </div>
  );
};

export default InterviewExperiences;