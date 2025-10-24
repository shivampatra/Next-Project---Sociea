'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      title: 'TechStart Inc.',
      description: 'Instagram Growth Campaign - 300% follower increase in 3 months',
    },
    {
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
      title: 'FitLife Gym',
      description: 'Social Media Rebranding - 500+ new members from campaigns',
    },
    {
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop',
      title: 'Urban Cafe',
      description: 'Content Strategy - 10M+ impressions, 85% engagement boost',
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      title: 'Fashion Forward',
      description: 'Influencer Campaign - $200K revenue in launch month',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      title: 'EcoProducts',
      description: 'Lead Generation - 1,500 qualified leads, 22% conversion rate',
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      title: 'Travel Tales',
      description: 'Video Marketing - 5M views, 40K new subscribers',
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Our Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-16 text-lg"
        >
          Real results for real businesses
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl overflow-hidden shadow-lg group cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-600 via-purple-600/90 to-transparent flex items-center justify-center p-6"
                >
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}