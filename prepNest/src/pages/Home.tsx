import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Palette, LineChart } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to PrepNest</h1>
          <p className="text-xl mb-8">Your comprehensive interview preparation platform. Master technical interviews with personalized practice and expert guidance.</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/roles')}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Explore Roles
            </button>
            <button
              onClick={() => navigate('/practice')}
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Start Practice
            </button>
          </div>
        </div>
      </div>

      {/* Role Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Interview Tracks</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <Code2 className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
            <p className="text-gray-600 mb-4">Master DSA, system design, and coding interviews with our comprehensive practice sets.</p>
            <button
              onClick={() => navigate('/roles/software-developer')}
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Learn More →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <Palette className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
            <p className="text-gray-600 mb-4">Practice portfolio reviews, design challenges, and user research scenarios.</p>
            <button
              onClick={() => navigate('/roles/ui-ux-designer')}
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Learn More →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <LineChart className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Analyst</h3>
            <p className="text-gray-600 mb-4">Excel in SQL, data visualization, and analytical thinking interviews.</p>
            <button
              onClick={() => navigate('/roles/data-analyst')}
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Simulate Real Interviews</h3>
              <p className="text-gray-600">Get AI-based feedback on your performance and improve your interview skills.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Solve Problems</h3>
              <p className="text-gray-600">Test your skills and get ranked with our curated problem sets.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Timed Quizzes</h3>
              <p className="text-gray-600">Improve your knowledge with our comprehensive quiz system.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About PrepNest</h2>
            <p className="text-gray-600 mb-8">
              PrepNest is your comprehensive interview preparation platform, designed to help you excel in your dream role. 
              We combine AI-powered practice tools, expert-curated content, and real-world scenarios to ensure you're fully prepared 
              for your next interview. Whether you're a software developer, designer, or data analyst, we've got you covered with 
              role-specific preparation materials and personalized learning paths.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;