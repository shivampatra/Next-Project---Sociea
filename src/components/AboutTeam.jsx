// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// // Main About Section Component
// const ModernAboutSection = () => {
//   const canvasRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);

//   // Team members data
//   const teamMembers = [
//     {
//       name: 'Bishmay Sahoo',
//       role: 'Marketing lead',
//       image: 'https://i.pravatar.cc/150?img=12',
//       color: '#3B82F6'
//     },
//     {
//       name: 'Sidharth',
//       role: ' Videographer',
//       image: 'https://i.pravatar.cc/150?img=20',
//       color: '#8B5CF6'
//     },
//     {
//       name: 'Satyaprakash',
//       role: 'Content Creator',
//       image: 'https://i.pravatar.cc/150?img=33',
//       color: '#EC4899'
//     },
//     {
//       name: 'Chinmay',
//       role: 'video editor',
//       image: 'https://i.pravatar.cc/150?img=45',
//       color: '#10B981'
//     }
//   ];

//   // Three.js Setup: Creates floating particles and animated 3D background
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas: canvasRef.current, 
//       alpha: true,
//       antialias: true 
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     camera.position.z = 5;

//     // Create floating particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 100;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 10;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.03,
//       color: '#8B5CF6',
//       transparent: true,
//       opacity: 0.6,
//       blending: THREE.AdditiveBlending
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Create glowing orbs
//     const orbGeometry = new THREE.SphereGeometry(0.15, 32, 32);
//     const orbMaterial = new THREE.MeshPhongMaterial({
//       color: '#3B82F6',
//       emissive: '#3B82F6',
//       emissiveIntensity: 0.5,
//       transparent: true,
//       opacity: 0.7
//     });

//     const orbs = [];
//     for (let i = 0; i < 5; i++) {
//       const orb = new THREE.Mesh(orbGeometry, orbMaterial.clone());
//       orb.position.set(
//         (Math.random() - 0.5) * 8,
//         (Math.random() - 0.5) * 8,
//         (Math.random() - 0.5) * 3
//       );
//       orbs.push(orb);
//       scene.add(orb);
//     }

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const pointLight = new THREE.PointLight(0x8B5CF6, 1, 100);
//     pointLight.position.set(0, 0, 5);
//     scene.add(pointLight);

//     // Animation loop
//     let time = 0;
//     const animate = () => {
//       requestAnimationFrame(animate);
//       time += 0.01;

//       // Rotate particles slowly
//       particlesMesh.rotation.y = time * 0.1;
//       particlesMesh.rotation.x = time * 0.05;

//       // Animate orbs in a floating pattern
//       orbs.forEach((orb, i) => {
//         orb.position.y = Math.sin(time + i) * 0.5;
//         orb.rotation.y = time * 0.5;
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Intersection Observer for scroll animations
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(canvasRef.current.parentElement);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       observer.disconnect();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <section id="about" className="relative py-20 px-4 bg-white overflow-hidden min-h-screen">
//       {/* Three.js Canvas Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none opacity-30"
//         style={{ zIndex: 0 }}
//       />

//       <div className="container mx-auto max-w-6xl relative z-10">
//         {/* Title with gradient and fade-in animation */}
//         <div
//           className={`transition-all duration-1000 transform ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//             Our Story
//           </h2>
//         </div>

//         {/* Description with delayed fade-in */}
//         <div
//           className={`transition-all duration-1000 delay-200 transform ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
//  At Sociea, our strength lies in our people. We are a passionate team of creative strategists, designers, content creators, and marketing experts who believe in turning ideas into impact. Each member brings unique skills and fresh perspectives, working together to craft powerful campaigns that help brands grow.          </p>
//         </div>

//         {/* Team Section with glass morphism effect */}
//         <div
//           className={`relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-1000 delay-400 transform ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           {/* Animated gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl animate-pulse" />

//           <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 relative z-10">
//             Meet Our Team
//           </h3>

