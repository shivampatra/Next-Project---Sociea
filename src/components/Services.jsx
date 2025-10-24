'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      gradient: 'from-blue-600 to-purple-600',
      borderGradient: 'from-blue-600 via-purple-600 to-pink-500',
      title: 'Social Media Management',
      description: 'Complete social media oversight with content planning, scheduling, and community engagement across all platforms.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-600 to-pink-600',
      borderGradient: 'from-purple-600 via-pink-600 to-blue-500',
      title: 'Content Creation',
      description: 'Professional photos, videos, reels, and graphics designed to capture attention and drive engagement.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-pink-600 to-blue-600',
      borderGradient: 'from-pink-600 via-blue-600 to-purple-500',
      title: 'Advertising Campaigns',
      description: 'Strategic paid campaigns on Facebook, Instagram, and Google to maximize reach and generate qualified leads.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-blue-600 to-purple-600',
      borderGradient: 'from-blue-600 via-purple-600 to-pink-500',
      title: 'Branding',
      description: 'Build a powerful brand identity with cohesive visuals, messaging, and positioning that resonates with your audience.',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-16 text-lg"
        >
          Complete solutions to elevate your brand
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.borderGradient} origin-left`}
              />
              <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}