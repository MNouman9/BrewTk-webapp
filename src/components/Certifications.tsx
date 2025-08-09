'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

export function Certifications() {
  // DevOps tools only (icons expected at /public/images/devops/{slug}.svg)
  const devopsLogos = [
    { name: 'Docker', slug: 'docker', color: 'text-blue-600' },
    { name: 'Kubernetes', slug: 'kubernetes', color: 'text-blue-700' },
    { name: 'Terraform', slug: 'terraform', color: 'text-purple-700' },
    { name: 'Jenkins', slug: 'jenkins', color: 'text-red-600' },
    { name: 'Grafana', slug: 'grafana', color: 'text-orange-500' },
    { name: 'Prometheus', slug: 'prometheus', color: 'text-red-700' },
    { name: 'Elasticsearch', slug: 'elasticsearch', color: 'text-yellow-600' },
    { name: 'Logstash', slug: 'logstash', color: 'text-yellow-700' },
    { name: 'Kibana', slug: 'kibana', color: 'text-pink-600' },
    { name: 'Ansible', slug: 'ansible', color: 'text-red-600' },
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
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* DevOps Tools Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative overflow-hidden group">
            <div className="flex strip space-x-8 py-6">
              {[...devopsLogos, ...devopsLogos].map((logo, index) => (
                <div
                  key={`${logo.slug}-${index}`}
                  className="flex-shrink-0 w-36 h-16 bg-white rounded-lg border border-gray-200 flex items-center justify-center transition-transform"
                >
                  {/* Try to load icon; fallback to text if missing */}
                  <img
                    src={`/images/devops/${logo.slug}.svg`}
                    alt={logo.name}
                    className="h-8 w-auto filter grayscale opacity-80 group-hover:opacity-90 transition-all duration-200 hover:grayscale-0"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.style.display = 'none'
                      const sibling = target.nextElementSibling as HTMLElement | null
                      if (sibling) sibling.style.display = 'block'
                    }}
                  />
                  <span
                    className={`hidden font-semibold ${logo.color}`}
                    style={{ filter: 'grayscale(100%)', opacity: 0.8 }}
                  >
                    {logo.name}
                  </span>
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
          className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-12 text-white"
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
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .strip {
          width: max-content;
          animation: strip-scroll 30s linear infinite;
        }
        /* Pause the strip when hovered */
        .group:hover .strip {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
} 