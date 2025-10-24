'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechStart Inc.',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      text: '"Sociea transformed our social media presence completely. Within 3 months, we saw a 300% increase in followers and our engagement rates doubled. Their creative team is exceptional!"',
    },
    {
      name: 'Priya Sharma',
      position: 'Founder, FitLife Gym',
      avatar: 'https://i.pravatar.cc/100?img=5',
      rating: 5,
      text: '"The ROI from Sociea\'s campaigns has been incredible. We\'ve gained 500+ new members directly from their social media strategies. Professional, creative, and results-driven!"',
    },
    {
      name: 'Amit Patel',
      position: 'Owner, Urban Cafe',
      avatar: 'https://i.pravatar.cc/100?img=8',
      rating: 5,
      text: '"Best decision we made for our business! Sociea\'s content is always on-brand and engaging. Our foot traffic increased by 60% thanks to their local marketing campaigns."',
    },
  ]
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      }
    }
  }
  
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Success stories from businesses we've helped grow
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-3xl shadow-lg scroll-item"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <motion.div 
                className="text-yellow-400 mb-4 text-xl flex"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={inView ? { opacity: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>
              
              <p className="text-gray-600 italic">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}