import React from 'react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'Vue.js', level: 75, color: 'bg-green-500' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88, color: 'bg-green-600' },
        { name: 'Python', level: 85, color: 'bg-blue-500' },
        { name: 'Express.js', level: 85, color: 'bg-gray-600' },
        { name: 'Django', level: 80, color: 'bg-green-700' },
        { name: 'REST APIs', level: 90, color: 'bg-purple-500' },
        { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 85, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-600' },
        { name: 'MySQL', level: 82, color: 'bg-blue-500' },
        { name: 'Docker', level: 78, color: 'bg-blue-400' },
        { name: 'AWS', level: 75, color: 'bg-orange-500' },
        { name: 'Git', level: 90, color: 'bg-red-500' },
      ],
    },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Express.js', 'Django', 'GraphQL', 'REST APIs',
    'Git', 'Tailwind CSS', 'Vue.js', 'MySQL', 'JavaScript', 'HTML/CSS'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};