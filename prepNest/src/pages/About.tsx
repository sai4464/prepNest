import React from 'react';
import { Users, Award, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert-Led Content',
      description: 'Our interview preparation materials are curated by industry professionals with years of experience in hiring and technical interviews.'
    },
    {
      icon: Award,
      title: 'Role-Specific Training',
      description: "Tailored preparation paths for different tech roles, ensuring you're practicing what matters most for your target position."
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'From technical skills to behavioral questions, we cover all aspects of the modern interview process.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join thousands of tech professionals preparing for their next career move with PrepNest.'
    }
  ];

  return (
    <div className="pt-20 pb-12 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark mb-6">About PrepNest</h1>
          <p className="text-xl text-dark max-w-3xl mx-auto">
            PrepNest is your comprehensive interview preparation platform, designed to help tech professionals excel in their dream roles through personalized practice and expert guidance.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-dark mb-4">Our Mission</h2>
          <p className="text-dark mb-6">
            At PrepNest, we believe that everyone deserves access to high-quality interview preparation resources. Our mission is to empower tech professionals with the tools, knowledge, and confidence they need to succeed in their career journeys.
          </p>
          <div className="bg-primary/10 rounded-lg p-6">
            <p className="text-primary font-semibold italic">
              "We're committed to transforming how tech professionals prepare for interviews, making the process more effective, accessible, and tailored to individual needs."
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark ml-4">{feature.title}</h3>
                </div>
                <p className="text-dark">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-start to-secondary-end rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-lg">Practice Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;