import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import profilePhoto from '../assets/profile-photo.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              SAI SARAN
              <span className="block text-primary-300">K S M S</span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 space-y-2">
              <p className="font-light">Data Engineer</p>
              <p className="font-light">Cloud Engineer</p>
              <p className="font-light">Data Analyst</p>
            </div>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl">
              Software engineer with 2.6 years of hands-on experience and 5+ years of coding expertise. 
              Specialized in building scalable data pipelines, cloud infrastructure, and data-driven solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="/resume.pdf"
                download="SAI_SARAN_K_S_M_S_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <FaFileDownload size={20} />
                <span>Download Resume</span>
              </a>
              <a
                href="https://github.com/imhero2k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ksms-saran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:saranksms123@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <FaEnvelope size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 overflow-hidden shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="SAI SARAN K S M S"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-400 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white">
            <HiArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
