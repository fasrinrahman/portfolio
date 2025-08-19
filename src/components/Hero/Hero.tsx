import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTitle = titles[currentIndex];
      
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/468147434_1143159527412777_6611086113612032659_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWNmKqw-XxN3LUNmeX_AooPE49V7Y_p9A8Tj1Xtj-n0EGsF_B8w0QPGfCphc8R0tdJ29HgF3twX4_sTehzOvCd&_nc_ohc=iFRxA_YdMOUQ7kNvwE4qsVc&_nc_oc=AdmndSrC5dLn3vNEjF_eRT2AJXsmCgUlJIFeSVZpKrOGQrILUD6EygKQ-9PNPzKQ1gg&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=FsQY5FZUUmikJXhYR5wSxw&oh=00_AfUWcL6_LVYCcH_t0MMjpkAh6aImvBNesoFuMiaOWeYcGg&oe=68A9BF2B?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
            alt="Mohamed Fasrin Rahman"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-blue-100"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Mohamed Fasrin
          <span className="block text-4xl md:text-5xl text-blue-600 mt-2">
            Rahman
          </span>
        </h1>

        <div className="h-16 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-gray-600">
            <span className="text-purple-600">{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate Software Engineer with expertise in full-stack development,
          creating innovative solutions that drive business growth and enhance user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Download CV
          </button>
          <button
            onClick={scrollToAbout}
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:mohamed.fasrin@example.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="h-6 w-6 text-gray-700" />
          </a>
          <a
            href="tel:+1234567890"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Phone className="h-6 w-6 text-gray-700" />
          </a>
          <a
            href="https://github.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Github className="h-6 w-6 text-gray-700" />
          </a>
          <a
            href="https://linkedin.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6 text-gray-700" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </button>
      </div>
    </section>
  );

};
