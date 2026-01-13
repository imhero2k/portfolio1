import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <img 
                  src="/profile-photo.jpeg" 
                  alt="SAI SARAN K S M S" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate software engineer with <strong>2.6 years of professional experience</strong> and 
                <strong> 5+ years of coding expertise</strong>. My journey has been focused on building innovative 
                solutions that make a real-world impact, with a strong emphasis on scalable architecture and 
                data-driven decision making.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across <strong>data engineering</strong>, <strong>cloud infrastructure</strong>, 
                and <strong>data analysis</strong>. I specialize in designing and implementing robust data pipelines, 
                managing cloud infrastructure on AWS, Azure, and GCP, and transforming raw data into actionable insights.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">2.6+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">5+</div>
                  <div className="text-sm text-gray-600">Years Coding</div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Focus Areas</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Data Engineering
                  </span>
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Cloud Engineering
                  </span>
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Data Analysis
                  </span>
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Big Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
