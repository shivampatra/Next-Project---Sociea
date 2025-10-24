import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// Main About Section Component
const ModernAboutSection = () => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);

  // Team members data
  const teamMembers = [
    {
      name: 'Arjun Mehta',
      role: 'Creative Director',
      image: 'https://i.pravatar.cc/150?img=12',
      color: '#3B82F6'
    },
    {
      name: 'Sneha Reddy',
      role: 'Strategy Lead',
      image: 'https://i.pravatar.cc/150?img=20',
      color: '#8B5CF6'
    },
    {
      name: 'Vikram Singh',
      role: 'Content Manager',
      image: 'https://i.pravatar.cc/150?img=33',
      color: '#EC4899'
    },
    {
      name: 'Neha Kapoor',
      role: 'Analytics Expert',
      image: 'https://i.pravatar.cc/150?img=45',
      color: '#10B981'
    }
  ];

  // Three.js Setup: Creates floating particles and animated 3D background
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: '#8B5CF6',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create glowing orbs
    const orbGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    const orbMaterial = new THREE.MeshPhongMaterial({
      color: '#3B82F6',
      emissive: '#3B82F6',
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.7
    });

    const orbs = [];
    for (let i = 0; i < 5; i++) {
      const orb = new THREE.Mesh(orbGeometry, orbMaterial.clone());
      orb.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 3
      );
      orbs.push(orb);
      scene.add(orb);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 1, 100);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate particles slowly
      particlesMesh.rotation.y = time * 0.1;
      particlesMesh.rotation.x = time * 0.05;

      // Animate orbs in a floating pattern
      orbs.forEach((orb, i) => {
        orb.position.y = Math.sin(time + i) * 0.5;
        orb.rotation.y = time * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(canvasRef.current.parentElement);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="about" className="relative py-20 px-4 bg-white overflow-hidden min-h-screen">
      {/* Three.js Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ zIndex: 0 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title with gradient and fade-in animation */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Story
          </h2>
        </div>

        {/* Description with delayed fade-in */}
        <div
          className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
            Founded with a mission to democratize digital marketing, Sociea has helped hundreds of businesses transform their online presence into powerful growth engines. We believe every brand has a unique story worth sharing, and we're here to amplify yours.
          </p>
        </div>

        {/* Team Section with glass morphism effect */}
        <div
          className={`relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl animate-pulse" />

          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 relative z-10">
            Meet Our Team
          </h3>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${600 + index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Image container with 3D hover effect */}
                <div className="relative inline-block mb-4">
                  <div
                    className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                      hoveredMember === index ? 'opacity-70 scale-110' : 'opacity-0 scale-100'
                    }`}
                    style={{ backgroundColor: member.color }}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg relative z-10 transition-all duration-500 transform ${
                      hoveredMember === index 
                        ? 'scale-110 rotate-3 shadow-2xl' 
                        : 'scale-100 rotate-0'
                    }`}
                  />
                  {/* Orbiting ring effect on hover */}
                  {hoveredMember === index && (
                    <div 
                      className="absolute inset-0 rounded-full border-2 animate-spin-slow"
                      style={{ 
                        borderColor: member.color,
                        borderStyle: 'dashed',
                        animationDuration: '3s'
                      }}
                    />
                  )}
                </div>

                {/* Name and role with slide-up animation */}
                <div className={`transition-all duration-500 ${
                  hoveredMember === index ? 'transform -translate-y-1' : ''
                }`}>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {member.name}
                  </h4>
                  <p 
                    className="text-gray-600 transition-colors duration-300"
                    style={{ 
                      color: hoveredMember === index ? member.color : undefined 
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ModernAboutSection;