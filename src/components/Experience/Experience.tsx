import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      type: 'Full-time',
      description: [
        'Led development of microservices architecture serving 100k+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 5 junior developers in React and Node.js best practices',
        'Collaborated with product team to define technical requirements'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      achievements: [
        'Reduced page load times by 40%',
        'Increased test coverage to 95%',
        'Led migration to TypeScript'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      location: 'New York, NY',
      duration: '2021 - 2022',
      type: 'Full-time',
      description: [
        'Developed responsive web applications using React and Django',
        'Built RESTful APIs handling 50k+ daily requests',
        'Optimized database queries improving performance by 35%',
        'Integrated third-party payment systems and APIs'
      ],
      technologies: ['React', 'Django', 'Python', 'MongoDB', 'Stripe API'],
      achievements: [
        'Delivered 15+ projects on time',
        'Improved user engagement by 25%',
        'Reduced server costs by 30%'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      duration: '2020 - 2021',
      type: 'Full-time',
      description: [
        'Contributed to front-end development using Vue.js and JavaScript',
        'Participated in Agile development process and daily standups',
        'Fixed bugs and implemented new features based on user feedback',
        'Collaborated with design team to implement UI/UX improvements'
      ],
      technologies: ['Vue.js', 'JavaScript', 'Express.js', 'MySQL'],
      achievements: [
        'Completed 100+ tickets',
        'Maintained 99.5% uptime',
        'Improved code quality scores'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey building innovative solutions and leading development teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>

                <div className="md:ml-20 flex-1">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <span className="text-lg font-semibold text-blue-600">
                            {exp.company}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};