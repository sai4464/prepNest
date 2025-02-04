import React, { useState, useEffect } from 'react';
import { Code2, Palette, Terminal, BookOpen, Users, Phone, Home, GraduationCap, FileText, User, LogOut, MessageSquare, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock user data (replace with actual user data later)
  const user = {
    name: 'Sai Vathsavayi',
    email: 'vathsavayisai@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  const navLinks = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/roles', icon: Users, label: 'Roles' },
    { path: '/practice', icon: Code2, label: 'Practice' },
    { path: '/experiences', icon: MessageSquare, label: 'Experiences' },
    { path: '/about', icon: FileText, label: 'About' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowProfileMenu(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <GraduationCap className="h-8 w-8 text-primary transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 hover:animate-wave" />
              <span className="text-xl font-bold text-dark group-hover:text-primary transition-colors">PrepNest</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 animate-fadeInRight">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center group relative overflow-hidden ${
                    isActive(link.path) ? 'text-primary' : 'text-dark'
                  }`}
                >
                  <Icon className={`h-5 w-5 mr-1 transform transition-all duration-300 group-hover:scale-110 ${
                    isActive(link.path) ? 'text-primary' : 'group-hover:text-primary'
                  }`} />
                  <span className="relative">
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </span>
                </Link>
              );
            })}

            {/* Desktop Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 focus:outline-none group"
              >
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition-all duration-300 transform group-hover:scale-105 hover:animate-pulse"
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 transform origin-top-right transition-all duration-200 animate-fadeIn">
                  <Link
                    to="/dashboard"
                    className="flex items-center px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                  <button
                    className="flex items-center w-full px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => {/* Handle logout */}}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none transition-all duration-300 hover:animate-pulse"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 hover:translate-x-2 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-dark hover:text-primary hover:bg-gray-100'
                }`}
                onClick={closeMobileMenu}
              >
                <Icon className={`h-5 w-5 mr-3 transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-110' : ''
                }`} />
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Profile Section */}
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center px-3 py-2">
              <img
                src={user.avatar}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-primary"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
            <Link
              to="/dashboard"
              className="flex items-center px-3 py-2 text-base font-medium text-dark hover:text-primary hover:bg-gray-100 rounded-md transition-all duration-300 hover:translate-x-2"
              onClick={closeMobileMenu}
            >
              <User className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
            <button
              className="w-full flex items-center px-3 py-2 text-base font-medium text-dark hover:text-primary hover:bg-gray-100 rounded-md transition-all duration-300 hover:translate-x-2"
              onClick={() => {/* Handle logout */}}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;