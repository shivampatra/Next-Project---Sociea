'use client'

import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// 3D Animated Sphere Component
function AnimatedSphere() {
  const meshRef = useRef()
  
  // Rotate the sphere continuously
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })
  
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#667eea"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

// Particle system for background
function Particles({ count = 100 }) {
  const points = useRef()
  
  const particlesPosition = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 10
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 10
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 10
  }
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#f093fb"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}

// 3D Scene Component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f093fb" />
      
      {/* Main 3D Object */}
      <AnimatedSphere />
      
      {/* Particles */}
      <Particles count={150} />
      
      {/* Controls - allow user to interact */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Main Hero Component
export default function Hero() {
  const containerRef = useRef(null)
  
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  }
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }
  
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 z-1" />
      
      {/* Content */}
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          We Grow Your Brand's Voice on Social Media
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10"
          variants={itemVariants}
        >
          Transform your social presence into a powerful growth engine. We craft strategies that turn followers into loyal customers and engagement into revenue.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="px-10 py-5 text-lg gradient-bg text-white rounded-full font-semibold shadow-2xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Let's Talk
          </motion.a>
          
          <motion.a
            href="#portfolio"
            className="px-10 py-5 text-lg border-2 border-purple-600 text-purple-600 rounded-full font-semibold bg-white/80 backdrop-blur-sm"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#764ba2",
              color: "#ffffff",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg
          className="w-6 h-6 text-purple-600"
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
      </motion.div>
    </section>
  )
}