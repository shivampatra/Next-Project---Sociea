'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

/**
 * Premium Loading Screen Component
 * Shows animated loader while page content loads
 */
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    // Set window dimensions on mount
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Logo */}
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 w-32 h-32 rounded-full border-4 border-transparent border-t-purple-500"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Middle Ring */}
            <motion.div
              className="absolute inset-2 w-28 h-28 rounded-full border-4 border-transparent border-r-pink-500"
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-4 w-24 h-24 rounded-full border-4 border-transparent border-b-blue-500"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Center Logo */}
            <motion.div
              className="relative w-32 h-32 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 200,
              }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(102, 126, 234, 0.5)',
                    '0 0 40px rgba(118, 75, 162, 0.8)',
                    '0 0 20px rgba(102, 126, 234, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-white text-3xl font-bold">S</span>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Loading Text */}
          <motion.div
            className="absolute bottom-32 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Loading ...
            </motion.h2>
            
            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-bg"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Progress Percentage */}
            <motion.p
              className="text-gray-400 mt-2"
              key={Math.floor(progress)}
            >
              {Math.floor(progress)}%
            </motion.p>
          </motion.div>
          
          {/* Animated Particles */}
          {dimensions.width > 0 && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-500 rounded-full"
                  initial={{
                    x: Math.random() * dimensions.width,
                    y: dimensions.height + 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: -20,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
/**
 * USAGE:
 * 
 * Add to your main page.jsx:
 * 
 * import LoadingScreen from '@/components/LoadingScreen'
 * 
 * export default function Home() {
 *   return (
 *     <>
 *       <LoadingScreen />
 *       <main>
 *         // Your content
 *       </main>
 *     </>
 *   )
 * }
 * 
 * Features:
 * - Animated concentric rings
 * - Pulsing logo
 * - Progress bar
 * - Floating particles
 * - Smooth exit animation
 */