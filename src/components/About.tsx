
import { Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a passionate developer with expertise in building full-stack web and mobile applications. 
              I enjoy creating clean, efficient, and scalable solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Currently pursuing BTech, I am continuously learning and growing my skill set in modern 
              technologies like React, Node.js, Flutter, and Machine Learning. My journey includes 
              participating in prestigious competitions like SIH 2024 where I reached the Grand Finals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable and efficient code</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Innovation</h3>
                <p className="text-sm text-gray-600">Creating innovative solutions</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Problem Solving</h3>
                <p className="text-sm text-gray-600">Tackling complex challenges</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop&crop=face"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
