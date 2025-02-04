import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Palette, Terminal, Search, LineChart, Database, Cloud, Shield, Cpu, Network, Briefcase, Server } from 'lucide-react';

const Roles = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const roles = [
    {
      title: 'Software Developer',
      icon: Code2,
      path: '/roles/software-developer',
      description: 'Master DSA, system design, and full-stack development',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'UI/UX Designer',
      icon: Palette,
      path: '/roles/ui-ux-designer',
      description: 'Excel in design thinking, user research, and prototyping',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Python Developer',
      icon: Terminal,
      path: '/roles/python-developer',
      description: 'Specialize in Python, Django, and data processing',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Data Analyst',
      icon: LineChart,
      path: '/roles/data-analyst',
      description: 'Master data visualization, SQL, and analytics',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Database Engineer',
      icon: Database,
      path: '/roles/database-engineer',
      description: 'Excel in database design, optimization, and management',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Cloud Engineer',
      icon: Cloud,
      path: '/roles/cloud-engineer',
      description: 'Master cloud platforms, DevOps, and infrastructure',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Security Engineer',
      icon: Shield,
      path: '/roles/security-engineer',
      description: 'Specialize in cybersecurity and security architecture',
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'DevOps Engineer',
      icon: Server,
      path: '/roles/devops-engineer',
      description: 'Master CI/CD, containerization, and automation',
      color: 'from-green-600 to-teal-700'
    },
    {
      title: 'Machine Learning Engineer',
      icon: Cpu,
      path: '/roles/ml-engineer',
      description: 'Excel in ML algorithms, deep learning, and AI',
      color: 'from-purple-600 to-pink-700'
    },
    {
      title: 'Network Engineer',
      icon: Network,
      path: '/roles/network-engineer',
      description: 'Specialize in network architecture and security',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Product Manager',
      icon: Briefcase,
      path: '/roles/product-manager',
      description: 'Master product strategy, roadmapping, and execution',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const filteredRoles = roles.filter(role =>
    role.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Role
          </h1>
          <p className="text-xl text-gray-600">
            Accelerate your interview preparation with role-specific questions and expert guidance
          </p>
        </div>

        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for a role..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(role.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    <h3 className="text-xl font-semibold ml-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                      {role.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {role.description}
                  </p>
                  <div className="mt-4 flex items-center text-indigo-600 group-hover:text-white transition-colors duration-300">
                    <span>Start Preparation</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roles