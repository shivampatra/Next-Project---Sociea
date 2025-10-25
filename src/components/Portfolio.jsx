// 'use client';

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Image from 'next/image';

// export default function Portfolio() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const projects = [
//     {
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
//       title: 'TechStart Inc.',
//       description: 'Instagram Growth Campaign - 300% follower increase in 3 months',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
//       title: 'FitLife Gym',
//       description: 'Social Media Rebranding - 500+ new members from campaigns',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop',
//       title: 'Urban Cafe',
//       description: 'Content Strategy - 10M+ impressions, 85% engagement boost',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
//       title: 'Fashion Forward',
//       description: 'Influencer Campaign - $200K revenue in launch month',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
//       title: 'EcoProducts',
//       description: 'Lead Generation - 1,500 qualified leads, 22% conversion rate',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
//       title: 'Travel Tales',
//       description: 'Video Marketing - 5M views, 40K new subscribers',
//     },
//   ];

//   return (
//     <section id="portfolio" ref={ref} className="py-20 px-4 bg-white">
//       <div className="container mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
//         >
//           Our Portfolio
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center text-gray-600 mb-16 text-lg"
//         >
//           Real results for real businesses
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="rounded-3xl overflow-hidden shadow-lg group cursor-pointer relative"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute inset-0 bg-gradient-to-t from-blue-600 via-purple-600/90 to-transparent flex items-center justify-center p-6"
//                 >
//                   <div className="text-center text-white">
//                     <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
//                     <p className="text-white/90">{project.description}</p>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="text-center"
//         >
//           <a
//             href="#contact"
//             className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition duration-300"
//           >
//             View More Projects
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }







// 2ND VERSION ================================== ##################################################









import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      title: 'TechStart Inc.',
      description: 'Instagram Growth Campaign',
      metric: '300%',
      metricLabel: 'Follower Increase',
    },
    {
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
      title: 'FitLife Gym',
      description: 'Social Media Rebranding',
      metric: '500+',
      metricLabel: 'New Members',
    },
    {
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop',
      title: 'Urban Cafe',
      description: 'Content Strategy',
      metric: '10M+',
      metricLabel: 'Impressions',
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      title: 'Fashion Forward',
      description: 'Influencer Campaign',
      metric: '$200K',
      metricLabel: 'Launch Revenue',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      title: 'EcoProducts',
      description: 'Lead Generation',
      metric: '1,500',
      metricLabel: 'Qualified Leads',
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      title: 'Travel Tales',
      description: 'Video Marketing',
      metric: '5M',
      metricLabel: 'Video Views',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="portfolio" ref={ref} className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
            Our Portfolio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real results for real businesses. See how we've transformed brands and driven measurable growth.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Container with Glassmorphism */}
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  {/* Metric Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 inline-flex items-center self-start"
                  >
                    <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                      <div className="text-2xl sm:text-3xl font-bold text-white">
                        {project.metric}
                      </div>
                      <div className="text-xs sm:text-sm text-white/90">
                        {project.metricLabel}
                      </div>
                    </div>
                  </motion.div>

                  {/* Title & Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 touch-manipulation"
            style={{
              boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3)',
            }}
          >
            <span>View More Projects</span>
            <motion.svg
              className="w-5 h-5 sm:w-6 sm:h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}