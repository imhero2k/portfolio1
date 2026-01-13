import React from 'react';
import { FaAws, FaPython, FaJava, FaDocker, FaDatabase, FaServer } from 'react-icons/fa';
import { SiKubernetes, SiPostgresql, SiMongodb, SiGooglecloud } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaPython className="text-4xl text-primary-600" />,
      skills: ['Python', 'Java', 'Kotlin', 'JavaScript/TypeScript', 'SQL', 'R', 'C++'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaAws className="text-4xl text-primary-600" />,
      skills: [
        'AWS (S3, Lambda, API Gateway, DynamoDB, Cognito, SNS, CloudWatch, EC2, ECR)',
        'Azure',
        'GCP',
        'Docker',
        'Kubernetes',
        'GitLab CI/CD',
      ],
    },
    {
      title: 'Data & Storage',
      icon: <FaDatabase className="text-4xl text-primary-600" />,
      skills: [
        'PostgreSQL',
        'MySQL',
        'SQL Server',
        'Google BigQuery',
        'MongoDB',
        'DynamoDB',
        'Firebase',
      ],
    },
    {
      title: 'Backend & Web',
      icon: <FaServer className="text-4xl text-primary-600" />,
      skills: [
        'Spring Boot',
        'FastAPI',
        'React',
        'GraphQL',
        'REST APIs',
        'Microservices',
      ],
    },
    {
      title: 'Data Engineering Tools',
      icon: <SiGooglecloud className="text-4xl text-primary-600" />,
      skills: [
        'ETL Pipelines',
        'Data Warehousing',
        'Spatial Database Analysis',
        'Big Data Processing',
        'Data Modeling',
      ],
    },
    {
      title: 'Testing & Quality',
      icon: <FaDocker className="text-4xl text-primary-600" />,
      skills: [
        'JUnit',
        'Espresso',
        'Mockito',
        'SonarQube',
        'PIT (Mutation Testing)',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 flex items-start gap-2"
                  >
                    <span className="text-primary-600 mt-1">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
