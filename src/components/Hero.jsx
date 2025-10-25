// 'use client'

// import { Suspense, useRef, useEffect } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
// import { motion } from 'framer-motion'
// import * as THREE from 'three'

// // 3D Animated Sphere Component
// function AnimatedSphere() {
//   const meshRef = useRef()
  
//   // Rotate the sphere continuously
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
//     }
//   })
  
//   return (
//     <Float
//       speed={2}
//       rotationIntensity={0.5}
//       floatIntensity={0.5}
//     >
//       <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
//         <MeshDistortMaterial
//           color="#667eea"
//           attach="material"
//           distort={0.4}
//           speed={2}
//           roughness={0.2}
//           metalness={0.8}
//         />
//       </Sphere>
//     </Float>
//   )
// }

// // Particle system for background
// function Particles({ count = 100 }) {
//   const points = useRef()
  
//   const particlesPosition = new Float32Array(count * 3)
  
//   for (let i = 0; i < count; i++) {
//     particlesPosition[i * 3] = (Math.random() - 0.5) * 10
//     particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 10
//     particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 10
//   }
  
//   useFrame((state) => {
//     if (points.current) {
//       points.current.rotation.y = state.clock.getElapsedTime() * 0.05
//     }
//   })
  
//   return (
//     <points ref={points}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={particlesPosition}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.02}
//         color="#f093fb"
//         sizeAttenuation
//         transparent
//         opacity={0.6}
//       />
//     </points>
//   )
// }

// // 3D Scene Component
// function Scene() {
//   return (
//     <>
//       {/* Lighting */}
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f093fb" />
      
//       {/* Main 3D Object */}
//       <AnimatedSphere />
      
//       {/* Particles */}
//       <Particles count={150} />
      
//       {/* Controls - allow user to interact */}
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.5}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//     </>
//   )
// }

// // Main Hero Component
// export default function Hero() {
//   const containerRef = useRef(null)
  
//   // Animation variants for Framer Motion
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   }
  
//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, 0.05, 0.01, 0.9]
//       }
//     }
//   }
  
//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.6, 0.05, 0.01, 0.9]
//       }
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     },
//     tap: {
//       scale: 0.95
//     }
//   }
  
//   return (
//     <section
//       id="home"
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//     >
//       {/* 3D Canvas Background */}
//       <div className="absolute inset-0 z-0">
//         <Canvas
//           camera={{ position: [0, 0, 5], fov: 75 }}
//           style={{ background: 'transparent' }}
//         >
//           <Suspense fallback={null}>
//             <Scene />
//           </Suspense>
//         </Canvas>
//       </div>
      
//       {/* Gradient overlay for depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 z-1" />
      
//       {/* Content */}
//       <motion.div
//         className="container mx-auto px-4 text-center relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
//           variants={itemVariants}
//         >
//           We Grow Your Brand's Voice on Social Media
//         </motion.h1>
        
//         <motion.p
//           className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10"
//           variants={itemVariants}
//         >
//           Transform your social presence into a powerful growth engine. We craft strategies that turn followers into loyal customers and engagement into revenue.
//         </motion.p>
        
//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           variants={itemVariants}
//         >
//           <motion.a
//             href="#contact"
//             className="px-10 py-5 text-lg gradient-bg text-white rounded-full font-semibold shadow-2xl"
//             variants={buttonVariants}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             Let's Talk
//           </motion.a>
          
//           <motion.a
//             href="#portfolio"
//             className="px-10 py-5 text-lg border-2 border-purple-600 text-purple-600 rounded-full font-semibold bg-white/80 backdrop-blur-sm"
//             variants={buttonVariants}
//             whileHover={{
//               scale: 1.05,
//               backgroundColor: "#764ba2",
//               color: "#ffffff",
//               transition: { duration: 0.3 }
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View Our Work
//           </motion.a>
//         </motion.div>
//       </motion.div>
      
//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
//       >
//         <svg
//           className="w-6 h-6 text-purple-600"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 14l-7 7m0 0l-7-7m7 7V3"
//           />
//         </svg>
//       </motion.div>
//     </section>
//   )
// }





















//2ND VERSION























'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere, Float, Sparkles } from '@react-three/drei'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

