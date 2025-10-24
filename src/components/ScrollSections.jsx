'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollSections() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '1M+', label: 'Posts Created', icon: '📱' },
    { number: '95%', label: 'Client Retention', icon: '🎯' },
    { number: '24/7', label: 'Support Available', icon: '💬' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Growing Brands Since 2018
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          We're a passionate team of social media experts, content creators, and strategists dedicated to helping brands tell their stories and connect with their audiences in meaningful ways.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl border border-white/50"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}