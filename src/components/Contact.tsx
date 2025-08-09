'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState('')

  const services = [
    'Web Applications',
    'Cloud & DevOps',
    'AI Services',
    'UI/UX Design',
    'QA & Testing',
    'IT Consulting'
  ]

  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@brewtk.com',
      description: 'Send us an email anytime',
      icon: Mail
    },
    {
      title: 'Office',
      value: 'Lahore, Pakistan',
      description: 'Visit us at our office',
      icon: MapPin
    }
  ]

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.')
      }

      // Success
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
      setErrors({})
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <section id="contact" className="py-20 bg-white" role="region" aria-label="Contact Us">
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss your project and how we can help 
            you achieve your goals with our IT solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Start Your Project
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 md:py-8"
              >
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3 md:mb-4" />
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  We&apos;ve received your message and will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" itemScope itemType="https://schema.org/ContactPage">
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                       className={`w-full px-3 py-2.5 md:px-4 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors text-gray-900 text-sm md:text-base ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="John Cena"
                      whileFocus={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 text-xs mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                     className={`w-full px-3 py-2.5 md:px-4 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors text-gray-900 text-sm md:text-base ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="johncena@wwe.com"
                      whileFocus={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 text-xs mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <motion.input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                     className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors text-gray-900 text-sm md:text-base"
                      placeholder="WWE Inc."
                      whileFocus={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <motion.select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                     className={`w-full px-3 py-2.5 md:px-4 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors text-gray-900 text-sm md:text-base ${
                        errors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      whileFocus={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <option value="">What are you looking for ?</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </motion.select>
                    {errors.service && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 text-xs mt-1"
                      >
                        {errors.service}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-3 py-2.5 md:px-4 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors resize-none text-gray-900 text-sm md:text-base ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project, goals, and timeline..."
                    whileFocus={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-xs mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl text-sm md:text-base ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                We&apos;re here to help you succeed. Reach out to us through any of the channels below, 
                and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 md:space-x-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  whileTap={{ x: 5 }}
                >
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    whileTap={{ rotate: 180, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-800" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors text-sm md:text-base">
                      {info.title}
                    </h4>
                    <p className="text-blue-800 font-medium mb-1 group-hover:text-blue-900 transition-colors text-sm md:text-base">
                      {info.value}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-4 md:p-6 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                What to Expect
              </h4>
              <ul className="space-y-2 text-gray-600">
                {[
                  'Free consultation call within 24 hours',
                  'Detailed project proposal within 1-2 days',
                  'Transparent pricing and timeline',
                  'Ongoing support and maintenance'
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    className="flex items-center group text-xs md:text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 2 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-700 rounded-full mr-2 md:mr-3 group-hover:bg-blue-800 transition-colors"
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.8 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 