//           {/* Team Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className={`text-center transition-all duration-700 transform ${
//                   isVisible 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ 
//                   transitionDelay: `${600 + index * 150}ms`,
//                 }}
//                 onMouseEnter={() => setHoveredMember(index)}
//                 onMouseLeave={() => setHoveredMember(null)}
//               >
//                 {/* Image container with 3D hover effect */}
//                 <div className="relative inline-block mb-4">
//                   <div
//                     className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
//                       hoveredMember === index ? 'opacity-70 scale-110' : 'opacity-0 scale-100'
//                     }`}
//                     style={{ backgroundColor: member.color }}
//                   />
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className={`w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg relative z-10 transition-all duration-500 transform ${
//                       hoveredMember === index 
//                         ? 'scale-110 rotate-3 shadow-2xl' 
//                         : 'scale-100 rotate-0'
//                     }`}
//                   />
//                   {/* Orbiting ring effect on hover */}
//                   {hoveredMember === index && (
//                     <div 
//                       className="absolute inset-0 rounded-full border-2 animate-spin-slow"
//                       style={{ 
//                         borderColor: member.color,
//                         borderStyle: 'dashed',
//                         animationDuration: '3s'
//                       }}
//                     />
//                   )}
//                 </div>

//                 {/* Name and role with slide-up animation */}
//                 <div className={`transition-all duration-500 ${
//                   hoveredMember === index ? 'transform -translate-y-1' : ''
//                 }`}>
//                   <h4 className="font-bold text-gray-900 text-lg mb-1">
//                     {member.name}
//                   </h4>
//                   <p 
//                     className="text-gray-600 transition-colors duration-300"
//                     style={{ 
//                       color: hoveredMember === index ? member.color : undefined 
//                     }}
//                   >
//                     {member.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ModernAboutSection;





//2ND VERSION 










// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// const CinematicAboutSection = () => {
//   const canvasRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [hoveredMember, setHoveredMember] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [reducedMotion, setReducedMotion] = useState(false);
  
//   // Framer Motion refs and values
//   const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });
  
//   // Smooth mouse tracking
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 100 });
//   const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 100 });
  
//   // Parallax transforms
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
//   const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

//   // Team members data
//   const teamMembers = [
//     {
//       name: 'Bishmay Sahoo',
//       role: 'Marketing Lead',
//       bio: 'Strategic visionary driving brand growth',
//       image: 'https://i.pravatar.cc/150?img=12',
//       color: '#3B82F6',
//       gradient: 'from-blue-500 to-cyan-500'
//     },
//     {
//       name: 'Sidharth',
//       role: 'Videographer',
//       bio: 'Crafting visual stories that captivate',
//       image: 'https://i.pravatar.cc/150?img=20',
//       color: '#8B5CF6',
//       gradient: 'from-purple-500 to-indigo-500'
//     },
//     {
//       name: 'Satyaprakash',
//       role: 'Content Creator',
//       bio: 'Turning ideas into compelling narratives',
//       image: 'https://i.pravatar.cc/150?img=33',
//       color: '#EC4899',
//       gradient: 'from-pink-500 to-rose-500'
//     },
//     {
//       name: 'Chinmay',
//       role: 'Video Editor',
//       bio: 'Transforming footage into cinematic magic',
//       image: 'https://i.pravatar.cc/150?img=45',
//       color: '#10B981',
//       gradient: 'from-emerald-500 to-teal-500'
//     }
//   ];

//   // Check for reduced motion preference
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//     setReducedMotion(mediaQuery.matches);
    
//     const handleChange = () => setReducedMotion(mediaQuery.matches);
//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   // Mouse movement tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth) * 2 - 1;
//       const y = -(e.clientY / window.innerHeight) * 2 + 1;
//       mouseX.set(x);
//       mouseY.set(y);
//       setMousePosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [mouseX, mouseY]);

//   // Enhanced Three.js Setup with parallax and advanced effects
//   useEffect(() => {
//     if (!canvasRef.current || reducedMotion) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas: canvasRef.current, 
//       alpha: true,
//       antialias: true,
//       powerPreference: 'high-performance'
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     camera.position.z = 5;

//     // Create energy wave particles with color shifting
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = window.innerWidth < 768 ? 50 : 150;
//     const posArray = new Float32Array(particlesCount * 3);
//     const colorArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i += 3) {
//       posArray[i] = (Math.random() - 0.5) * 15;
//       posArray[i + 1] = (Math.random() - 0.5) * 15;
//       posArray[i + 2] = (Math.random() - 0.5) * 8;
      
