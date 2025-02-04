import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'vathsavayisai@gmail.com',
      link: 'mailto:vathsavayisai@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (510) 815-2527',
      link: 'tel:+15108152527'
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'github.com/sai4464',
      link: 'https://github.com/sai4464'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://linkedin.com'
    }
  ];

  return (
    <div className="pt-20 pb-12 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Get in Touch</h1>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            Have questions about PrepNest? I'm here to help! Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{info.title}</h3>
                <p className="text-dark">{info.content}</p>
              </a>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">Send me a Message</h2>
              <p className="text-dark mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              <div className="bg-primary/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-dark">Quick Response</h3>
                </div>
                <p className="text-dark">
                  I typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;