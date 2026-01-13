import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    const mailtoLink = `mailto:saranksms123@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      label: 'Email',
      value: 'saranksms123@gmail.com',
      link: 'mailto:saranksms123@gmail.com',
    },
    {
      icon: <FaPhone size={24} />,
      label: 'Phone',
      value: '+61 0481106013',
      link: 'tel:+610481106013',
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      value: 'github.com/imhero2k',
      link: 'https://github.com/imhero2k',
    },
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ksms--saran',
      link: 'https://www.linkedin.com/in/ksms--saran/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-primary-100 mb-8 text-lg">
                I'm always open to discussing new opportunities, data engineering projects, 
                cloud infrastructure challenges, or data analysis collaborations. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/20"
                  >
                    <div className="text-primary-300">{info.icon}</div>
                    <div>
                      <div className="text-sm text-primary-200">{info.label}</div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="text-primary-300" />
                    <span className="font-semibold">Location</span>
                  </div>
                  <p className="text-primary-100">Melbourne, Australia</p>
                </div>
                <a
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  download="SAI_SARAN_K_S_M_S_Resume.pdf"
                  className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/20 text-white font-semibold"
                >
                  <FaFileDownload size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
