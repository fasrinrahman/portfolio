import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Star } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'Mobile', 'APIs', 'AI/ML'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Admin dashboard',
        'Order management system'
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      status: 'Completed',
      rating: 5
    },
    {
      title: 'Task Management App',
      category: 'Web Apps',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics.',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebSockets'],
      features: [
        'Real-time collaboration',
        'Project analytics',
        'Team management',
        'Task automation'
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      status: 'Completed',
      rating: 4
    },
    {
      title: 'Weather Forecast API',
      category: 'APIs',
      description: 'RESTful API providing accurate weather forecasts with caching, rate limiting, and comprehensive documentation.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'Redis', 'MongoDB', 'Docker'],
      features: [
        'RESTful architecture',
        'Rate limiting',
        'Response caching',
        'API documentation'
      ],
      github: 'https://github.com',
      demo: 'https://api.example.com',
      status: 'Completed',
      rating: 5
    },
    {
      title: 'AI Chat Assistant',
      category: 'AI/ML',
      description: 'Intelligent chatbot powered by machine learning with natural language processing and context awareness.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      features: [
        'Natural language processing',
        'Context awareness',
        'Multi-language support',
        'Learning capabilities'
      ],
      github: 'https://github.com',
      demo: 'https://chat.example.com',
      status: 'In Progress',
      rating: 4
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Stripe'],
      features: [
        'Biometric authentication',
        'Transaction monitoring',
        'Account management',
        'Security features'
      ],
      github: 'https://github.com',
      demo: 'https://mobile.example.com',
      status: 'Completed',
      rating: 5
    },
    {
      title: 'Data Visualization Dashboard',
      category: 'Web Apps',
      description: 'Interactive dashboard for business intelligence with real-time data processing and customizable charts.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'AWS'],
      features: [
        'Interactive charts',
        'Real-time data',
        'Custom dashboards',
        'Export functionality'
      ],
      github: 'https://github.com',
      demo: 'https://dashboard.example.com',
      status: 'Completed',
      rating: 4
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work in web development, mobile applications, and innovative software solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 2 && (
                      <li className="text-sm text-gray-500">
                        +{project.features.length - 2} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex-1 justify-center"
                  >
                    <Eye className="h-4 w-4" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors duration-300 flex-1 justify-center"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};