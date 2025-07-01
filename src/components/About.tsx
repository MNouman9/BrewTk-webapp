'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Target, Users, Star, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export function About() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [selectedMember, setSelectedMember] = useState<string | null>(null)
  const [hoveredValue, setHoveredValue] = useState<string | null>(null)
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      details: 'Our innovation-driven approach ensures we leverage the latest technologies and methodologies to solve complex business challenges.',
      stats: '95% of projects use cutting-edge tech',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'Every project is delivered with the highest standards of excellence.',
      details: 'We maintain rigorous quality standards throughout the development process, ensuring reliable and maintainable solutions.',
      stats: '99.9% client satisfaction rate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.',
      details: 'We believe in transparent communication and close collaboration with our clients at every stage of the project.',
      stats: '100% client involvement in process',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed expectations.',
      details: 'We go above and beyond to deliver solutions that not only meet but exceed our clients\' expectations.',
      stats: '150% average ROI delivered',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership, Business Development',
      bio: 'Sarah has over 15 years of experience in technology leadership and business strategy. She founded BrewTk with a vision to democratize technology solutions for businesses of all sizes.',
      achievements: ['Led 50+ successful projects', 'Former VP at TechCorp', 'MBA from Stanford'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@brewtk.com'
      },
      color: 'from-purple-400 to-indigo-600'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Technology Architecture, Cloud Solutions',
      bio: 'Michael is a technology visionary with expertise in cloud architecture and scalable systems. He has architected solutions for Fortune 500 companies.',
      achievements: ['AWS Solutions Architect', '15+ years in tech', 'Open source contributor'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@brewtk.com'
      },
      color: 'from-blue-400 to-cyan-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      expertise: 'UX/UI Design, Product Strategy',
      bio: 'Emily brings creativity and user-centered design thinking to every project. She has designed award-winning digital experiences for global brands.',
      achievements: ['Design award winner', '10+ years in UX', 'Adobe certified expert'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@brewtk.com'
      },
      color: 'from-pink-400 to-rose-600'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development, AI/ML',
      bio: 'David is a full-stack developer with deep expertise in modern web technologies and artificial intelligence. He leads our development team.',
      achievements: ['Full-stack expert', 'AI/ML specialist', 'Open source maintainer'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@brewtk.com'
      },
      color: 'from-green-400 to-emerald-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About BrewTk
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, BrewTk has been at the forefront of digital transformation, 
                helping businesses of all sizes leverage technology to achieve their goals. 
                Our team of experts combines deep technical knowledge with business acumen 
                to deliver solutions that drive real results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. That&apos;s why 
                we focus on creating intuitive, scalable, and maintainable solutions that 
                grow with your business.
              </p>
            </div>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={itemVariants}
                className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-purple-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  5+
                </motion.div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors">Years Experience</div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-green-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  50+
                </motion.div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors">Team Members</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Values
              </h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedValue === value.title 
                        ? 'bg-white shadow-xl scale-105' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    whileHover={{ 
                      scale: selectedValue === value.title ? 1.05 : 1.02,
                      y: -2 
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedValue(selectedValue === value.title ? null : value.title)}
                    onMouseEnter={() => setHoveredValue(value.title)}
                    onMouseLeave={() => setHoveredValue(null)}
                  >
                    <div className="p-4">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <value.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">
                              {value.title}
                            </h4>
                            <motion.div
                              animate={{ rotate: selectedValue === value.title ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExternalLink className="w-4 h-4 text-gray-400" />
                            </motion.div>
                          </div>
                          <p className="text-gray-600 mb-2">
                            {value.description}
                          </p>
                          
                          {/* Expanded content */}
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: selectedValue === value.title ? 'auto' : 0,
                              opacity: selectedValue === value.title ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-gray-500 mb-3">
                              {value.details}
                            </p>
                            <div className="flex items-center space-x-2 text-sm">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-purple-600 font-medium">{value.stats}</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    {hoveredValue === value.title && selectedValue !== value.title && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 pointer-events-none"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMember(selectedMember === member.name ? null : member.name)}
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <motion.div 
                  className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-2xl font-bold relative z-10">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                  
                  {/* Hover effect */}
                  {hoveredMember === member.name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 bg-white/20 rounded-full"
                    />
                  )}
                </motion.div>
                
                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-purple-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.expertise}
                </p>

                {/* Social Links */}
                <motion.div 
                  className="flex justify-center space-x-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {Object.entries(member.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {platform === 'linkedin' && <Linkedin className="w-4 h-4 text-gray-600" />}
                      {platform === 'twitter' && <Twitter className="w-4 h-4 text-gray-600" />}
                      {platform === 'email' && <Mail className="w-4 h-4 text-gray-600" />}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Expanded Bio */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: selectedMember === member.name ? 'auto' : 0,
                    opacity: selectedMember === member.name ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-left"
                >
                  <p className="text-sm text-gray-600 mb-3">
                    {member.bio}
                  </p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* View More Button */}
                <motion.button
                  className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors mt-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {selectedMember === member.name ? 'Show Less' : 'View More'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-12 text-center text-white relative overflow-hidden cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <motion.h3 
              className="text-3xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-xl leading-relaxed max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 