//       // Color gradient from blue to purple to pink
//       const t = i / (particlesCount * 3);
//       colorArray[i] = 0.2 + t * 0.8;
//       colorArray[i + 1] = 0.4;
//       colorArray[i + 2] = 1.0 - t * 0.5;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.05,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.8,
//       blending: THREE.AdditiveBlending,
//       sizeAttenuation: true
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Create glowing aurora orbs with lens flare effect
//     const orbs = [];
//     const orbCount = window.innerWidth < 768 ? 3 : 6;
    
//     for (let i = 0; i < orbCount; i++) {
//       const orbGeometry = new THREE.SphereGeometry(0.2, 32, 32);
//       const hue = i / orbCount;
//       const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
      
//       const orbMaterial = new THREE.MeshPhongMaterial({
//         color: color,
//         emissive: color,
//         emissiveIntensity: 0.8,
//         transparent: true,
//         opacity: 0.6,
//         shininess: 100
//       });

//       const orb = new THREE.Mesh(orbGeometry, orbMaterial);
//       orb.position.set(
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 4
//       );
      
//       // Add glow effect (outer sphere)
//       const glowGeometry = new THREE.SphereGeometry(0.3, 32, 32);
//       const glowMaterial = new THREE.MeshBasicMaterial({
//         color: color,
//         transparent: true,
//         opacity: 0.2,
//         side: THREE.BackSide
//       });
//       const glow = new THREE.Mesh(glowGeometry, glowMaterial);
//       orb.add(glow);
      
//       orbs.push({ orb, initialPos: orb.position.clone(), phase: Math.random() * Math.PI * 2 });
//       scene.add(orb);
//     }

//     // Enhanced lighting system
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
//     scene.add(ambientLight);

//     const pointLight1 = new THREE.PointLight(0x3B82F6, 2, 50);
//     pointLight1.position.set(-5, 5, 5);
//     scene.add(pointLight1);

//     const pointLight2 = new THREE.PointLight(0xEC4899, 2, 50);
//     pointLight2.position.set(5, -5, 3);
//     scene.add(pointLight2);

//     const pointLight3 = new THREE.PointLight(0x8B5CF6, 1.5, 40);
//     pointLight3.position.set(0, 0, 8);
//     scene.add(pointLight3);

//     // Create energy ribbons
//     const ribbonCurve = new THREE.CatmullRomCurve3([
//       new THREE.Vector3(-5, -3, 0),
//       new THREE.Vector3(-2, 0, 2),
//       new THREE.Vector3(2, 2, 1),
//       new THREE.Vector3(5, 0, -1),
//       new THREE.Vector3(3, -2, 0)
//     ]);

//     const ribbonGeometry = new THREE.TubeGeometry(ribbonCurve, 50, 0.05, 8, false);
//     const ribbonMaterial = new THREE.MeshBasicMaterial({
//       color: 0x8B5CF6,
//       transparent: true,
//       opacity: 0.3,
//       blending: THREE.AdditiveBlending
//     });
//     const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
//     scene.add(ribbon);

//     // Animation loop with mouse parallax
//     let time = 0;
//     let currentMouseX = 0;
//     let currentMouseY = 0;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       time += 0.005;

//       // Smooth camera parallax based on mouse
//       currentMouseX += (mousePosition.x * 0.5 - currentMouseX) * 0.05;
//       currentMouseY += (mousePosition.y * 0.5 - currentMouseY) * 0.05;
      
//       camera.position.x = currentMouseX;
//       camera.position.y = currentMouseY;
//       camera.lookAt(0, 0, 0);

//       // Animate particles with wave motion
//       const positions = particlesGeometry.attributes.position.array;
//       for (let i = 0; i < positions.length; i += 3) {
//         positions[i + 1] += Math.sin(time + positions[i]) * 0.002;
//         positions[i] += Math.cos(time + positions[i + 2]) * 0.001;
//       }
//       particlesGeometry.attributes.position.needsUpdate = true;

//       // Rotate particle system
//       particlesMesh.rotation.y = time * 0.08;
//       particlesMesh.rotation.x = Math.sin(time * 0.3) * 0.1;

