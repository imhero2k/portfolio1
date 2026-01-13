import React from 'react';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Master of Information Technology',
      institution: 'Monash University',
      location: 'Melbourne, Australia',
      period: '06/2024 - Present',
      status: 'In Progress',
    },
    {
      degree: 'B.Tech. Computer Science and Engineering',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'India',
      period: '08/2018 - 06/2022',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Education
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-white rounded-xl shadow-md p-8 border-l-4 border-primary-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 text-white p-4 rounded-lg">
                    <FaGraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                      <span>{edu.location}</span>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {edu.status}
                    </span>
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

export default Education;
