'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechFlow Solutions',
      content: 'BrewTk transformed our business with their innovative web application. The team delivered exactly what we needed, on time and within budget. Their expertise in cloud infrastructure has given us a competitive edge.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'David Chen',
      role: 'CTO',
      company: 'InnovateCorp',
      content: 'Working with BrewTk has been exceptional. Their AI solutions helped us automate critical processes and improve efficiency by 40%. The team is professional, responsive, and truly understands our business needs.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'GreenTech Industries',
      content: 'BrewTk&apos;s DevOps expertise helped us scale our infrastructure seamlessly. Their ongoing support and maintenance have been invaluable. Highly recommend their services for any business looking to modernize.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'Michael Thompson',
      role: 'Founder',
      company: 'StartupXYZ',
      content: 'As a startup, we needed a partner who could grow with us. BrewTk delivered a scalable solution that has supported our rapid growth. Their UI/UX design work exceeded our expectations.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Lisa Wang',
      role: 'Product Manager',
      company: 'DataDrive Inc',
      content: 'The QA and testing services from BrewTk ensured our product launched flawlessly. Their attention to detail and comprehensive testing approach gave us confidence in our release.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Wilson',
      role: 'IT Director',
      company: 'Enterprise Solutions',
      content: 'BrewTk&apos;s consulting services helped us develop a clear technology roadmap. Their strategic insights and technical expertise have been instrumental in our digital transformation journey.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with BrewTk.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Quote Icon */}
              <div className="mb-4 md:mb-6">
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  whileTap={{ rotate: 180, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-blue-800" />
                </motion.div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center mr-3 md:mr-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-semibold text-xs md:text-sm">
                    {testimonial.avatar}
                  </span>
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm md:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs md:text-sm text-blue-800">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-800 mb-1 md:mb-2 group-hover:text-blue-900 transition-colors">
                  98%
                </div>
                <div className="text-gray-600 text-xs md:text-sm group-hover:text-blue-800 transition-colors">
                  Client Satisfaction
                </div>
              </motion.div>
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-800 mb-1 md:mb-2 group-hover:text-blue-900 transition-colors">
                  4.9/5
                </div>
                <div className="text-gray-600 text-xs md:text-sm group-hover:text-blue-800 transition-colors">
                  Average Rating
                </div>
              </motion.div>
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-800 mb-1 md:mb-2 group-hover:text-blue-900 transition-colors">
                  95%
                </div>
                <div className="text-gray-600 text-xs md:text-sm group-hover:text-blue-800 transition-colors">
                  Project Success Rate
                </div>
              </motion.div>
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-800 mb-1 md:mb-2 group-hover:text-blue-900 transition-colors">
                  24/7
                </div>
                <div className="text-gray-600 text-xs md:text-sm group-hover:text-blue-800 transition-colors">
                  Support Available
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Let&apos;s discuss how we can help transform your business with our innovative solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base"
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