//       // Animate orbs in complex patterns
//       orbs.forEach((orbData, i) => {
//         const { orb, initialPos, phase } = orbData;
//         orb.position.x = initialPos.x + Math.sin(time * 0.5 + phase) * 2;
//         orb.position.y = initialPos.y + Math.cos(time * 0.3 + phase) * 2;
//         orb.position.z = initialPos.z + Math.sin(time * 0.4 + phase) * 1;
        
//         orb.rotation.y = time * 0.5;
        
//         // Pulse glow
//         const glow = orb.children[0];
//         if (glow) {
//           glow.scale.setScalar(1 + Math.sin(time * 2 + phase) * 0.2);
//         }
//       });

//       // Animate ribbon
//       ribbon.rotation.z = time * 0.1;
//       ribbon.position.y = Math.sin(time * 0.5) * 0.5;

//       // Animate lights
//       pointLight1.position.x = Math.sin(time * 0.7) * 5;
//       pointLight2.position.y = Math.cos(time * 0.5) * 5;
//       pointLight3.intensity = 1.5 + Math.sin(time * 2) * 0.5;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//     };
//   }, [mousePosition, reducedMotion]);

//   // Animation variants for Framer Motion
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 20
//       }
//     }
//   };

//   return (
//     <section 
//       id="about" 
//       ref={sectionRef}
//       className="relative py-20 px-4 overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
//       aria-label="About Our Team"
//     >
//       {/* Enhanced Three.js Canvas Background */}
//       {!reducedMotion && (
//         <motion.div style={{ y: backgroundY }} className="absolute inset-0">
//           <canvas
//             ref={canvasRef}
//             className="absolute inset-0 pointer-events-none"
//             style={{ zIndex: 0 }}
//             aria-hidden="true"
//           />
//         </motion.div>
//       )}

//       {/* Gradient overlay for depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />

//       {/* Animated light beams */}
//       <motion.div 
//         className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
//         animate={{ opacity: [0.2, 0.5, 0.2], scaleY: [0.8, 1, 0.8] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
//         animate={{ opacity: [0.2, 0.5, 0.2], scaleY: [0.8, 1, 0.8] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//       />

//       <motion.div 
//         style={{ y: contentY }}
//         className="container mx-auto max-w-6xl relative z-10"
//       >
//         {/* Animated Title with Gradient */}
//         <motion.div
//           variants={titleVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center mb-8"
//         >
//           <motion.h2 
//             className="text-5xl md:text-7xl font-bold mb-4 relative inline-block"
//             animate={{
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//             }}
//             transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//             style={{
//               backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
//               backgroundSize: '200% auto',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             Our Story
//           </motion.h2>
          
//           {/* Animated underline */}
//           <motion.div
//             className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
//             initial={{ width: 0 }}
//             animate={isInView ? { width: '120px' } : { width: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//           />
//         </motion.div>

//         {/* Description */}
//         <motion.p
//           variants={itemVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center text-gray-300 mb-16 text-lg max-w-3xl mx-auto leading-relaxed"
//         >
//           At Sociea, our strength lies in our people. We are a passionate team of creative strategists, 
//           designers, content creators, and marketing experts who believe in turning ideas into impact. 
//           Each member brings unique skills and fresh perspectives, working together to craft powerful 
//           campaigns that help brands grow.
//         </motion.p>

//         {/* Team Section with Advanced Glassmorphism */}
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="relative backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
//           style={{
//             boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 80px rgba(139, 92, 246, 0.1)'
//           }}
//         >
//           {/* Animated gradient border effect */}
//           <motion.div
//             className="absolute inset-0 rounded-3xl opacity-50"
//             style={{
//               background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
//               backgroundSize: '300% 300%',
//             }}
//             animate={{
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//             }}
//             transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//           />
//           <div className="absolute inset-[2px] bg-slate-950 rounded-3xl" />

//           <motion.h3 
//             className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative z-10"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ delay: 0.3 }}
//           >
//             Meet Our Team
//           </motion.h3>

//           {/* Team Grid */}
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="text-center group"
//                 onMouseEnter={() => setHoveredMember(index)}
//                 onMouseLeave={() => setHoveredMember(null)}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {/* Image container with 3D tilt effect */}
//                 <motion.div 
//                   className="relative inline-block mb-6 perspective-1000"
//                   whileHover={{
//                     rotateY: 5,
//                     rotateX: -5,
//                     z: 50,
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   {/* Animated glow background */}
//                   <motion.div
//                     className="absolute inset-0 rounded-full blur-2xl"
//                     style={{ backgroundColor: member.color }}
//                     animate={hoveredMember === index ? {
//                       opacity: [0.3, 0.6, 0.3],
//                       scale: [1, 1.2, 1],
//                     } : {
//                       opacity: 0,
//                       scale: 1,
//                     }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
                  
