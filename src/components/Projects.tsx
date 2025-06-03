
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EagleEye (SIH-2024 Grand Final)",
      description: "AI/ML-driven aerial monitoring system using drones to assess and monitor road construction. Built with React, Node, YOLO, and TensorFlow.",
      tags: ["React", "Node.js", "YOLO", "TensorFlow", "AI/ML"],
      featured: true
    },
    {
      title: "ChronoHive",
      description: "A digital time capsule platform using the MERN stack. Users can preserve notes/memories with passcode and access time.",
      tags: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "FitFolio",
      description: "Fitness tracking app using MERN Stack to monitor workouts and progress.",
      tags: ["MERN Stack", "MongoDB", "React", "Node.js"]
    },
    {
      title: "Fake Job Postings Detection",
      description: "ML-powered system to detect fraudulent job posts using scikit-learn and NLP techniques.",
      tags: ["Python", "Machine Learning", "NLP", "scikit-learn"]
    },
    {
      title: "Student Image Management",
      description: "A Flask+React app for managing student photos, ID overlays, and institution data.",
      tags: ["Flask", "React", "Python", "Image Processing"]
    },
    {
      title: "LinkDraft",
      description: "Smart link manager built with HTML, CSS, and JS for organizing links by category.",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'md:grid md:grid-cols-2 lg:grid-cols-3' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:col-span-2' : ''} p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <Github size={20} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>

              {project.featured && (
                <div className="lg:col-span-1 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
