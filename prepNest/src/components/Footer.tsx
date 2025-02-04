import React from 'react';
import { Mail, Phone, Github, Linkedin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t animate-fadeInUp hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 animate-fadeInLeft">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <GraduationCap className="h-8 w-8 text-primary transform transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xl font-bold text-dark group-hover:text-primary transition-colors">PrepNest</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your comprehensive interview preparation platform, designed to help tech professionals excel in their dream roles.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sai4464" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:animate-bounce"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:animate-bounce"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="animate-fadeInRight delay-100">
            <h3 className="font-semibold text-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/roles', text: 'Roles' },
                { to: '/practice', text: 'Practice' },
                { to: '/experiences', text: 'Experiences' },
                { to: '/about', text: 'About' }
              ].map((link, index) => (
                <li key={link.to} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <Link 
                    to={link.to} 
                    className="text-gray-600 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block transform hover:font-medium"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fadeInRight delay-200">
            <h3 className="font-semibold text-dark mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 group hover:translate-x-2 transition-all duration-300">
                <Mail className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                <a 
                  href="mailto:vathsavayisai@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  vathsavayisai@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-600 group hover:translate-x-2 transition-all duration-300">
                <Phone className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                <a 
                  href="tel:+15108152527" 
                  className="hover:text-primary transition-colors"
                >
                  +1 (510) 815-2527
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600 animate-fadeInUp delay-300">
          <p>&copy; {new Date().getFullYear()} PrepNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;