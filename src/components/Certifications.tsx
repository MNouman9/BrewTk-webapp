'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

export function Certifications() {
  const logos = [
    // Cloud Platforms
    { name: 'AWS', type: 'cloud', color: 'bg-orange-100 text-orange-700' },
    { name: 'Microsoft Azure', type: 'cloud', color: 'bg-blue-100 text-blue-700' },
    { name: 'Google Cloud', type: 'cloud', color: 'bg-green-100 text-green-700' },
    
    // Technologies
    { name: 'React', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'Node.js', type: 'tech', color: 'bg-green-100 text-green-700' },
    { name: 'Python', type: 'tech', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'TypeScript', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'Docker', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'Kubernetes', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'Terraform', type: 'tech', color: 'bg-purple-100 text-purple-700' },
    { name: 'Jenkins', type: 'tech', color: 'bg-red-100 text-red-700' },
    { name: 'MongoDB', type: 'tech', color: 'bg-green-100 text-green-700' },
    { name: 'PostgreSQL', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'Redis', type: 'tech', color: 'bg-red-100 text-red-700' },
    { name: 'TensorFlow', type: 'tech', color: 'bg-orange-100 text-orange-700' },
    { name: 'FastAPI', type: 'tech', color: 'bg-green-100 text-green-700' },
    { name: 'Vue.js', type: 'tech', color: 'bg-green-100 text-green-700' },
    { name: 'Next.js', type: 'tech', color: 'bg-gray-100 text-gray-700' },
    { name: 'Tailwind CSS', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'GraphQL', type: 'tech', color: 'bg-pink-100 text-pink-700' },
    { name: 'WebRTC', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'WebSocket', type: 'tech', color: 'bg-blue-100 text-blue-700' },
    { name: 'ELK Stack', type: 'tech', color: 'bg-orange-100 text-orange-700' },
    { name: 'Prometheus', type: 'tech', color: 'bg-red-100 text-red-700' },
    { name: 'Grafana', type: 'tech', color: 'bg-orange-100 text-orange-700' },
    { name: 'Ansible', type: 'tech', color: 'bg-red-100 text-red-700' }
  ]

  const stats = [
    { label: 'Cloud Platforms', value: '3' },
    { label: 'Technologies', value: '25+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Delivered', value: '100+' }
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies & Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re certified and experienced with leading cloud platforms and cutting-edge technologies 
            to deliver robust, scalable solutions for your business.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Logo Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative overflow-hidden">
            {/* First row of logos */}
            <div className="flex animate-scroll space-x-8 py-8">
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`text-center px-4 py-2 rounded-lg ${logo.color} font-semibold text-sm`}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row of logos (duplicate for seamless loop) */}
            <div className="flex animate-scroll-reverse space-x-8 py-8">
              {logos.slice().reverse().map((logo, index) => (
                <div
                  key={`${logo.name}-reverse-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`text-center px-4 py-2 rounded-lg ${logo.color} font-semibold text-sm`}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cloud Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certified Cloud Platforms
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'AWS', certs: '4', bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
              { name: 'Microsoft Azure', certs: '4', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
              { name: 'Google Cloud', certs: '2', bgColor: 'bg-green-100', iconColor: 'text-green-600' }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${platform.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Award className={`w-8 h-8 ${platform.iconColor}`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {platform.name}
                </h4>
                <p className="text-gray-600 mb-4">
                  Certified Professional
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">
                    {platform.certs} Certifications
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Our Expertise Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Our Technology Expertise Matters
              </h3>
              <p className="text-xl leading-relaxed mb-6">
                Our deep knowledge of cloud platforms and modern technologies ensures 
                we build solutions that are scalable, secure, and future-proof.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Latest technology stack expertise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Cloud-native architecture design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Security and performance optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Scalable and maintainable solutions
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-8">
                <Award className="w-16 h-16 text-white mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">10+</div>
                <div className="text-white/80">Cloud Certifications</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Leverage Our Technology Expertise?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our certified team is ready to help you build robust, scalable solutions 
              using the latest cloud platforms and technologies.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  )
} 