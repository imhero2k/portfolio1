import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer - EPM Team',
      company: 'Infor',
      location: 'Hyderabad, India',
      period: '04/2022 - 07/2024',
      description: [
        'Automated deployment of financial and supply chain reporting applications on Infor CloudSuite using GitLab CI/CD, YAML, and Docker on Linux-based environments.',
        'Developed Python scripts to generate and archive report snapshots in AWS S3, improving traceability and regulatory compliance.',
        'Managed cloud infrastructure using AWS EC2 Auto Scaling Groups, Launch Templates, ECR, and Secrets Manager for secure and scalable deployments.',
        'Configured monitoring and alerting via AWS CloudWatch and SNS to ensure high availability and operational visibility.',
        'Integrated reporting solutions with Infor Document Management (IDM) and enforced role-based access through cloud role management.',
        'Collaborated in Agile sprints and DevOps pipelines to coordinate releases with platform and operations teams, reducing cycle time and delivery risk.',
      ],
      skills: ['AWS', 'Docker', 'GitLab CI/CD', 'Python', 'DevOps', 'Cloud Infrastructure', 'Monitoring'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-primary-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                    <FaBriefcase className="text-sm" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-primary-600 mt-1.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
