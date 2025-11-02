'use client'

// const { version } = require("react");

// import { motion, AnimatePresence } from 'framer-motion'
// import { useState, useEffect } from 'react'

// /**
//  * Premium Loading Screen Component
//  * Shows animated loader while page content loads
//  */
// export default function LoadingScreen() {
//   const [isLoading, setIsLoading] = useState(true)
//   const [progress, setProgress] = useState(0)
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
//   useEffect(() => {
//     // Set window dimensions on mount
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight
//     })
    
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval)
//           setTimeout(() => setIsLoading(false), 500)
//           return 100
//         }
//         return prev + Math.random() * 15
//       })
//     }, 200)
    
//     return () => clearInterval(interval)
//   }, [])
  
//   return (
//     <AnimatePresence>
//       {isLoading && (
//         <motion.div
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Animated Logo */}
//           <div className="relative">
//             {/* Outer Ring */}
//             <motion.div
//               className="absolute inset-0 w-32 h-32 rounded-full border-4 border-transparent border-t-purple-500"
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />
            
//             {/* Middle Ring */}
//             <motion.div
//               className="absolute inset-2 w-28 h-28 rounded-full border-4 border-transparent border-r-pink-500"
//               animate={{ rotate: -360 }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />
            
//             {/* Inner Ring */}
//             <motion.div
//               className="absolute inset-4 w-24 h-24 rounded-full border-4 border-transparent border-b-blue-500"
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 2.5,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />
            
//             {/* Center Logo */}
//             <motion.div
//               className="relative w-32 h-32 flex items-center justify-center"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 duration: 0.5,
//                 type: 'spring',
//                 stiffness: 200,
//               }}
//             >
//               <motion.div
//                 className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center shadow-2xl"
//                 animate={{
//                   boxShadow: [
//                     '0 0 20px rgba(102, 126, 234, 0.5)',
//                     '0 0 40px rgba(118, 75, 162, 0.8)',
//                     '0 0 20px rgba(102, 126, 234, 0.5)',
//                   ],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//               >
//                 <span className="text-white text-3xl font-bold">S</span>
//               </motion.div>
//             </motion.div>
//           </div>
          
//           {/* Loading Text */}
//           <motion.div
//             className="absolute bottom-32 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <motion.h2
//               className="text-2xl font-bold text-white mb-4"
//               animate={{
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             >
//               Loading ...
//             </motion.h2>
            
//             {/* Progress Bar */}
//             <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
//               <motion.div
//                 className="h-full gradient-bg"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${progress}%` }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
            
//             {/* Progress Percentage */}
//             <motion.p
//               className="text-gray-400 mt-2"
//               key={Math.floor(progress)}
//             >
//               {Math.floor(progress)}%
//             </motion.p>
//           </motion.div>
          
//           {/* Animated Particles */}
//           {dimensions.width > 0 && (
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//               {[...Array(20)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-2 h-2 bg-purple-500 rounded-full"
//                   initial={{
//                     x: Math.random() * dimensions.width,
//                     y: dimensions.height + 20,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     y: -20,
//                     opacity: [0, 1, 0],
//                   }}
//                   transition={{
//                     duration: Math.random() * 3 + 2,
//                     repeat: Infinity,
//                     delay: Math.random() * 2,
//                     ease: 'linear',
//                   }}
//                 />
//               ))}
//             </div>
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
// /**
//  * USAGE:
//  * 
//  * Add to your main page.jsx:
//  * 
//  * import LoadingScreen from '@/components/LoadingScreen'
//  * 
//  * export default function Home() {
//  *   return (
//  *     <>
//  *       <LoadingScreen />
//  *       <main>
//  *         // Your content
//  *       </main>
//  *     </>
//  *   )
//  * }
//  * 
//  * Features:
//  * - Animated concentric rings
//  * - Pulsing logo
//  * - Progress bar
//  * - Floating particles
//  * - Smooth exit animation
//  */

