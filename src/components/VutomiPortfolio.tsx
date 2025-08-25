import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award, Code, Briefcase, GraduationCap, Star } from 'lucide-react';

interface VutomiPortfolioProps {
  onBack: () => void;
}

const VutomiPortfolio: React.FC<VutomiPortfolioProps> = ({ onBack }) => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 75 }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack web application with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      highlights: ["Payment integration", "Real-time inventory", "Admin dashboard"]
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence and reporting",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js"],
      highlights: ["Real-time data visualization", "Custom reporting", "API integration"]
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform mobile application for project management",
      technologies: ["React Native", "Firebase", "Redux"],
      highlights: ["Offline functionality", "Push notifications", "Team collaboration"]
    }
  ];

  const experience = [
    {
      title: "Software Engineer",
      company: "TankStack",
      period: "2024 - Present",
      description: "Developing modern web applications and providing technical solutions for clients",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Implemented CI/CD pipelines for automated deployment",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    },
    {
      title: "Junior Developer",
      company: "Previous Company",
      period: "2023 - 2024",
      description: "Contributed to various web development projects and learned industry best practices",
      achievements: [
        "Developed and maintained web applications",
        "Participated in code reviews and testing",
        "Gained experience with modern development tools and frameworks"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2020 - 2023",
      description: "Focused on software engineering, algorithms, and data structures"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </button>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-12 text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                  <span className="text-4xl font-bold">VM</span>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold mb-2">Vutomi Mohube</h1>
                  <p className="text-xl text-blue-100 mb-4">Software Engineer</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      vutomimohube11@gmail.com
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Johannesburg, South Africa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-blue-600" />
                Technical Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Certifications
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-gray-700">AWS Cloud Practitioner</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-gray-700">React Developer Certification</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-gray-700">Agile Development Methodology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am a passionate Software Engineer with expertise in full-stack web development, 
                specializing in modern JavaScript frameworks and cloud technologies. I enjoy solving 
                complex problems and building scalable solutions that make a real impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in computer science and hands-on experience in various 
                technologies, I'm committed to continuous learning and staying up-to-date with 
                the latest industry trends and best practices.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-6">
                Interested in working together or have a question? Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:vutomimohube11@gmail.com"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
                <a
                  href="http://www.linkedin.com/in/vutomi-mohube-00aa06235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VutomiPortfolio;