// Enhanced 3D Animated Sphere with glow
function EnhancedSphere({ mousePosition }) {
  const meshRef = useRef()
  const glowRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime()
      meshRef.current.rotation.x = t * 0.15 + mousePosition.y * 0.5
      meshRef.current.rotation.y = t * 0.2 + mousePosition.x * 0.5
      
      // Pulsing scale effect
      const scale = 2.5 + Math.sin(t * 0.5) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
    
    // Animated glow
    if (glowRef.current) {
      glowRef.current.scale.setScalar(2.8 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15)
      glowRef.current.material.opacity = 0.3 + Math.sin(state.clock.getElapsedTime() * 0.6) * 0.1
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      {/* Outer glow */}
      <Sphere ref={glowRef} args={[1, 64, 64]} scale={3.2}>
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.25}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Main sphere */}
      <Sphere 
        ref={meshRef} 
        args={[1, 128, 128]} 
        scale={2.5}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#8b5cf6" : "#667eea"}
          attach="material"
          distort={0.5}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          emissive={hovered ? "#a78bfa" : "#667eea"}
          emissiveIntensity={hovered ? 0.6 : 0.3}
        />
      </Sphere>
      
      {/* Inner sparkles */}
      <Sparkles
        count={50}
        scale={2.5}
        size={2}
        speed={0.4}
        color="#f0abfc"
        opacity={0.8}
      />
    </Float>
  )
}

// Enhanced particle system with depth
function EnhancedParticles({ count = 200, scrollY }) {
  const points = useRef()
  const particlesPosition = useRef(new Float32Array(count * 3))
  const particlesSizes = useRef(new Float32Array(count))
  
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      particlesPosition.current[i * 3] = (Math.random() - 0.5) * 15
      particlesPosition.current[i * 3 + 1] = (Math.random() - 0.5) * 15
      particlesPosition.current[i * 3 + 2] = (Math.random() - 0.5) * 10
      particlesSizes.current[i] = Math.random() * 0.04 + 0.01
    }
  }, [count])
  
  useFrame((state) => {
    if (points.current) {
      const t = state.clock.getElapsedTime()
      points.current.rotation.y = t * 0.03
      points.current.rotation.x = Math.sin(t * 0.02) * 0.1
      
      // Depth-based parallax
      const positions = points.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(t + positions[i3]) * 0.001
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particlesSizes.current}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#f0abfc"
        sizeAttenuation
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// Responsive 3D Scene
function Scene({ isMobile, mousePosition, scrollY }) {
  const { camera } = useThree()
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mousePosition.x * 0.5, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mousePosition.y * 0.3, 0.05)
  })
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#f0abfc" />
      <pointLight position={[0, 5, 5]} intensity={0.6} color="#667eea" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#c084fc" />
      
      <EnhancedSphere mousePosition={mousePosition} />
      <EnhancedParticles count={isMobile ? 80 : 200} scrollY={scrollY} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Typewriter component
function TypewriterText({ text, delay = 50 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])
  
  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="inline-block w-1 h-16 md:h-24 lg:h-32 bg-gradient-to-b from-purple-500 to-pink-500 ml-2 align-middle"
      />
    </span>
  )
}

// Main Hero Component
export default function Hero() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()
  const scrollYSpring = useSpring(scrollY, { stiffness: 100, damping: 30 })
  
  const yTransform = useTransform(scrollYSpring, [0, 500], [0, 150])
  const opacityTransform = useTransform(scrollYSpring, [0, 300], [1, 0])
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  }
  
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
    >
      {/* 3D Canvas */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity: opacityTransform }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
        >
          <Suspense fallback={null}>
            <Scene isMobile={isMobile} mousePosition={mousePosition} scrollY={scrollY} />
          </Suspense>
        </Canvas>
      </motion.div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-purple-900/40 z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-pink-900/10 z-1" />
      
      {/* Subtle animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 text-center relative z-10 pt-20 pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: yTransform }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight"
          variants={itemVariants}
        >
          <TypewriterText text="We Grow Your Brand's Voice on Social Media" delay={40} />
        </motion.h1>
        
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-purple-50 max-w-4xl mx-auto mb-10 drop-shadow-lg leading-relaxed px-4"
          variants={itemVariants}
        >
          Transform your social presence into a powerful growth engine. We craft strategies that turn followers into loyal customers and engagement into revenue.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="relative px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg bg-white text-purple-700 rounded-full font-bold shadow-2xl overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Let's Talk
            </span>
            <motion.span
              className="absolute inset-0 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <motion.a
            href="#portfolio"
            className="relative px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg border-2 border-white text-white rounded-full font-bold backdrop-blur-md bg-white/10 overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(240,171,252,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">View Our Work</span>
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-8 h-8 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <motion.div
            className="absolute inset-0 blur-xl bg-white/50"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 