
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <a href="mailto:likhithasri@example.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200">
                    likhithasri@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/likhithasri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200"
                  >
                    linkedin.com/in/likhithasri
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">GitHub</p>
                  <a 
                    href="https://github.com/Likhithasri11" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200"
                  >
                    github.com/Likhithasri11
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
