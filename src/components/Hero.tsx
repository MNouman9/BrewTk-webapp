'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [counts, setCounts] = useState({ clients: 0, projects: 0, support: 0 })

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      
      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setCounts({
          clients: Math.floor(500 * progress),
          projects: Math.floor(1000 * progress),
          support: 24
        })
        
        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)
    }

    const timer = setTimeout(animateCounts, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden" role="banner" aria-label="Hero section">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-16 h-16 md:w-32 md:h-32 bg-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-12 h-12 md:w-24 md:h-24 bg-blue-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/3 w-10 h-10 md:w-20 md:h-20 bg-pink-200 rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-800 text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-200 cursor-pointer group"
              >
                <motion.span 
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-700 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Trusted by {counts.clients}+ businesses worldwide
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                itemProp="headline"
              >
                Transform Your Business with{' '}
                <motion.span 
                  className="text-blue-700 md:text-blue-800"
                >
                  Cutting-Edge
                </motion.span> IT Solutions
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                itemProp="description"
              >
                BrewTk delivers comprehensive IT services for small businesses, SMEs, and enterprises. 
                From web applications to cloud infrastructure and AI solutions, we help you stay ahead of the competition.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-200 group shadow-lg hover:shadow-xl text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-4 md:space-x-8 pt-6 lg:pt-8"
            >
              <motion.div 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {counts.clients}+
                </div>
                <div className="text-xs md:text-sm text-gray-600 group-hover:text-blue-800 transition-colors">Happy Clients</div>
              </motion.div>
              <motion.div 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {counts.projects}+
                </div>
                <div className="text-xs md:text-sm text-gray-600 group-hover:text-blue-800 transition-colors">Projects Completed</div>
              </motion.div>
              <motion.div 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {counts.support}/7
                </div>
                <div className="text-xs md:text-sm text-gray-600 group-hover:text-blue-800 transition-colors">Support</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 lg:mt-0"
          >
            <motion.div 
              className="relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-4 md:p-8 shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-blue-900/20 rounded-2xl"></div>
              
              {/* Interactive Dashboard */}
              <div className="relative z-10 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <motion.div 
                      className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="text-white font-medium text-sm md:text-base">Dashboard</div>
                  </div>
                  <div className="flex space-x-1 md:space-x-2">
                    <motion.div 
                      className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full cursor-pointer hover:bg-white/60 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full cursor-pointer hover:bg-white/60 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full cursor-pointer hover:bg-white/60 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <motion.div 
                    className="bg-white/10 rounded-lg p-2 md:p-4 cursor-pointer hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-white/80 text-xs md:text-sm">Revenue</div>
                    <div className="text-white text-lg md:text-xl font-bold">$45.2K</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 rounded-lg p-2 md:p-4 cursor-pointer hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-white/80 text-xs md:text-sm">Users</div>
                    <div className="text-white text-lg md:text-xl font-bold">2.4K</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 rounded-lg p-2 md:p-4 cursor-pointer hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-white/80 text-xs md:text-sm">Growth</div>
                    <div className="text-white text-lg md:text-xl font-bold">+12%</div>
                  </motion.div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-2 md:p-4">
                  <div className="text-white/80 text-xs md:text-sm mb-2">Performance</div>
                  <div className="flex space-x-1">
                    {[...Array(7)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-6 md:h-8 bg-green-400 rounded flex-1 cursor-pointer hover:bg-green-300 transition-colors"
                        initial={{ height: 0 }}
                        animate={{ height: i < 4 ? 24 : (i < 6 ? 20 : 16) }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 bg-yellow-400 rounded-full opacity-80 cursor-pointer"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity },
                rotate: { duration: 6, repeat: Infinity }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-12 md:h-12 bg-pink-400 rounded-full opacity-80 cursor-pointer"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 