import React from 'react';
import { Code, Users, Trophy, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Clients Served', value: '25+' },
    { icon: Trophy, label: 'Awards Won', value: '5+' },
    { icon: Clock, label: 'Years Experience', value: '3+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Mohamed Fasrin"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Crafting Digital Solutions with Passion
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a dedicated Software Engineer with over 3 years of experience in 
              full-stack development. My journey in technology began with a curiosity 
              about how things work, and it has evolved into a passion for creating 
              innovative solutions that make a difference.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I specialize in modern web technologies including React, Node.js, Python, 
              and cloud platforms. My approach combines technical expertise with creative 
              problem-solving to deliver exceptional user experiences and robust backend systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Full Stack Development
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Cloud Architecture
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                API Design
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Database Design
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h4>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};