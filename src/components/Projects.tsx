'use client'

import { motion } from 'framer-motion'
import { Github, Globe, Database, Brain, Calendar, Target, Award, Users, TrendingUp, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function Projects() {

  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and AI-powered product recommendations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'AI/ML'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#',
      icon: Globe,
      color: 'blue',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      details: {
        features: [
          'Real-time inventory management',
          'AI-powered product recommendations',
          'Secure payment processing',
          'Multi-vendor marketplace',
          'Advanced analytics dashboard',
          'Mobile-responsive design'
        ],
        challenges: [
          'Handling high concurrent users',
          'Integrating multiple payment gateways',
          'Optimizing search performance',
          'Ensuring data security compliance'
        ],
        results: [
          '300% increase in conversion rate',
          '50% reduction in cart abandonment',
          '99.9% uptime achieved',
          'Support for 10,000+ concurrent users'
        ],
        timeline: '6 months',
        team: '8 developers',
        client: 'RetailTech Solutions'
      }
    },
    {
      title: 'Cloud Migration Solution',
      category: 'Cloud & DevOps',
      description: 'Successfully migrated a legacy system to AWS with zero downtime, implementing CI/CD pipelines and automated monitoring.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#',
      icon: Database,
      color: 'green',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center',
      details: {
        features: [
          'Zero-downtime migration',
          'Automated CI/CD pipelines',
          'Infrastructure as Code',
          'Real-time monitoring',
          'Auto-scaling capabilities',
          'Disaster recovery setup'
        ],
        challenges: [
          'Legacy system compatibility',
          'Data migration without downtime',
          'Team training on new tools',
          'Cost optimization'
        ],
        results: [
          '60% reduction in infrastructure costs',
          '90% faster deployment times',
          'Zero downtime during migration',
          '99.5% system availability'
        ],
        timeline: '4 months',
        team: '6 engineers',
        client: 'FinanceCorp'
      }
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI Services',
      description: 'Intelligent analytics platform that processes large datasets and provides actionable insights through machine learning algorithms.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#',
      icon: Brain,
      color: 'purple',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      details: {
        features: [
          'Real-time data processing',
          'Predictive analytics',
          'Interactive visualizations',
          'Custom ML models',
          'Automated reporting',
          'Multi-tenant architecture'
        ],
        challenges: [
          'Processing large datasets efficiently',
          'Model accuracy optimization',
          'Real-time data streaming',
          'User experience for non-technical users'
        ],
        results: [
          '85% improvement in decision accuracy',
          '70% reduction in reporting time',
          'Support for 1M+ data points',
          '95% user satisfaction rate'
        ],
        timeline: '8 months',
        team: '10 specialists',
        client: 'DataInsight Inc'
      }
    },
    {
      title: 'Healthcare Management System',
      category: 'Web Application',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebRTC', 'HIPAA'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#',
      icon: Globe,
      color: 'blue',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center',
      details: {
        features: [
          'Electronic Health Records (EHR)',
          'Telemedicine video consultations',
          'Appointment scheduling system',
          'Prescription management',
          'HIPAA compliance',
          'Mobile app for patients'
        ],
        challenges: [
          'HIPAA compliance requirements',
          'Integration with existing systems',
          'Real-time video streaming',
          'Data security and privacy'
        ],
        results: [
          '40% reduction in appointment no-shows',
          '60% faster patient check-ins',
          '100% HIPAA compliance',
          'Support for 50+ healthcare providers'
        ],
        timeline: '10 months',
        team: '12 developers',
        client: 'HealthCare Plus'
      }
    },
    {
      title: 'Financial Trading Platform',
      category: 'AI Services',
      description: 'Real-time trading platform with AI-powered market analysis and automated trading strategies.',
      technologies: ['Python', 'FastAPI', 'Redis', 'TensorFlow', 'WebSocket'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#',
      icon: Brain,
      color: 'purple',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center',
      details: {
        features: [
          'Real-time market data streaming',
          'AI-powered trading signals',
          'Automated trading strategies',
          'Risk management system',
          'Portfolio analytics',
          'Multi-exchange integration'
        ],
        challenges: [
          'Ultra-low latency requirements',
          'Market data accuracy',
          'Risk management algorithms',
          'Regulatory compliance'
        ],
        results: [
          '15% average portfolio returns',
          '99.99% system uptime',
          'Sub-millisecond latency',
          'Support for 100+ trading pairs'
        ],
        timeline: '12 months',
        team: '15 specialists',
        client: 'TradeSmart Capital'
      }
    },
    {
      title: 'DevOps Automation Suite',
      category: 'Cloud & DevOps',
      description: 'Complete DevOps automation solution with infrastructure as code, monitoring, and security compliance.',
      technologies: ['Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#',
      icon: Database,
      color: 'green',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center',
      details: {
        features: [
          'Infrastructure as Code',
          'Automated deployment pipelines',
          'Comprehensive monitoring',
          'Security scanning',
          'Cost optimization',
          'Multi-cloud support'
        ],
        challenges: [
          'Complex infrastructure management',
          'Security compliance automation',
          'Multi-team collaboration',
          'Cost control and optimization'
        ],
        results: [
          '80% reduction in deployment time',
          '70% decrease in infrastructure costs',
          'Zero security incidents',
          'Support for 200+ microservices'
        ],
        timeline: '6 months',
        team: '8 engineers',
        client: 'TechScale Solutions'
      }
    }
  ]



  const handleProjectClick = (projectTitle: string) => {
    setExpandedProject(expandedProject === projectTitle ? null : projectTitle)
  }

  return (
    <section id="projects" className="py-20 bg-gray-50" role="region" aria-label="Case Studies">
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
            Our Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful case studies that demonstrate our expertise 
            across different technologies and industries.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleProjectClick(project.title)}
              >
                {/* Project Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <motion.div
                    className={`absolute top-3 left-3 md:top-4 md:left-4 px-2 py-1 md:px-3 md:py-1 bg-${project.color}-100 text-${project.color}-700 rounded-full text-xs md:text-sm font-medium`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Click to Expand Indicator */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <motion.div
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Click to View Details
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-700 transition-colors" itemProp="name">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base" itemProp="description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 cursor-pointer border border-transparent hover:border-blue-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 md:space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-gray-700 font-medium text-xs md:text-sm group/github"
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 group-hover/github:scale-110 transition-transform" />
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Project Modal */}
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.title === expandedProject)
                if (!project) return null

                return (
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.details.timeline}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {project.details.team}
                          </div>
                          <div className="flex items-center">
                            <Target className="w-4 h-4 mr-1" />
                            {project.details.client}
                          </div>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => setExpandedProject(null)}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-6">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.color === 'blue' ? 'bg-blue-100 text-blue-800' : project.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-blue-700" />
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {project.details.features.map((feature, index) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-orange-600" />
                          Challenges Overcome
                        </h3>
                        <ul className="space-y-2">
                          {project.details.challenges.map((challenge, index) => (
                            <motion.li
                              key={challenge}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{challenge}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                        Results Achieved
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.details.results.map((result, index) => (
                          <motion.div
                            key={result}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-green-50 border border-green-200 rounded-lg p-3"
                          >
                            <span className="text-green-700 text-sm font-medium">{result}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href={project.github}
                        className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </motion.a>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Let&apos;s discuss how we can help bring your vision to life with our expertise 
              in web applications, cloud solutions, and AI services.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 