//                   {/* Profile Image */}
//                   <motion.img
//                     src={member.image}
//                     alt={`${member.name} - ${member.role}`}
//                     className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl relative z-10 object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   />
                  
//                   {/* Orbiting ring effect */}
//                   {hoveredMember === index && (
//                     <>
//                       <motion.div
//                         className="absolute inset-0 rounded-full border-2 border-dashed"
//                         style={{ borderColor: member.color }}
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                       />
//                       <motion.div
//                         className="absolute inset-[-8px] rounded-full border-2"
//                         style={{ borderColor: member.color }}
//                         animate={{ rotate: -360, opacity: [0.5, 1, 0.5] }}
//                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                       />
//                     </>
//                   )}
                  
//                   {/* Particle burst on hover */}
//                   {hoveredMember === index && (
//                     <motion.div
//                       className="absolute inset-0 pointer-events-none"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                     >
//                       {[...Array(8)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           className="absolute w-1 h-1 rounded-full"
//                           style={{
//                             backgroundColor: member.color,
//                             left: '50%',
//                             top: '50%',
//                           }}
//                           animate={{
//                             x: Math.cos((i / 8) * Math.PI * 2) * 60,
//                             y: Math.sin((i / 8) * Math.PI * 2) * 60,
//                             opacity: [1, 0],
//                             scale: [1, 0],
//                           }}
//                           transition={{
//                             duration: 1,
//                             repeat: Infinity,
//                             delay: i * 0.1,
//                           }}
//                         />
//                       ))}
//                     </motion.div>
//                   )}
//                 </motion.div>

//                 {/* Name and Role Card */}
//                 <motion.div
//                   className="relative"
//                   animate={hoveredMember === index ? { y: -5 } : { y: 0 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <motion.h4 
//                     className="font-bold text-white text-xl mb-2"
//                     animate={hoveredMember === index ? { scale: 1.05 } : { scale: 1 }}
//                   >
//                     {member.name}
//                   </motion.h4>
                  
//                   <motion.p
//                     className={`text-sm font-medium mb-2 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
//                   >
//                     {member.role}
//                   </motion.p>

