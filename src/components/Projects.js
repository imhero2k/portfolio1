import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'BirdTag: Serverless Media Storage System',
      description:
        'Built a serverless AWS media system for Monash Birdy Buddies to store, auto-tag, and search bird-related media files. Used Lambda to generate thumbnails and classify species using pretrained ML models.',
      tech: ['AWS', 'Python', 'JavaScript', 'OpenCV', 'Lambda', 'DynamoDB', 'S3', 'Cognito', 'SNS'],
      github: 'https://github.com/imhero2k/BirdTag',
      website: null,
      category: 'Cloud Engineering',
    },
    {
      title: 'CloudPose: Containerized Pose Detection Backend',
      description:
        'Developed a FastAPI-based backend for pose detection, containerized using Docker and deployed to a Kubernetes cluster on Oracle Cloud Infrastructure (OCI). Configured Kubernetes Deployment, Service, and Ingress resources.',
      tech: ['FastAPI', 'Docker', 'Kubernetes', 'OCI', 'Podman'],
      github: 'https://github.com/imhero2k/CloudPose',
      website: null,
      category: 'Cloud Engineering',
    },
    {
      title: 'Spatial Database Analysis',
      description:
        'Advanced spatial database analysis project focusing on geospatial data processing, querying, and visualization. Implemented spatial indexing and complex geospatial queries.',
      tech: ['PostgreSQL', 'PostGIS', 'Python', 'Spatial Analysis'],
      github: 'https://github.com/imhero2k/SpatialDatabaseAnalysis',
      website: null,
      category: 'Data Engineering',
    },
    {
      title: 'Data Warehousing',
      description:
        'Comprehensive data warehousing solution with ETL pipelines, dimensional modeling, and data integration. Designed star and snowflake schemas for efficient data storage and retrieval.',
      tech: ['ETL', 'Data Modeling', 'SQL', 'Data Integration'],
      github: 'https://github.com/imhero2k/DataWarehousing',
      website: null,
      category: 'Data Engineering',
    },
    {
      title: 'Big Data Processing',
      description:
        'Large-scale data processing project using distributed computing frameworks. Implemented data pipelines for handling massive datasets with parallel processing capabilities.',
      tech: ['Big Data', 'Distributed Computing', 'Data Processing', 'Scalability'],
      github: 'https://github.com/imhero2k/BigData',
      website: null,
      category: 'Data Engineering',
    },
    {
      title: 'Multi-Agent Systems',
      description:
        'Developed intelligent multi-agent systems for collaborative problem-solving. Implemented agent communication protocols and coordination mechanisms.',
      tech: ['Multi-Agent Systems', 'AI', 'Distributed Systems', 'Coordination'],
      github: 'https://github.com/imhero2k/MultiAgent',
      website: null,
      category: 'Data Analysis',
    },
    {
      title: 'Android Application (FIT5046)',
      description:
        'Built a modern Android app using Jetpack Compose and MVVM architecture. Implemented core flows with state management, validation, and navigation. Added data persistence with Room and optional cloud sync via Firebase.',
      tech: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Room', 'Firebase', 'MVVM'],
      github: 'https://github.com/imhero2k/ass2',
      website: null,
      category: 'Mobile Development',
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Cloud Engineering': 'bg-blue-100 text-blue-800',
      'Data Engineering': 'bg-green-100 text-green-800',
      'Data Analysis': 'bg-purple-100 text-purple-800',
      'Mobile Development': 'bg-orange-100 text-orange-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
