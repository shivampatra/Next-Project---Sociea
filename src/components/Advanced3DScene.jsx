'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { vertexShader, fragmentShader, createShaderUniforms, updateShaderTime } from '@/shaders/gradientShader'

/**
 * Advanced 3D Scene Component with Custom Shaders
 * This is an enhanced version you can use instead of the basic Hero 3D
 */

// Custom Shader Material Sphere
function ShaderSphere() {
  const meshRef = useRef()
  const uniforms = useMemo(() => createShaderUniforms(), [])
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the mesh
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      
      // Update shader time
      updateShaderTime(uniforms, delta)
    }
  })
  
  return (
    <Sphere ref={meshRef} args={[1.5, 128, 128]} scale={1.8}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </Sphere>
  )
}

// Animated Ring Component
function AnimatedRings() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })
  
  return (
    <group ref={groupRef}>
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, (Math.PI / 3) * i]}
          position={[0, 0, 0]}
        >
          <torusGeometry args={[2 + i * 0.3, 0.02, 16, 100]} />
          <meshStandardMaterial
            color={i === 0 ? '#667eea' : i === 1 ? '#764ba2' : '#f093fb'}
            emissive={i === 0 ? '#667eea' : i === 1 ? '#764ba2' : '#f093fb'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating Particles with Custom Geometry
function FloatingParticles({ count = 200 }) {
  const pointsRef = useRef()
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    const colorPalette = [
      new THREE.Color('#667eea'),
      new THREE.Color('#764ba2'),
      new THREE.Color('#f093fb'),
    ]
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
      
      // Color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      
      // Size
      sizes[i] = Math.random() * 0.05 + 0.02
    }
    
    return { positions, colors, sizes }
  }, [count])
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Holographic Grid Background
function HolographicGrid() {
  const gridRef = useRef()
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2 - 1
    }
  })
  
  return (
    <group position={[0, 0, -5]}>
      <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshBasicMaterial
          color="#667eea"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}

// Main Scene Component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f093fb" />
      <pointLight position={[10, 5, 5]} intensity={0.3} color="#667eea" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#764ba2"
      />
      
      {/* Environment for reflections */}
      <Environment preset="sunset" />
      
      {/* Main 3D Objects */}
      <ShaderSphere />
      <AnimatedRings />
      <FloatingParticles count={300} />
      <HolographicGrid />
      
      {/* Camera Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        dampingFactor={0.05}
        rotateSpeed={0.5}
      />
    </>
  )
}

// Export the complete 3D Canvas
export default function Advanced3DScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        dpr={[1, 2]} // Device pixel ratio for sharp rendering
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

/**
 * USAGE INSTRUCTIONS:
 * 
 * Replace the 3D canvas in Hero.jsx with this component:
 * 
 * import Advanced3DScene from '@/components/Advanced3DScene'
 * 
 * <Advanced3DScene />
 * 
 * This provides:
 * - Custom GLSL shader effects
 * - Multiple animated objects
 * - Particle systems with color variation
 * - Holographic grid background
 * - Enhanced lighting and environment
 * - Better performance optimization
 */