//                   {/* Bio overlay on hover */}
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={hoveredMember === index ? { 
//                       opacity: 1, 
//                       height: 'auto' 
//                     } : { 
//                       opacity: 0, 
//                       height: 0 
//                     }}
//                     className="overflow-hidden"
//                   >
//                     <motion.div
//                       className="mt-3 p-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10"
//                       initial={{ y: -10 }}
//                       animate={hoveredMember === index ? { y: 0 } : { y: -10 }}
//                     >
//                       <p className="text-gray-300 text-sm">{member.bio}</p>
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Floating CTA Button */}
//         <motion.div
//           className="flex justify-center mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ delay: 1 }}
//         >
//           <motion.button
//             className="relative px-8 py-4 rounded-full font-bold text-white overflow-hidden group"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Join our team"
//           >
//             {/* Animated gradient background */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
//               animate={{
//                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//               }}
//               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//               style={{ backgroundSize: '200% auto' }}
//             />
            
//             {/* Pulsating glow */}
//             <motion.div
//               className="absolute inset-0 rounded-full bg-white"
//               animate={{
//                 opacity: [0, 0.3, 0],
//                 scale: [0.8, 1.2, 0.8],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
            
//             <span className="relative z-10 flex items-center gap-2">
//               Join Our Team
//               <motion.span
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//               >
//                 →
//               </motion.span>
//             </span>
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default CinematicAboutSection;




// 3 version ===================================================================================================














import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const CinematicAboutSection = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Framer Motion refs and values
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms (scroll-based only)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  // Team members data
  const teamMembers = [
    {
      name: 'Bishmay Sahoo',
      role: 'Marketing Lead',
      bio: 'Strategic visionary driving brand growth',
      image: 'https://i.pravatar.cc/150?img=12',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Sidharth',
      role: 'Videographer',
      bio: 'Crafting visual stories that captivate',
      image: 'https://i.pravatar.cc/150?img=20',
      color: '#8B5CF6',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Satyaprakash',
      role: 'Content Creator',
      bio: 'Turning ideas into compelling narratives',
      image: 'https://i.pravatar.cc/150?img=33',
      color: '#EC4899',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Chinmay',
      role: 'Video Editor',
      bio: 'Transforming footage into cinematic magic',
      image: 'https://i.pravatar.cc/150?img=45',
      color: '#10B981',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  // Detect mobile and reduced motion preferences
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    checkMobile();
    
    const handleResize = () => checkMobile();
    const handleMotionChange = () => setReducedMotion(mediaQuery.matches);
    
    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Three.js Setup - Desktop only, optimized with visibility check
  useEffect(() => {
    if (!canvasRef.current || reducedMotion || isMobile) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create energy wave particles with color shifting
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 120;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 15;
      posArray[i + 1] = (Math.random() - 0.5) * 15;
      posArray[i + 2] = (Math.random() - 0.5) * 8;
      
      // Color gradient from blue to purple to pink
      const t = i / (particlesCount * 3);
      colorArray[i] = 0.2 + t * 0.8;
      colorArray[i + 1] = 0.4;
      colorArray[i + 2] = 1.0 - t * 0.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create glowing aurora orbs
    const orbs = [];
    const orbCount = 5;
    
    for (let i = 0; i < orbCount; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const hue = i / orbCount;
      const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
      
      const orbMaterial = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.6,
        shininess: 100
      });

      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 4
      );
      
      // Add glow effect (outer sphere)
      const glowGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      orb.add(glow);
      
      orbs.push({ orb, initialPos: orb.position.clone(), phase: Math.random() * Math.PI * 2 });
      scene.add(orb);
    }

    // Enhanced lighting system
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3B82F6, 2, 50);
    pointLight1.position.set(-5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xEC4899, 2, 50);
    pointLight2.position.set(5, -5, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x8B5CF6, 1.5, 40);
    pointLight3.position.set(0, 0, 8);
    scene.add(pointLight3);

    // Create energy ribbons
    const ribbonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5, -3, 0),
      new THREE.Vector3(-2, 0, 2),
      new THREE.Vector3(2, 2, 1),
      new THREE.Vector3(5, 0, -1),
      new THREE.Vector3(3, -2, 0)
    ]);

    const ribbonGeometry = new THREE.TubeGeometry(ribbonCurve, 50, 0.05, 8, false);
    const ribbonMaterial = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    scene.add(ribbon);

    // Animation loop - pauses when not visible
    let time = 0;
    let animationId;

    const animate = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      animationId = requestAnimationFrame(animate);
      time += 0.005;

      // Animate particles with wave motion
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i]) * 0.002;
        positions[i] += Math.cos(time + positions[i + 2]) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Rotate particle system
      particlesMesh.rotation.y = time * 0.08;
      particlesMesh.rotation.x = Math.sin(time * 0.3) * 0.1;

      // Animate orbs in complex patterns
      orbs.forEach((orbData, i) => {
        const { orb, initialPos, phase } = orbData;
        orb.position.x = initialPos.x + Math.sin(time * 0.5 + phase) * 2;
        orb.position.y = initialPos.y + Math.cos(time * 0.3 + phase) * 2;
        orb.position.z = initialPos.z + Math.sin(time * 0.4 + phase) * 1;
        
        orb.rotation.y = time * 0.5;
        
        // Pulse glow
        const glow = orb.children[0];
        if (glow) {
          glow.scale.setScalar(1 + Math.sin(time * 2 + phase) * 0.2);
        }
      });

      // Animate ribbon
      ribbon.rotation.z = time * 0.1;
      ribbon.position.y = Math.sin(time * 0.5) * 0.5;

      // Animate lights
      pointLight1.position.x = Math.sin(time * 0.7) * 5;
      pointLight2.position.y = Math.cos(time * 0.5) * 5;
      pointLight3.intensity = 1.5 + Math.sin(time * 2) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Intersection Observer to pause rendering when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [isMobile, reducedMotion, isVisible]);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-12 md:py-20 px-4 overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      aria-label="About Our Team"
    >
      {/* Three.js Canvas Background - Desktop Only */}
      {!reducedMotion && !isMobile && (
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 hidden md:block">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          />
        </motion.div>
      )}

      {/* Static Gradient Background - Mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" aria-hidden="true" />
      )}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Animated light beams - Desktop Only */}
      {!isMobile && !reducedMotion && (
        <>
          <motion.div 
            className="hidden md:block absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div 
            className="hidden md:block absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden="true"
          />
        </>
      )}

      <motion.div 
        style={{ y: isMobile ? 0 : contentY }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        {/* Animated Title with Gradient */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-6 md:mb-8"
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-bold mb-3 md:mb-4 relative inline-block"
            animate={!reducedMotion ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Story
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: isMobile ? '80px' : '120px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-gray-300 mb-8 md:mb-16 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4"
        >
          At Sociea, our strength lies in our people. We are a passionate team of creative strategists, 
          designers, content creators, and marketing experts who believe in turning ideas into impact. 
          Each member brings unique skills and fresh perspectives, working together to craft powerful 
          campaigns that help brands grow.
        </motion.p>

        {/* Desktop Team Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:block relative backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 80px rgba(139, 92, 246, 0.1)'
          }}
        >
          {/* Animated gradient border effect */}
          {!reducedMotion && (
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
                backgroundSize: '300% 300%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-[2px] bg-slate-950 rounded-3xl" />

          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3 }}
          >
            Meet Our Team
          </motion.h3>

          {/* Desktop Team Grid */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                onMouseEnter={() => !isMobile && setHoveredMember(index)}
                onMouseLeave={() => !isMobile && setHoveredMember(null)}
              >
                {/* Image container with simple hover effect */}
                <div className="relative inline-block mb-6">
                  {/* Glow background on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-2xl"
                    style={{ backgroundColor: member.color }}
                    animate={hoveredMember === index ? {
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.2, 1],
                    } : {
                      opacity: 0,
                      scale: 1,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  
                  {/* Profile Image */}
                  <motion.img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Sociea`}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl relative z-10 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Orbiting ring effect on hover */}
                  {hoveredMember === index && !reducedMotion && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-dashed"
                        style={{ borderColor: member.color }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        aria-hidden="true"
                      />
                      <motion.div
                        className="absolute inset-[-8px] rounded-full border-2"
                        style={{ borderColor: member.color }}
                        animate={{ rotate: -360, opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </div>

                {/* Name and Role Card */}
                <div className="relative">
                  <h4 className="font-bold text-white text-xl mb-2">
                    {member.name}
                  </h4>
                  
                  <p className={`text-sm font-medium mb-2 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>

                  {/* Bio overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredMember === index ? { 
                      opacity: 1, 
                      height: 'auto' 
                    } : { 
                      opacity: 0, 
                      height: 0 
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 p-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10">
                      <p className="text-gray-300 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Team Carousel */}
        <div className="block md:hidden relative">
          <motion.h3 
            className="text-2xl font-bold text-center mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Meet Our Team
          </motion.h3>

          {/* Swipeable Carousel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={mobileItemVariants}
                className="flex-shrink-0 w-64 snap-center"
              >
                {/* Mobile Card */}
                <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
                  {/* Profile Image */}
                  <div className="relative inline-block mb-4 w-full flex justify-center">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-30"
                      style={{ backgroundColor: member.color }}
                      aria-hidden="true"
                    />
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Sociea`}
                      className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg relative z-10 object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="font-bold text-white text-lg mb-1">
                      {member.name}
                    </h4>
                    
                    <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>

                    {/* Bio - Always visible on mobile */}
                    <div className="p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/5">
                      <p className="text-gray-300 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {teamMembers.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Floating CTA Button */}
        <motion.div
          className="flex justify-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="relative px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-white text-sm md:text-base overflow-hidden group"
            whileTap={{ scale: 0.95 }}
            aria-label="Join our team"
          >
            {/* Static gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            
            {/* Pulsating glow - Desktop only */}
            {!isMobile && !reducedMotion && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
            )}
            
            <span className="relative z-10 flex items-center gap-2">
              Join Our Team
              <span>→</span>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hide scrollbar for mobile carousel */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CinematicAboutSection;