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
// }
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image'; // Removed this import to fix the error

// --- Animated Hamburger Icon ---
// This component animates the hamburger lines into a close 'X'
const AnimatedHamburgerIcon = ({ isOpen }) => {
  const lineVariants = {
    closed: {
      transition: { duration: 0.3 },
    },
    open: {
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      animate={isOpen ? 'open' : 'closed'}
    >
      {/* Top line: animates to one part of the 'X' */}
      <motion.path
        d="M4 6H20"
        variants={{
          ...lineVariants,
          open: { d: "M6 18L18 6", ...lineVariants.open },
        }}
      />
      {/* Middle line: fades out */}
      <motion.path
        d="M4 12H20"
        variants={{
          ...lineVariants,
          closed: { opacity: 1, ...lineVariants.closed },
          open: { opacity: 0, ...lineVariants.open },
        }}
      />
      {/* Bottom line: animates to the other part of the 'X' */}
      <motion.path
        d="M4 18H20"
        variants={{
          ...lineVariants,
          open: { d: "M6 6L18 18", ...lineVariants.open },
        }}
      />
    </motion.svg>
  );
};

// --- Mobile Menu Variants ---
// These variants control the animation of the mobile menu itself...
const mobileMenuContainerVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 150,
      when: 'beforeChildren', // Ensure container animates open *before* children
      staggerChildren: 0.05, // Stagger the animation of nav items
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 150,
      when: 'afterChildren', // Ensure children animate out *before* container closes
      staggerChildren: 0.05,
      staggerDirection: -1, // Stagger items out in reverse
    },
  },
};

// ...and these control the animation of each item *inside* the menu
const mobileMenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200 },
  },
  closed: {
    y: 20,
    opacity: 0,
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // This new state tracks the hovered desktop nav item
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
      // Enhanced glassmorphism for a 3D, layered feel
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue-950/70 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Using standard <img> tag to resolve import error */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
          >
            {/* Replaced Next.js Image with standard img tag */}
            <img
              src="/logo.png"
              alt="Sociea"
              className="h-16 w-auto object-contain drop-shadow-sm"
              loading="lazy" // Added lazy loading for good practice
            />
          </motion.a>

          {/* Desktop Navigation - Upgraded with 'layoutId' for a moving pill animation */}
          <nav className="hidden lg:flex items-center space-x-2" onMouseLeave={() => setHoveredItem(null)}>
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + 0.05 * index, type: 'spring', stiffness: 120 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  className="text-gray-200 hover:text-white transition duration-300 font-poppins font-medium relative px-4 py-2 rounded-full"
                >
                  {/* This is the moving pill! 'layoutId' is the magic prop */}
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                      style={{ borderRadius: 9999 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
            </AnimatePresence>

            {/* "Contact Us" Button - Upgraded with physics-based hover/tap animations */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 25px rgba(236, 72, 153, 0.7)', // Pink glow
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-poppins font-semibold"
            >
              Contact Us
            </motion.a>
          </nav>

          {/* Mobile Menu Button - Now uses the animated icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition z-50"
          >
            <AnimatedHamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Upgraded with staggered variants */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-blue-950/90 backdrop-blur-lg border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={mobileMenuItemVariants} // Use item variants
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-4 py-3 text-gray-200 hover:bg-white/10 rounded-lg font-poppins font-medium transition-all duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                variants={mobileMenuItemVariants} // Use item variants
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="block px-4 py-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-lg font-poppins font-semibold shadow-md"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
