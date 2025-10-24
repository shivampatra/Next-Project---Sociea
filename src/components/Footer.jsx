// //3RD VERSION
// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function FuturisticFooter() {
//   const canvasRef = useRef(null);
//   const sceneRef = useRef(null);
//   const [hoveredSocial, setHoveredSocial] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;
    
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//       antialias: true
//     });
//     renderer.setSize(window.innerWidth, 400);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     // Create particle wave
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 5000;
//     const posArray = new Float32Array(particlesCount * 3);
//     const colorArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i += 3) {
//       posArray[i] = (Math.random() - 0.5) * 20;
//       posArray[i + 1] = (Math.random() - 0.5) * 10;
//       posArray[i + 2] = (Math.random() - 0.5) * 10;

//       const color = new THREE.Color();
//       color.setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.6);
//       colorArray[i] = color.r;
//       colorArray[i + 1] = color.g;
//       colorArray[i + 2] = color.b;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.05,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.8,
//       blending: THREE.AdditiveBlending
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Create floating geometric shapes
//     const shapes = [];
//     const geometries = [
//       new THREE.OctahedronGeometry(0.3),
//       new THREE.TetrahedronGeometry(0.3),
//       new THREE.IcosahedronGeometry(0.3)
//     ];

//     for (let i = 0; i < 8; i++) {
//       const geometry = geometries[Math.floor(Math.random() * geometries.length)];
//       const material = new THREE.MeshPhongMaterial({
//         color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.5),
//         transparent: true,
//         opacity: 0.6,
//         shininess: 100,
//         wireframe: Math.random() > 0.5
//       });
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.position.set(
//         (Math.random() - 0.5) * 15,
//         (Math.random() - 0.5) * 8,
//         (Math.random() - 0.5) * 5
//       );
//       mesh.rotation.set(
//         Math.random() * Math.PI,
//         Math.random() * Math.PI,
//         Math.random() * Math.PI
//       );
//       mesh.userData = {
//         rotationSpeed: {
//           x: (Math.random() - 0.5) * 0.02,
//           y: (Math.random() - 0.5) * 0.02,
//           z: (Math.random() - 0.5) * 0.02
//         },
//         floatSpeed: Math.random() * 0.02 + 0.01,
//         floatOffset: Math.random() * Math.PI * 2
//       };
//       shapes.push(mesh);
//       scene.add(mesh);
//     }

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
//     scene.add(ambientLight);

//     const pointLight1 = new THREE.PointLight(0x8b5cf6, 2, 20);
//     pointLight1.position.set(5, 5, 5);
//     scene.add(pointLight1);

//     const pointLight2 = new THREE.PointLight(0x3b82f6, 2, 20);
//     pointLight2.position.set(-5, -5, 5);
//     scene.add(pointLight2);

//     // Animation
//     let mouseX = 0;
//     let mouseY = 0;
//     let time = 0;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       time += 0.01;

//       // Animate particles with wave effect
//       const positions = particlesGeometry.attributes.position.array;
//       for (let i = 1; i < positions.length; i += 3) {
//         positions[i] = Math.sin(positions[i - 1] * 0.5 + time) * 0.5;
//       }
//       particlesGeometry.attributes.position.needsUpdate = true;

//       // Rotate and float shapes
//       shapes.forEach((shape, i) => {
//         shape.rotation.x += shape.userData.rotationSpeed.x;
//         shape.rotation.y += shape.userData.rotationSpeed.y;
//         shape.rotation.z += shape.userData.rotationSpeed.z;
//         shape.position.y += Math.sin(time + shape.userData.floatOffset) * 0.005;
//       });

//       // Camera movement based on mouse
//       camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
//       camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
//       camera.lookAt(scene.position);

//       particlesMesh.rotation.y = time * 0.1;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Mouse movement handler
//     const handleMouseMove = (event) => {
//       mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY = (event.clientY / window.innerHeight) * 2 - 1;
//       setMousePos({ x: event.clientX, y: event.clientY });
//     };

//     // Resize handler
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / 400;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, 400);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//       shapes.forEach(shape => {
//         shape.geometry.dispose();
//         shape.material.dispose();
//       });
//     };
//   }, []);

//   const footerLinks = {
//     company: [
//       { name: 'About Us', href: '#about' },
//       { name: 'Services', href: '#services' },
//       { name: 'Portfolio', href: '#portfolio' },
//       { name: 'Pricing', href: '#pricing' },
//     ],
//     resources: [
//       { name: 'Blog', href: '#' },
//       { name: 'Case Studies', href: '#' },
//       { name: 'FAQ', href: '#' },
//       { name: 'Contact', href: '#contact' },
//     ],
//     legal: [
//       { name: 'Privacy Policy', href: '#' },
//       { name: 'Terms of Service', href: '#' },
//       { name: 'Cookie Policy', href: '#' },
//     ],
//   };

//   const socialLinks = [
//     { name: 'Facebook', href: '#', icon: 'F', color: '#1877F2' },
//     { name: 'Instagram', href: '#', icon: 'I', color: '#E4405F' },
//     { name: 'Twitter', href: '#', icon: 'X', color: '#1DA1F2' },
//     { name: 'LinkedIn', href: '#', icon: 'in', color: '#0A66C2' },
//   ];

//   return (
//     <footer className="relative bg-black text-white overflow-hidden">
//       {/* 3D Canvas Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{ height: '400px' }}
//       />
      
//       {/* Gradient Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30 pointer-events-none" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      
//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 pt-20 pb-10">
//         {/* Main Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
//           {/* Logo and Description */}
//           <div className="lg:col-span-2">
//             <div className="group">
//               <div className="relative inline-block mb-6">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
//                 <h2 className="relative text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   SOCIEA
//                 </h2>
//               </div>
              
