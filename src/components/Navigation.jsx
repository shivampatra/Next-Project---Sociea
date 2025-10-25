// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Portfolio', href: '#portfolio' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Pricing', href: '#pricing' },
//   ];

//   const handleNavClick = (href) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-[#3958A8] shadow-lg backdrop-blur-lg' : 'bg-[#3958A8]'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center space-x-3"
//           >
//             <Image
//               src="/logo.png"
//               alt="Sociea"
//               width={64}
//               height={64}
//               className="h-16 w-auto object-contain drop-shadow-sm"
//             />
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(item.href);
//                 }}
//                 className="text-white hover:text-purple-300 transition duration-300 font-medium relative group"
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full" />
//               </motion.a>
//             ))}
//             <motion.a
//               href="#contact"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.6 }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavClick('#contact');
//               }}
//               className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition duration-300"
//             >
//               Contact Us
//             </motion.a>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-white bg-opacity-95 backdrop-blur-lg border-t border-purple-200 overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-4 space-y-2">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.05 * index }}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(item.href);
//                   }}
//                   className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-lg font-medium transition-all duration-300"
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//               <motion.a
//                 href="#contact"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.35 }}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick('#contact');
//                 }}
//                 className="block px-4 py-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-lg font-semibold shadow-md"
//               >
//                 Contact Us
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// // import Image from 'next/image'; // Removed this import to fix the error

// // --- Animated Hamburger Icon ---
// // This component animates the hamburger lines into a close 'X'
// const AnimatedHamburgerIcon = ({ isOpen }) => {
//   const lineVariants = {
//     closed: {
//       transition: { duration: 0.3 },
//     },
//     open: {
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <motion.svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//       animate={isOpen ? 'open' : 'closed'}
//     >
//       {/* Top line: animates to one part of the 'X' */}
//       <motion.path
//         d="M4 6H20"
//         variants={{
//           ...lineVariants,
//           open: { d: "M6 18L18 6", ...lineVariants.open },
//         }}
//       />
//       {/* Middle line: fades out */}
//       <motion.path
//         d="M4 12H20"
//         variants={{
//           ...lineVariants,
//           closed: { opacity: 1, ...lineVariants.closed },
//           open: { opacity: 0, ...lineVariants.open },
//         }}
//       />
//       {/* Bottom line: animates to the other part of the 'X' */}
//       <motion.path
//         d="M4 18H20"
//         variants={{
//           ...lineVariants,
//           open: { d: "M6 6L18 18", ...lineVariants.open },
//         }}
//       />
//     </motion.svg>
//   );
// };

// // --- Mobile Menu Variants ---
// // These variants control the animation of the mobile menu itself...
// const mobileMenuContainerVariants = {
//   open: {
//     opacity: 1,
//     height: 'auto',
//     transition: {
//       type: 'spring',
//       damping: 20,
//       stiffness: 150,
//       when: 'beforeChildren', // Ensure container animates open *before* children
//       staggerChildren: 0.05, // Stagger the animation of nav items
//     },
//   },
//   closed: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       type: 'spring',
//       damping: 20,
//       stiffness: 150,
//       when: 'afterChildren', // Ensure children animate out *before* container closes
//       staggerChildren: 0.05,
//       staggerDirection: -1, // Stagger items out in reverse
//     },
//   },
// };

// // ...and these control the animation of each item *inside* the menu
// const mobileMenuItemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: { type: 'spring', stiffness: 200 },
//   },
//   closed: {
//     y: 20,
//     opacity: 0,
//   },
// };

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   // This new state tracks the hovered desktop nav item
//   const [hoveredItem, setHoveredItem] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Portfolio', href: '#portfolio' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Pricing', href: '#pricing' },
//   ];

//   const handleNavClick = (href) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
//       // Enhanced glassmorphism for a 3D, layered feel
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-blue-950/70 backdrop-blur-xl border-b border-white/10 shadow-2xl'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo - Using standard <img> tag to resolve import error */}
//           <motion.a
//             href="#home"
//             onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
//             className="flex items-center cursor-pointer"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
//           >
//             {/* Replaced Next.js Image with standard img tag */}
//             <img
//               src="/logo.png"
//               alt="Sociea"
//               className="h-16 w-auto object-contain drop-shadow-sm"
//               loading="lazy" // Added lazy loading for good practice
//             />
//           </motion.a>

//           {/* Desktop Navigation - Upgraded with 'layoutId' for a moving pill animation */}
//           <nav className="hidden lg:flex items-center space-x-2" onMouseLeave={() => setHoveredItem(null)}>
//             <AnimatePresence>
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 + 0.05 * index, type: 'spring', stiffness: 120 }}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(item.href);
//                   }}
//                   onMouseEnter={() => setHoveredItem(item.name)}
//                   className="text-gray-200 hover:text-white transition duration-300 font-poppins font-medium relative px-4 py-2 rounded-full"
//                 >
//                   {/* This is the moving pill! 'layoutId' is the magic prop */}
//                   {hoveredItem === item.name && (
//                     <motion.div
//                       layoutId="activePill"
//                       className="absolute inset-0 bg-white/10 backdrop-blur-sm"
//                       style={{ borderRadius: 9999 }}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//                     />
//                   )}
//                   <span className="relative z-10">{item.name}</span>
//                 </motion.a>
//               ))}
//             </AnimatePresence>

