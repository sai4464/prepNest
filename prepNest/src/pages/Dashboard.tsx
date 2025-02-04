import React from 'react';
import { Trophy, Target, Clock, BookOpen, ArrowUp, BarChart2 } from 'lucide-react';

const Dashboard = () => {
  // Mock user data (replace with actual user data later)
  const userData = {
    name: 'John Doe',
    role: 'Software Developer',
    progress: {
      mcqCompleted: 45,
      codingChallengesCompleted: 12,
      mockInterviewsCompleted: 3
    },
    recentActivity: [
      { type: 'MCQ', score: '8/10', topic: 'Data Structures', date: '2024-03-15' },
      { type: 'Coding', name: 'Two Sum', difficulty: 'Easy', date: '2024-03-14' },
      { type: 'Interview', role: 'Frontend Developer', score: '85%', date: '2024-03-13' }
    ],
    weeklyGoals: {
      mcqs: { target: 50, completed: 45 },
      coding: { target: 15, completed: 12 },
      interviews: { target: 5, completed: 3 }
    }
  };

  const stats = [
    {
      icon: Trophy,
      label: 'Total Score',
      value: '850',
      change: '+12%',
      color: 'text-primary'
    },
    {
      icon: Target,
      label: 'Accuracy',
      value: '78%',
      change: '+5%',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      label: 'Practice Hours',
      value: '24',
      change: '+3h',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="pt-20 pb-12 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
          <p className="text-dark">Track your progress and achieve your goals</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-dark text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-3xl font-bold text-dark">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Progress and Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Weekly Goals */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-dark mb-6">Weekly Goals</h2>
            <div className="space-y-6">
              {Object.entries(userData.weeklyGoals).map(([key, goal]) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="text-dark capitalize">{key}</span>
                    <span className="text-dark">{goal.completed}/{goal.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2"
                      style={{ width: `${(goal.completed / goal.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-dark mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {userData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-dark font-medium">
                      {activity.type === 'MCQ' && `Completed MCQ: ${activity.topic}`}
                      {activity.type === 'Coding' && `Solved: ${activity.name}`}
                      {activity.type === 'Interview' && `Mock Interview: ${activity.role}`}
                    </p>
                    <p className="text-sm text-gray-500">
                      Score: {activity.score || activity.difficulty}
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">{activity.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;