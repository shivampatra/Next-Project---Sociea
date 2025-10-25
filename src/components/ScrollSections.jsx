// 'use client';

// import { useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function ScrollSections() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

//   const stats = [
//     { number: '500+', label: 'Happy Clients', icon: '😊' },
//     { number: '1M+', label: 'Posts Created', icon: '📱' },
//     { number: '95%', label: 'Client Retention', icon: '🎯' },
//     { number: '24/7', label: 'Support Available', icon: '💬' },
//   ];

//   return (
//     <section id="about" ref={ref} className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 90, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             rotate: [0, -90, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"
//         />
//       </div>

//       <motion.div
//         style={{ opacity, scale }}
//         className="container mx-auto relative z-10"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
//         >
//           About Us 
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
//         >
//           Welcome to Sociea, Odisha’s leading 360° marketing agency dedicated to transforming brands into powerful digital identities. We believe marketing isn’t just about promotion , it’s about creating meaningful connections, building trust, and driving real growth
//         </motion.p>



//           <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
//         >
//          Vision 
//         </motion.h2>

// <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
//         > To empower brands with innovative 360° marketing strategies that drive real growth, boost visibility, and build lasting customer trust
//         </motion.p>

//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
//         >
//           Mission 
//         </motion.h2>
// <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
//         >
//            To become Odisha’s most trusted and result-driven marketing agency, helping businesses grow and make a strong impact across India
//         </motion.p>




//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl border border-white/50"
//             >
//               <div className="text-5xl mb-4">{stat.icon}</div>
//               <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-gray-600 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }






//2ND VERSION ============================================================= ###########################









'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';

// Animated counter component for stats
function AnimatedCounter({ value, inView }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, numericValue]);

  return <span>{count}{suffix}</span>;
}

export default function ScrollSections() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Smooth spring animations for scroll-linked effects
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    { stiffness: 100, damping: 30 }
  );
  
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]),
    { stiffness: 100, damping: 30 }
  );

  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊', gradient: 'from-blue-500 to-cyan-500' },
    { number: '1M+', label: 'Posts Created', icon: '📱', gradient: 'from-purple-500 to-pink-500' },
    { number: '95%', label: 'Client Retention', icon: '🎯', gradient: 'from-orange-500 to-red-500' },
    { number: '24/7', label: 'Support Available', icon: '💬', gradient: 'from-green-500 to-emerald-500' },
  ];

  const sections = [
    {
      title: 'About Us',
      content: "Welcome to Sociea, Odisha's leading 360° marketing agency dedicated to transforming brands into powerful digital identities. We believe marketing isn't just about promotion, it's about creating meaningful connections, building trust, and driving real growth."
    },
    {
      title: 'Vision',
      content: 'To empower brands with innovative 360° marketing strategies that drive real growth, boost visibility, and build lasting customer trust.'
    },
    {
      title: 'Mission',
      content: "To become Odisha's most trusted and result-driven marketing agency, helping businesses grow and make a strong impact across India."
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref} 
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      aria-label="About Sociea"
    >
      {/* Animated Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blob 1 - Top Left */}
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -top-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Gradient Blob 2 - Bottom Right */}
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Additional ambient blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 pointer-events-none" />

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto max-w-7xl relative z-10"
      >
        {/* Content Sections */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32 mb-20 sm:mb-28 lg:mb-32">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
                  {section.title}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4"
              >
                {section.content}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl overflow-hidden">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl sm:text-5xl lg:text-6xl mb-4"
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.2
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                    <AnimatedCounter value={stat.number} inView={statsInView} />
                  </div>
                  
                  <div className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg">
                    {stat.label}
                  </div>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}