//             {/* "Contact Us" Button - Upgraded with physics-based hover/tap animations */}
//             <motion.a
//               href="#contact"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ type: 'spring', stiffness: 120, delay: 0.8 }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: '0 0 25px rgba(236, 72, 153, 0.7)', // Pink glow
//               }}
//               whileTap={{ scale: 0.95 }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavClick('#contact');
//               }}
//               className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-poppins font-semibold"
//             >
//               Contact Us
//             </motion.a>
//           </nav>

//           {/* Mobile Menu Button - Now uses the animated icon */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition z-50"
//           >
//             <AnimatedHamburgerIcon isOpen={isOpen} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu - Upgraded with staggered variants */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={mobileMenuContainerVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             className="lg:hidden bg-blue-950/90 backdrop-blur-lg border-t border-white/10 overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-4 space-y-2">
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   variants={mobileMenuItemVariants} // Use item variants
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(item.href);
//                   }}
//                   className="block px-4 py-3 text-gray-200 hover:bg-white/10 rounded-lg font-poppins font-medium transition-all duration-300"
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//               <motion.a
//                 href="#contact"
//                 variants={mobileMenuItemVariants} // Use item variants
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick('#contact');
//                 }}
//                 className="block px-4 py-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-lg font-poppins font-semibold shadow-md"
//               >
//                 Contact Us
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }










// 3RD VERSION ============================================================================================================================









'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// ============================================================================
// ANIMATED HAMBURGER ICON
// ============================================================================
const AnimatedHamburgerIcon = ({ isOpen }) => {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.path
        d="M4 6H20"
        variants={{
          closed: { d: "M4 6H20" },
          open: { d: "M6 18L18 6" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M4 12H20"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        d="M4 18H20"
        variants={{
          closed: { d: "M4 18H20" },
          open: { d: "M6 6L18 18" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================
const mobileMenuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren'
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.08,
      delayChildren: 0.1,
      when: 'beforeChildren'
    }
  }
};

const mobileMenuItemVariants = {
  closed: {
    x: 50,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25
    }
  }
};

const desktopNavItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.08,
      type: 'spring',
      stiffness: 200,
      damping: 20
    }
  })
};

// ============================================================================
// MAIN NAVIGATION COMPONENT
// ============================================================================
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' }
  ];

  // ============================================================================
  // SCROLL HANDLER WITH THROTTLING
  // ============================================================================
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
        const currentScrollY = window.scrollY;
        setScrolled(currentScrollY > 50);
        lastScrollY.current = currentScrollY;
        scrollTimeout.current = null;
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // ============================================================================
  // INTERSECTION OBSERVER FOR ACTIVE SECTION
  // ============================================================================
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // ============================================================================
  // NAVIGATION CLICK HANDLER
  // ============================================================================
  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - (scrolled ? 60 : 80);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // ============================================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // ============================================================================
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ============================================================================
  // RENDER
  // ============================================================================
  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[60]"
        style={{ scaleX: progressWidth, transformOrigin: '0%' }}
      />

      {/* Main Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          height: scrolled ? '60px' : '80px'
        }}
        transition={{ 
          y: { type: 'spring', stiffness: 120, damping: 20, delay: 0.2 },
          height: { duration: 0.3, ease: 'easeInOut' }
        }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'
            : 'bg-gradient-to-b from-slate-900/50 to-transparent backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavClick('#home'); 
              }}
              className="flex items-center cursor-pointer group relative z-50"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Sociea homepage"
            >
              <img
                src="/logo.png"
                alt="Sociea logo"
                className={`object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 ${
                  scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'
                }`}
                loading="lazy"
              />
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center space-x-1"
              onMouseLeave={() => setHoveredItem(null)}
              aria-label="Desktop navigation"
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    custom={index}
                    variants={desktopNavItemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    className={`relative px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Hover pill background */}
                    {hoveredItem === item.name && (
                      <motion.div
                        layoutId="hoverPill"
                        className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20"
                        style={{ borderRadius: 9999 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Active indicator underline with glow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                );
              })}

              {/* Contact Button - Desktop */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, delay: 0.9 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors relative z-50"
              whileTap={{ scale: 0.9 }}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <AnimatedHamburgerIcon isOpen={isOpen} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              id="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-40 lg:hidden overflow-y-auto shadow-2xl border-l border-white/10"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Menu Header */}
              <div className="px-6 pt-24 pb-8">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-3 mb-8"
                >
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Navigation</span>
                </motion.div>

                {/* Menu Items */}
                <nav className="space-y-2" aria-label="Mobile navigation">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        variants={mobileMenuItemVariants}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`block px-6 py-4 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white active:bg-white/10'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="relative z-10 text-lg">{item.name}</span>
                        {isActive && (
                          <motion.div
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                            layoutId="mobileActiveIndicator"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    );
                  })}

                  {/* Contact Button - Mobile */}
                  <motion.a
                    href="#contact"
                    variants={mobileMenuItemVariants}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="block mt-8 px-6 py-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-2xl font-semibold shadow-lg text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-active:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                  </motion.a>
                </nav>

                {/* Social Links or Additional Info (Optional) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <p className="text-gray-400 text-sm text-center">
                    © 2024 Sociea. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Accessibility: Reduce motion support */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}