//               <p className="text-gray-300 mb-8 leading-relaxed text-lg backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
//                 Transforming brands through strategic social media marketing. We create compelling content that drives engagement and delivers measurable results.
//               </p>
              
//               {/* Social Links */}
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={social.name}
//                     href={social.href}
//                     onMouseEnter={() => setHoveredSocial(index)}
//                     onMouseLeave={() => setHoveredSocial(null)}
//                     className="relative group/social"
//                     style={{
//                       transform: hoveredSocial === index ? 'scale(1.2) translateY(-8px)' : 'scale(1)',
//                       transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
//                     }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
//                     <div 
//                       className="relative w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20 font-bold text-xl overflow-hidden"
//                       style={{
//                         background: hoveredSocial === index 
//                           ? `linear-gradient(135deg, ${social.color}33, ${social.color}66)`
//                           : 'rgba(255, 255, 255, 0.1)'
//                       }}
//                     >
//                       <span className="relative z-10">{social.icon}</span>
//                       <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover/social:scale-100 transition-transform duration-500 rounded-full" />
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Links Sections */}
//           {Object.entries(footerLinks).map(([category, links], idx) => (
//             <div key={category} className="group/section">
//               <h3 className="text-xl font-bold mb-6 relative inline-block">
//                 <span className="relative z-10 uppercase tracking-wider">
//                   {category}
//                 </span>
//                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/section:w-full transition-all duration-500" />
//               </h3>
//               <ul className="space-y-3">
//                 {links.map((link, linkIdx) => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       className="group/link relative inline-block text-gray-300 hover:text-white transition-all duration-300"
//                       style={{
//                         animation: `fadeInUp 0.5s ease-out ${(idx * 0.1 + linkIdx * 0.05)}s both`
//                       }}
//                     >
//                       <span className="relative z-10">{link.name}</span>
//                       <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover/link:w-full transition-all duration-300" />
//                       <span className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/link:opacity-100 group-hover/link:-left-4 transition-all duration-300">
//                         →
//                       </span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Newsletter Section */}
//         <div className="mb-12 backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
//           <div className="max-w-2xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Stay Updated
//             </h3>
//             <p className="text-gray-300 mb-6">Get the latest updates on social media trends and marketing strategies.</p>
//             <div className="flex gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
//               />
//               <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-8 mt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-center md:text-left">
//               © {new Date().getFullYear()} Sociea. All rights reserved. Built with{' '}
//               <span className="text-red-500 animate-pulse">❤️</span> for amazing brands.
//             </p>
//             <div className="flex gap-6 text-sm text-gray-400">
//               <a href="#" className="hover:text-white transition-colors">Status</a>
//               <a href="#" className="hover:text-white transition-colors">Security</a>
//               <a href="#" className="hover:text-white transition-colors">Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }


//4th VERSION

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function FuturisticFooter() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 150, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, 150);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particle wave
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.6);
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.3),
      new THREE.IcosahedronGeometry(0.3)
    ];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.5),
        transparent: true,
        opacity: 0.6,
        shininess: 100,
        wireframe: Math.random() > 0.5
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2
      };
      shapes.push(mesh);
      scene.add(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 2, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 2, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Animate particles with wave effect
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = Math.sin(positions[i - 1] * 0.5 + time) * 0.5;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Rotate and float shapes
      shapes.forEach((shape, i) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        shape.position.y += Math.sin(time + shape.userData.floatOffset) * 0.005;
      });

      // Camera movement based on mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      particlesMesh.rotation.y = time * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse movement handler
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / 150;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, []);

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Pricing', href: '#pricing' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'F', color: '#1877F2' },
    { name: 'Instagram', href: '#', icon: 'I', color: '#E4405F' },
    { name: 'Twitter', href: '#', icon: 'X', color: '#1DA1F2' },
    { name: 'LinkedIn', href: '#', icon: 'in', color: '#0A66C2' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <h2 className="relative text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SOCIEA
                </h2>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                Transforming brands through strategic social media marketing. We create compelling content that drives engagement and delivers measurable results.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="relative group/social"
                    style={{
                      transform: hoveredSocial === index ? 'scale(1.2) translateY(-8px)' : 'scale(1)',
                      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                    <div 
                      className="relative w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20 font-bold text-xl overflow-hidden"
                      style={{
                        background: hoveredSocial === index 
                          ? `linear-gradient(135deg, ${social.color}33, ${social.color}66)`
                          : 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <span className="relative z-10">{social.icon}</span>
                      <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover/social:scale-100 transition-transform duration-500 rounded-full" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <div key={category} className="group/section">
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                <span className="relative z-10 uppercase tracking-wider">
                  {category}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/section:w-full transition-all duration-500" />
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group/link relative inline-block text-gray-300 hover:text-white transition-all duration-300"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${(idx * 0.1 + linkIdx * 0.05)}s both`
                      }}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover/link:w-full transition-all duration-300" />
                      <span className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/link:opacity-100 group-hover/link:-left-4 transition-all duration-300">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>









        {/* Newsletter Section
        <div className="mb-12 backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">Get the latest updates on social media trends and marketing strategies.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}








        {/* Bottom Bar with 3D Background */}
        <div className="relative border-t border-white/10 pt-8 mt-8 overflow-hidden">
          {/* 3D Canvas Background */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: '100%', minHeight: '150px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <p className="text-gray-400 text-center py-4">
              © {new Date().getFullYear()} Sociea. All rights reserved. Built with{' '}
              <span className="text-red-500 animate-pulse">❤️</span>by Shivam Patra.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}