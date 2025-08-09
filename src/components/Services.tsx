'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Brain, Palette, Bug, Users, Zap, Shield, TrendingUp, Clock } from 'lucide-react'


export function Services() {


  const services = [
    {
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
      stats: { projects: 150, satisfaction: '98%' }
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and DevOps practices to streamline your development and deployment.',
      icon: Cloud,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      features: ['AWS & Azure', 'CI/CD Pipelines', 'Container Orchestration', 'Monitoring'],
      stats: { projects: 80, satisfaction: '96%' }
    },
    {
      title: 'AI Services',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence.',
      icon: Brain,
      color: 'from-blue-700 to-blue-800',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-800',
      features: ['Machine Learning', 'Data Analytics', 'Chatbots', 'Predictive Models'],
      stats: { projects: 45, satisfaction: '97%' }
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces designed with user experience in mind.',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      stats: { projects: 120, satisfaction: '99%' }
    },
    {
      title: 'QA & Testing',
      description: 'Comprehensive testing services to ensure your applications are bug-free and performant.',
      icon: Bug,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      features: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Testing'],
      stats: { projects: 200, satisfaction: '95%' }
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions for your business.',
      icon: Users,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-700',
      features: ['Technology Strategy', 'Architecture Review', 'Digital Transformation', 'Team Training'],
      stats: { projects: 60, satisfaction: '94%' }
    }
  ]

  const stats = [
    { icon: Zap, value: '500+', label: 'Projects Delivered' },
    { icon: Shield, value: '99%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '24/7', label: 'Support Available' },
    { icon: Clock, value: '< 24h', label: 'Response Time' }
  ]

  return (
    <section id="services" className="py-20 bg-white" role="region" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs. From web development to AI implementation, 
            we help you stay ahead of the competition.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer h-full"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Service Icon */}
                <motion.div
                  className={`w-12 h-12 md:w-16 md:h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  whileTap={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className={`w-6 h-6 md:w-8 md:h-8 ${service.iconColor}`} />
                </motion.div>

                {/* Service Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-800 transition-colors" itemProp="name">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base" itemProp="description">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center text-xs md:text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-700 rounded-full mr-2 md:mr-3"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-100">
                  <div className="text-xs md:text-sm text-gray-500">
                    <span className="font-semibold text-blue-800">{service.stats.projects}</span> projects
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    <span className="font-semibold text-green-600">{service.stats.satisfaction}</span> satisfaction
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-blue-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-blue-200 transition-colors"
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-800" />
              </motion.div>
              <motion.div 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-800 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs md:text-sm text-gray-600 group-hover:text-blue-800 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 