// VERSION 3 ######################################################################################################################################
// VERSION 3 ######################################################################################################################################
// VERSION 3 ######################################################################################################################################
// VERSION 3 ######################################################################################################################################

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  
  const greetings = ['ନମସ୍କାର', 'Hello', 'नमस्ते']
  
  // Generate all random values once using useMemo to ensure consistency
  const streakData = useMemo(() => 
    [...Array(5)].map((_, i) => ({
      height: Math.random() * 80 + 40,
      left: Math.random() * 100,
      color: i % 3 === 0 ? 'rgba(124, 82, 216, 0.3)' : 
             i % 3 === 1 ? 'rgba(219, 67, 144, 0.3)' : 
             'rgba(52, 118, 235, 0.3)',
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 6
    })), []
  )
  
  const particleData = useMemo(() => 
    [...Array(10)].map((_, i) => {
      const angle = (i / 10) * Math.PI * 2
      const distance = 60 + Math.random() * 40
      return {
        angle,
        distance,
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        color: ['rgba(124, 82, 216, 0.9)', 'rgba(219, 67, 144, 0.9)', 'rgba(52, 118, 235, 0.9)'][i % 3]
      }
    }), []
  )
  
  const parallaxParticles = useMemo(() => 
    [...Array(25)].map((_, i) => {
      const depth = Math.random()
      const size = depth * 5 + 1.5
      const glowIntensity = 0.5 + Math.random() * 0.5
      const color = ['rgba(124, 82, 216, ' + glowIntensity + ')', 
                     'rgba(219, 67, 144, ' + glowIntensity + ')', 
                     'rgba(52, 118, 235, ' + glowIntensity + ')'][i % 3]
      
      return {
        depth,
        size,
        startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
        drift: (Math.random() - 0.5) * 250 * depth,
        speed: (1 - depth) * 5 + 2.5,
        glowIntensity,
        color,
        delay: Math.random() * 5
      }
    }), []
  )
  
  useEffect(() => {
    // Mark as mounted to prevent hydration issues
    setIsMounted(true)
    
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 1500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
    
    const greetingInterval = setInterval(() => {
      setGreetingIndex(prev => (prev + 1) % greetings.length)
    }, 2800)
    
    return () => {
      clearInterval(interval)
      clearInterval(greetingInterval)
    }
  }, [greetings.length])
  
  const circumference = 2 * Math.PI * 70
  const strokeDashoffset = circumference - (progress / 100) * circumference
  const isComplete = progress >= 100
  
  // Don't render dynamic content until mounted to prevent hydration errors
  if (!isMounted) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #0d0818 0%, #030105 100%)'
        }}
      />
    )
  }
  
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, #0d0818 0%, #030105 100%)'
          }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            filter: 'blur(10px)'
          }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Aurora Background - GPU Optimized */}
          <motion.div
            className="absolute inset-0"
            style={{
              willChange: 'background'
            }}
            animate={{
              background: [
                'radial-gradient(ellipse 900px 700px at 15% 25%, rgba(124, 82, 216, 0.18) 0%, transparent 55%), radial-gradient(ellipse 700px 900px at 85% 75%, rgba(219, 67, 144, 0.14) 0%, transparent 55%)',
                'radial-gradient(ellipse 900px 700px at 85% 75%, rgba(219, 67, 144, 0.18) 0%, transparent 55%), radial-gradient(ellipse 700px 900px at 15% 25%, rgba(52, 118, 235, 0.14) 0%, transparent 55%)',
                'radial-gradient(ellipse 900px 700px at 50% 50%, rgba(52, 118, 235, 0.18) 0%, transparent 55%), radial-gradient(ellipse 700px 900px at 50% 50%, rgba(124, 82, 216, 0.14) 0%, transparent 55%)',
                'radial-gradient(ellipse 900px 700px at 15% 25%, rgba(124, 82, 216, 0.18) 0%, transparent 55%), radial-gradient(ellipse 700px 900px at 85% 75%, rgba(219, 67, 144, 0.14) 0%, transparent 55%)',
              ]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Noise Shimmer Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 255, 255, 0.015) 1px, transparent 2px)',
              mixBlendMode: 'overlay',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Nebula Clouds - GPU Optimized */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`nebula-${i}`}
              className="absolute rounded-full"
              style={{
                width: 450 + i * 120,
                height: 450 + i * 120,
                background: `radial-gradient(circle, ${
                  i === 0 ? 'rgba(124, 82, 216, 0.06)' : 
                  i === 1 ? 'rgba(219, 67, 144, 0.05)' : 
                  'rgba(52, 118, 235, 0.04)'
                } 0%, transparent 75%)`,
                filter: `blur(${70 + i * 10}px)`,
                left: '50%',
                top: '50%',
                marginLeft: -(225 + i * 60),
                marginTop: -(225 + i * 60),
                opacity: 1 - i * 0.2,
                willChange: 'transform'
              }}
              animate={{
                scale: [1, 1.25, 0.95, 1],
                x: [0, 40, -40, 0],
                y: [0, -40, 40, 0],
              }}
              transition={{
                duration: 11 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1.2
              }}
            />
          ))}
          
          {/* Light Streaks - Using pre-generated data */}
          {streakData.map((streak, i) => (
            <motion.div
              key={`streak-${i}`}
              className="absolute"
              style={{
                width: 1.5,
                height: streak.height,
                background: `linear-gradient(to bottom, transparent, ${streak.color}, transparent)`,
                left: `${streak.left}%`,
                top: -100,
                willChange: 'transform, opacity'
              }}
              animate={{
                y: dimensions.height + 200,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: streak.duration,
                repeat: Infinity,
                delay: streak.delay,
                ease: 'linear',
              }}
            />
          ))}
          
          {/* Main Vortex Container - Staggered Exit */}
          <motion.div 
            className="relative w-96 h-96 flex items-center justify-center"
            animate={isComplete ? { 
              scale: [1, 0.3, 0],
              opacity: [1, 1, 0],
            } : {}}
            transition={isComplete ? { 
              duration: 1.5, 
              times: [0, 0.7, 1],
              ease: [0.43, 0.13, 0.23, 0.96] 
            } : {}}
          >
            {/* Outer Soft Bloom */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 360,
                height: 360,
                background: 'radial-gradient(circle, rgba(124, 82, 216, 0.08) 0%, rgba(219, 67, 144, 0.05) 50%, transparent 80%)',
                filter: 'blur(50px)',
                willChange: 'transform, opacity'
              }}
              animate={isComplete ? {
                scale: [1, 0.3],
                opacity: [0.5, 0],
              } : {
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={isComplete ? {
                duration: 1.5,
                ease: 'easeOut',
                delay: 0.3
              } : {
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Greeting-Synced Pulse Ring */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`pulse-${greetingIndex}`}
                className="absolute rounded-full"
                style={{
                  width: 280,
                  height: 280,
                  background: 'radial-gradient(circle, rgba(124, 82, 216, 0.12) 0%, transparent 70%)',
                  filter: 'blur(35px)',
                  willChange: 'transform, opacity'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 0.6, 0] }}
                exit={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </AnimatePresence>
            
            {/* Outer Ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 260,
                height: 260,
                border: '2px solid transparent',
                borderTopColor: 'rgba(124, 82, 216, 0.6)',
                borderRightColor: 'rgba(219, 67, 144, 0.3)',
                filter: 'drop-shadow(0 0 15px rgba(124, 82, 216, 0.5))',
                willChange: 'transform, opacity'
              }}
              animate={isComplete ? {
                rotate: 360,
                scale: [1, 0.3],
                opacity: [1, 0],
              } : {
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={isComplete ? {
                duration: 1.5,
                ease: 'easeOut',
                delay: 0.1
              } : {
                rotate: { duration: 5, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
            
            {/* Middle Ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 200,
                height: 200,
                border: '2px solid transparent',
                borderBottomColor: 'rgba(219, 67, 144, 0.75)',
                borderLeftColor: 'rgba(52, 118, 235, 0.4)',
                filter: 'drop-shadow(0 0 18px rgba(219, 67, 144, 0.6))',
                willChange: 'transform, opacity'
              }}
              animate={isComplete ? {
                rotate: -360,
                scale: [1, 0.3],
                opacity: [1, 0],
              } : {
                rotate: -360,
                scale: [1, 0.95, 1],
              }}
              transition={isComplete ? {
                duration: 1.5,
                ease: 'easeOut',
                delay: 0.15
              } : {
                rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
            
            {/* Inner Ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 140,
                height: 140,
                border: '2.5px solid transparent',
                borderTopColor: 'rgba(52, 118, 235, 0.9)',
                borderBottomColor: 'rgba(124, 82, 216, 0.6)',
                filter: 'drop-shadow(0 0 22px rgba(52, 118, 235, 0.8))',
                willChange: 'transform, opacity'
              }}
              animate={isComplete ? {
                rotate: 360,
                scale: [1, 0.3],
                opacity: [1, 0],
              } : {
                rotate: 360,
              }}
              transition={isComplete ? {
                duration: 1.5,
                ease: 'easeOut',
                delay: 0.2
              } : {
                duration: 4,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            {/* Core Orb - Greeting Synced */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`orb-${greetingIndex}`}
                className="absolute rounded-full"
                style={{
                  width: 130,
                  height: 130,
                  background: 'radial-gradient(circle, rgba(124, 82, 216, 1) 0%, rgba(219, 67, 144, 0.8) 35%, rgba(52, 118, 235, 0.4) 65%, transparent 100%)',
                  filter: 'blur(10px)',
                  willChange: 'transform, opacity'
                }}
                initial={{ scale: 0.85, opacity: 0.5 }}
                animate={isComplete ? {
                  scale: [1, 0.3],
                  opacity: [0.9, 0],
                } : {
                  scale: [0.85, 1.4, 0.85],
                  opacity: [0.5, 1, 0.5],
                }}
                exit={{ scale: 0.7, opacity: 0.3 }}
                transition={isComplete ? {
                  duration: 1.5,
                  ease: 'easeOut',
                  delay: 0.25
                } : {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </AnimatePresence>
            
            {/* Progress Ring */}
            <svg className="absolute" width="220" height="220" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="110"
                cy="110"
                r="70"
                fill="none"
                stroke="rgba(255, 255, 255, 0.03)"
                strokeWidth="2"
              />
              <motion.circle
                cx="110"
                cy="110"
                r="70"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={circumference}
                animate={{ 
                  strokeDashoffset,
                  opacity: isComplete ? 0 : 1,
                }}
                transition={{ 
                  strokeDashoffset: { duration: 0.3, ease: 'easeOut' },
                  opacity: { duration: 0.8 }
                }}
                style={{ 
                  filter: 'drop-shadow(0 0 10px rgba(124, 82, 216, 0.9)) drop-shadow(0 0 20px rgba(219, 67, 144, 0.5))',
                }}
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(124, 82, 216, 1)" />
                  <stop offset="50%" stopColor="rgba(219, 67, 144, 1)" />
                  <stop offset="100%" stopColor="rgba(52, 118, 235, 1)" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Greeting Text - Properly cycling through all greetings */}
            <motion.div
              className="relative z-10"
              animate={{ opacity: isComplete ? 0 : 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-32 flex items-center justify-center" style={{ width: '400px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={greetingIndex}
                    className="absolute inset-0 flex items-center justify-center text-7xl font-bold whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124, 82, 216, 1) 0%, rgba(219, 67, 144, 1) 50%, rgba(52, 118, 235, 1) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      willChange: 'transform, opacity'
                    }}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.75,
                      y: 30,
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.75,
                      y: -30,
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                  >
                    {greetings[greetingIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Trail Particles - Using pre-generated data */}
              <AnimatePresence mode="wait">
                <motion.div key={`particles-${greetingIndex}`}>
                  {particleData.map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: particle.width,
                        height: particle.height,
                        background: particle.color,
                        boxShadow: '0 0 12px currentColor, 0 0 24px currentColor',
                        left: '50%',
                        top: '50%',
                        willChange: 'transform, opacity'
                      }}
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0.6, 0],
                        x: Math.cos(particle.angle) * particle.distance,
                        y: Math.sin(particle.angle) * particle.distance,
                        scale: [0, 1.2, 0.8, 0],
                      }}
                      transition={{ 
                        duration: 1.4, 
                        ease: [0.43, 0.13, 0.23, 0.96],
                        delay: i * 0.04 
                      }}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            {/* Flickering Center Sparks */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const radius = 75
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 2.5,
                    height: 2.5,
                    background: ['rgba(124, 82, 216, 1)', 'rgba(219, 67, 144, 1)', 'rgba(52, 118, 235, 1)'][i % 3],
                    boxShadow: '0 0 6px currentColor',
                    left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                    top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    willChange: 'transform, opacity'
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: 'easeInOut'
                  }}
                />
              )
            })}
          </motion.div>
          
          {/* 3D Parallax Particles - Using pre-generated data */}
          {dimensions.width > 0 && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {parallaxParticles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    background: particle.color,
                    boxShadow: `0 0 ${particle.size * 2.5}px ${particle.color}`,
                    filter: particle.depth < 0.3 ? 'blur(1.5px)' : 'blur(0px)',
                    willChange: 'transform, opacity'
                  }}
                  initial={{
                    x: particle.startX,
                    y: dimensions.height + 20,
                    opacity: 0,
                  }}
                  animate={{
                    x: particle.startX + particle.drift,
                    y: -20,
                    opacity: [0, particle.depth * particle.glowIntensity, particle.depth * particle.glowIntensity, 0],
                  }}
                  transition={{
                    duration: particle.speed,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Completion Flash Effect */}
          {isComplete && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 2, 3],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.5, 1],
                ease: 'easeOut'
              }}
            >
              <div
                className="w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(124, 82, 216, 0.4) 30%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}