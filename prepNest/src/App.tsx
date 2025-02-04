import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Roles from './pages/Roles';
import Practice from './pages/Practice';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import InterviewExperiences from './pages/InterviewExperiences';
import SoftwareDeveloper from './pages/SoftwareDeveloper';
import UiUxDesigner from './pages/UiUxDesigner';
import PythonDeveloper from './pages/PythonDeveloper';
import MockInterview from './pages/MockInterview';
import MCQPractice from './pages/MCQPractice';
import CodingChallenge from './pages/CodingChallenge';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/experiences" element={<InterviewExperiences />} />
            <Route path="/roles/software-developer" element={<SoftwareDeveloper />} />
            <Route path="/roles/ui-ux-designer" element={<UiUxDesigner />} />
            <Route path="/roles/python-developer" element={<PythonDeveloper />} />
            <Route path="/practice/mock-interview" element={<MockInterview />} />
            <Route path="/practice/mock-interview/:role" element={<MockInterview />} />
            <Route path="/practice/mcq" element={<MCQPractice />} />
            <Route path="/practice/mcq/:category" element={<MCQPractice />} />
            <Route path="/practice/coding-challenges" element={<CodingChallenge />} />
            <Route path="/practice/coding-challenges/:difficulty" element={<CodingChallenge />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App