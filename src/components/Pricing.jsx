// VERSION 1


// 'use client';

// import { useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';

// export default function Pricing() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
//   const [billingCycle, setBillingCycle] = useState('monthly');

//   const plans = [
//     {
//       name: 'Basic',
//       monthlyPrice: '11,999',
//       yearlyPrice: '1,44,988',
//       description: 'Perfect for small businesses getting started',
//       features: [
//  ' 2 Posts every weekend',
//  ' Festival Special Posts',
//  ' Instagram Management Only',
//  ' 3 Story Uploads per day',
//  ' 1 Influencer Marketing' ,
// '  4 Video Shoots per month',
//  '   Full Content Creation Support',
//       ],
//       gradient: 'from-blue-500 to-purple-500',
//       popular: false,
//     },
//     {
//       name: 'Standard',
//       monthlyPrice: '14,999',
//       yearlyPrice: '1,79,988',
//       description: 'Ideal for growing businesses',
//       features: [
//     'Everything in Basic Package',
//     ' Meta Ads — 1 Week Free',
//     '5 Video Shoots per month',
//     '5 Story Uploads per day',
//     '2 Influencer Marketing',
//     'Daily Reels Posting on Instagram & YouTube'
//             ],
//       gradient: 'from-purple-500 to-pink-500',
//       popular: true,
//     },
//     {
//       name: 'Premium',
//       monthlyPrice: '19,999',
//       yearlyPrice: '2,39,988',
//       description: 'For established brands and agencies',
//       features: [
//         'Everything in Advanced Package',
// 'Influencer Marketing Collaborations (Free)',
//  'Daily Reels & Posts on Instagram + YouTube + Facebook',
//  'Full Platform Management',
// ' Advanced Growth Strategy & Reporting'

//       ],
//       gradient: 'from-pink-500 to-blue-500',
//       popular: false,
//     },
//   ];

//   return (
//     <section id="pricing" ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
//       <div className="container mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
//         >
//           Pricing Plans 
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center text-gray-600 mb-8 text-lg"
//         >
//           Choose the perfect plan for your business
//         </motion.p>

//         {/* Billing Toggle */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex justify-center items-center gap-4 mb-16"
//         >
//           <span className={`font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
//             Monthly
//           </span>
//           <button
//             onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
//             className="relative w-16 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
//           >
//             <motion.div
//               animate={{ x: billingCycle === 'monthly' ? 2 : 34 }}
//               transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//               className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
//             />
//           </button>
//           <span className={`font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
//             Yearly
//             <span className="ml-2 text-sm text-green-600 font-semibold">(Save 17%)</span>
//           </span>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -10 }}
//               className={`bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden ${
//                 plan.popular ? 'border-4 border-purple-500' : ''
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-bl-3xl font-semibold">
//                   Most Popular
//                 </div>
//               )}

//               <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>

//               <h3 className="text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
//               <p className="text-gray-600 mb-6">{plan.description}</p>

//               <div className="mb-6">
//                 <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   ₹{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
//                 </span>
//                 <span className="text-gray-600 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
//               </div>

//               <ul className="space-y-4 mb-8">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
//                   plan.popular
//                     ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white hover:shadow-2xl'
//                     : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                 }`}
//               >
//                 Get Started
//               </button>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.9 }}
//           className="text-center mt-16"
//         >
//           <p className="text-gray-600 mb-4">Need a custom plan?</p>
//           <a
//             href="#contact"
//             className="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
//           >
//             Contact Us
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }










// VERSION 2

// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useSpring, animated } from 'react-spring';

// // Animated number component using react-spring
// function AnimatedNumber({ value }) {
//   const props = useSpring({ 
//     number: parseFloat(value.replace(/,/g, '')),
//     config: { tension: 100, friction: 20 }
//   });
  
//   return (
//     <animated.span>
//       {props.number.to(n => n.toLocaleString('en-IN', { maximumFractionDigits: 0 }))}
//     </animated.span>
//   );
// }

// // Confetti animation component
// function Confetti({ show }) {
//   if (!show) return null;
  
//   return (
//     <div className="fixed inset-0 pointer-events-none z-50">
//       {[...Array(30)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ 
//             x: '50%', 
//             y: '50%', 
//             scale: 0,
//             opacity: 1 
//           }}
//           animate={{ 
//             x: `${Math.random() * 100}%`,
//             y: `${Math.random() * 100}%`,
//             scale: [0, 1, 0],
//             opacity: [1, 1, 0],
//             rotate: Math.random() * 360
//           }}
//           transition={{ 
//             duration: 1.2,
//             ease: "easeOut"
//           }}
//           className={`absolute w-3 h-3 rounded-full`}
//           style={{
//             background: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 4)]
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // Floating orb background component
// function FloatingOrbs() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Large gradient orb 1 */}
//       <motion.div
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -100, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
//       />
      
//       {/* Large gradient orb 2 */}
//       <motion.div
//         animate={{
//           x: [0, -100, 0],
//           y: [0, 100, 0],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full blur-3xl"
//       />
      
//       {/* Medium orb */}
//       <motion.div
//         animate={{
//           x: [0, 50, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
//       />
//     </div>
//   );
// }

// // Tooltip component
// function Tooltip({ children, text }) {
//   const [show, setShow] = useState(false);
  
//   return (
//     <div 
//       className="relative inline-block"
//       onMouseEnter={() => setShow(true)}
//       onMouseLeave={() => setShow(false)}
//     >
//       {children}
//       <AnimatePresence>
//         {show && (
//           <motion.div
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 5 }}
//             className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10"
//           >
//             {text}
//             <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function Pricing() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
//   const [billingCycle, setBillingCycle] = useState('monthly');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   // Scroll-based gradient animation
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });
  
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

//   const plans = [
//     {
//       name: 'Basic',
//       monthlyPrice: '11,999',
//       yearlyPrice: '1,44,988',
//       description: 'Perfect for small businesses getting started',
//       features: [
//         { text: '2 Posts every weekend', tooltip: 'High-quality content twice per week' },
//         { text: 'Festival Special Posts', tooltip: 'Custom posts for all major festivals' },
//         { text: 'Instagram Management Only', tooltip: 'Full account management' },
//         { text: '3 Story Uploads per day', tooltip: 'Engaging daily stories' },
//         { text: '1 Influencer Marketing', tooltip: 'Collaboration with micro-influencer' },
//         { text: '4 Video Shoots per month', tooltip: 'Professional video production' },
//         { text: 'Full Content Creation Support', tooltip: '24/7 creative team support' },
//       ],
//       gradient: 'from-blue-500 via-cyan-500 to-blue-600',
//       popular: false,
//       icon: '🚀',
//     },
//     {
//       name: 'Standard',
//       monthlyPrice: '14,999',
//       yearlyPrice: '1,79,988',
//       description: 'Ideal for growing businesses',
//       features: [
//         { text: 'Everything in Basic Package', tooltip: 'All Basic features included' },
//         { text: 'Meta Ads — 1 Week Free', tooltip: 'Professional ad campaign setup' },
//         { text: '5 Video Shoots per month', tooltip: 'Enhanced video content' },
//         { text: '5 Story Uploads per day', tooltip: 'More frequent engagement' },
//         { text: '2 Influencer Marketing', tooltip: 'Multiple influencer collaborations' },
//         { text: 'Daily Reels Posting on Instagram & YouTube', tooltip: 'Cross-platform content' }
//       ],
//       gradient: 'from-purple-500 via-pink-500 to-purple-600',
//       popular: true,
//       icon: '⚡',
//     },
//     {
//       name: 'Premium',
//       monthlyPrice: '19,999',
//       yearlyPrice: '2,39,988',
//       description: 'For established brands and agencies',
//       features: [
//         { text: 'Everything in Advanced Package', tooltip: 'All Standard features plus more' },
//         { text: 'Influencer Marketing Collaborations (Free)', tooltip: 'Unlimited collaborations' },
//         { text: 'Daily Reels & Posts on Instagram + YouTube + Facebook', tooltip: 'Maximum reach across platforms' },
//         { text: 'Full Platform Management', tooltip: 'Complete social media oversight' },
//         { text: 'Advanced Growth Strategy & Reporting', tooltip: 'Data-driven insights & planning' }
//       ],
//       gradient: 'from-pink-500 via-red-500 to-orange-500',
//       popular: false,
//       icon: '👑',
//     },
//   ];

//   // Toggle billing cycle with confetti animation
//   const handleToggle = () => {
//     setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 1200);
//   };

//   return (
//     <section id="pricing" ref={ref} className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Animated background orbs */}
//       <FloatingOrbs />
      
//       {/* Confetti effect */}
//       <Confetti show={showConfetti} />
      
//       {/* Animated gradient overlay based on scroll */}
//       <motion.div 
//         style={{ y: backgroundY, opacity }}
//         className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"
//       />

//       <div className="container mx-auto relative z-10">
//         {/* Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl md:text-7xl font-bold text-center mb-6"
//         >
//           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
//             Pricing Plans
//           </span>
//         </motion.h2>
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-center text-gray-300 mb-12 text-xl max-w-2xl mx-auto"
//         >
//           Choose the perfect plan to elevate your brand's social media presence
//         </motion.p>

//         {/* Billing Toggle with enhanced animations */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex justify-center items-center gap-4 mb-16"
//         >
//           <motion.span 
//             animate={{ 
//               scale: billingCycle === 'monthly' ? 1.1 : 1,
//               color: billingCycle === 'monthly' ? '#fff' : '#9ca3af'
//             }}
//             className="font-semibold text-lg"
//           >
//             Monthly
//           </motion.span>
          
//           <button
//             onClick={handleToggle}
//             className="relative w-20 h-10 rounded-full overflow-hidden shadow-lg"
//           >
//             {/* Animated gradient background */}
//             <motion.div
//               animate={{ 
//                 background: billingCycle === 'monthly' 
//                   ? 'linear-gradient(to right, #3B82F6, #8B5CF6)' 
//                   : 'linear-gradient(to right, #10B981, #059669)'
//               }}
//               className="absolute inset-0"
//             />
            
//             {/* Toggle knob with spring animation */}
//             <motion.div
//               animate={{ x: billingCycle === 'monthly' ? 4 : 44 }}
//               transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//               className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-md"
//             />
//           </button>
          
//           <motion.span 
//             animate={{ 
//               scale: billingCycle === 'yearly' ? 1.1 : 1,
//               color: billingCycle === 'yearly' ? '#fff' : '#9ca3af'
//             }}
//             className="font-semibold text-lg"
//           >
//             Yearly
//             <motion.span 
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="ml-2 text-sm text-green-400 font-bold px-2 py-1 bg-green-500/20 rounded-full"
//             >
//               Save 17%
//             </motion.span>
//           </motion.span>
//         </motion.div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
//               whileHover={{ 
//                 scale: 1.05, 
//                 y: -10,
//                 rotateY: hoveredCard === index ? 5 : 0 
//               }}
//               onHoverStart={() => setHoveredCard(index)}
//               onHoverEnd={() => setHoveredCard(null)}
//               className="relative group"
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {/* Glassmorphism card with glow effect */}
//               <div className={`relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border ${
//                 plan.popular 
//                   ? 'border-purple-400/50' 
//                   : 'border-white/20'
//               } shadow-2xl overflow-hidden h-full`}>
                
//                 {/* Animated glow border for popular plan */}
//                 {plan.popular && (
//                   <motion.div
//                     animate={{
//                       rotate: [0, 360],
//                     }}
//                     transition={{
//                       duration: 8,
//                       repeat: Infinity,
//                       ease: "linear"
//                     }}
//                     className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-75"
//                     style={{ zIndex: -1 }}
//                   />
//                 )}
                
//                 {/* Card glow effect on hover */}
//                 <motion.div
//                   animate={{
//                     opacity: hoveredCard === index ? 0.3 : 0
//                   }}
//                   className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} blur-2xl`}
//                 />

//                 {/* Popular badge */}
//                 {plan.popular && (
//                   <motion.div
//                     initial={{ scale: 0, rotate: -45 }}
//                     animate={{ scale: 1, rotate: 0 }}
//                     transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
//                     className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-bl-3xl font-semibold text-sm shadow-lg"
//                   >
//                     ⭐ Most Popular
//                   </motion.div>
//                 )}

//                 {/* Icon with gradient background */}
//                 <motion.div 
//                   whileHover={{ scale: 1.1, rotate: 10 }}
//                   className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
//                 >
//                   <span className="text-4xl">{plan.icon}</span>
//                 </motion.div>

//                 <h3 className="text-4xl font-bold mb-2 text-white relative z-10">{plan.name}</h3>
//                 <p className="text-gray-300 mb-6 relative z-10">{plan.description}</p>

//                 {/* Animated pricing */}
//                 <div className="mb-8 relative z-10">
//                   <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                     ₹<AnimatedNumber value={billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice} />
//                   </span>
//                   <span className="text-gray-400 ml-2 text-lg">
//                     /{billingCycle === 'monthly' ? 'month' : 'year'}
//                   </span>
//                 </div>

//                 {/* Features list with tooltips */}
//                 <ul className="space-y-4 mb-8 relative z-10">
//                   {plan.features.map((feature, idx) => (
//                     <motion.li
//                       key={idx}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : {}}
//                       transition={{ delay: 0.6 + index * 0.15 + idx * 0.05 }}
//                       className="flex items-start group/item"
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.2, rotate: 360 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </motion.div>
//                       <Tooltip text={feature.tooltip}>
//                         <span className="text-gray-200 group-hover/item:text-white transition-colors cursor-help">
//                           {feature.text}
//                         </span>
//                       </Tooltip>
//                     </motion.li>
//                   ))}
//                 </ul>

//                 {/* CTA Button with glow effect */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-full py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group/btn ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
//                       : 'bg-white/20 text-white hover:bg-white/30'
//                   }`}
//                 >
//                   <span className="relative z-10">Get Started</span>
//                   {plan.popular && (
//                     <motion.div
//                       animate={{
//                         x: ['-100%', '100%']
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "linear"
//                       }}
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                     />
//                   )}
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Custom Plan CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 1.2 }}
//           className="text-center"
//         >
//           <p className="text-gray-300 mb-6 text-lg">Need a custom solution tailored to your needs?</p>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block px-10 py-4 border-2 border-purple-400 text-white rounded-full font-semibold hover:bg-purple-600 hover:border-purple-600 transition duration-300 shadow-lg hover:shadow-purple-500/50"
//           >
//             Contact Us for Custom Plans
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* CSS for gradient animation */}
//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// }









// 3RD VERSION



'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

// Animated number component using react-spring
function AnimatedNumber({ value }) {
  const props = useSpring({ 
    number: parseFloat(value.replace(/,/g, '')),
    config: { tension: 100, friction: 20 }
  });
  
  return (
    <animated.span>
      {props.number.to(n => n.toLocaleString('en-IN', { maximumFractionDigits: 0 }))}
    </animated.span>
  );
}

// Confetti animation component
function Confetti({ show }) {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: '50%', 
            y: '50%', 
            scale: 0,
            opacity: 1 
          }}
          animate={{ 
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut"
          }}
          className={`absolute w-3 h-3 rounded-full`}
          style={{
            background: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 4)]
          }}
        />
      ))}
    </div>
  );
}

// Floating orb background component
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
      />
      
      {/* Large gradient orb 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full blur-3xl"
      />
      
      {/* Medium orb */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
      />
    </div>
  );
}

// Simplified mobile orbs (fewer, less intense)
function MobileOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-2xl"
      />
    </div>
  );
}

// Tooltip component
function Tooltip({ children, text }) {
  const [show, setShow] = useState(false);
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10"
          >
            {text}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Scroll-based gradient animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: '11,999',
      yearlyPrice: '1,29,589',
      description: 'Perfect for small businesses getting started',
      features: [
        { text: '2 Posts every weekend', tooltip: 'High-quality content twice per week' },
        { text: 'Festival Special Posts', tooltip: 'Custom posts for all major festivals' },
        { text: 'Instagram Management Only', tooltip: 'Full account management' },
        { text: '3 Story Uploads per day', tooltip: 'Engaging daily stories' },
        { text: '1 Influencer Marketing', tooltip: 'Collaboration with micro-influencer' },
        { text: '4 Video Shoots per month', tooltip: 'Professional video production' },
        { text: 'Full Content Creation Support', tooltip: '24/7 creative team support' },
      ],
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      popular: false,
      icon: '🚀',
    },
    {
      name: 'Standard',
      monthlyPrice: '14,999',
      yearlyPrice: '1,61,989',
      description: 'Ideal for growing businesses',
      features: [
        { text: 'Everything in Basic Package', tooltip: 'All Basic features included' },
        { text: 'Meta Ads — 1 Week Free', tooltip: 'Professional ad campaign setup' },
        { text: '5 Video Shoots per month', tooltip: 'Enhanced video content' },
        { text: '5 Story Uploads per day', tooltip: 'More frequent engagement' },
        { text: '2 Influencer Marketing', tooltip: 'Multiple influencer collaborations' },
        { text: 'Daily Reels Posting on Instagram & YouTube', tooltip: 'Cross-platform content' }
      ],
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
      popular: true,
      icon: '⚡',
    },
    {
      name: 'Premium',
      monthlyPrice: '19,999',
      yearlyPrice: '2,15,989',
      description: 'For established brands and agencies',
      features: [
        { text: 'Everything in Advanced Package', tooltip: 'All Standard features plus more' },
        { text: 'Influencer Marketing Collaborations (Free)', tooltip: 'Unlimited collaborations' },
        { text: 'Daily Reels & Posts on Instagram + YouTube + Facebook', tooltip: 'Maximum reach across platforms' },
        { text: 'Full Platform Management', tooltip: 'Complete social media oversight' },
        { text: 'Advanced Growth Strategy & Reporting', tooltip: 'Data-driven insights & planning' }
      ],
      gradient: 'from-pink-500 via-red-500 to-orange-500',
      popular: false,
      icon: '👑',
    },
  ];

  // Toggle billing cycle with confetti animation
  const handleToggle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1200);
  };

  return (
    <section id="pricing" ref={ref} className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Confetti effect */}
      <Confetti show={showConfetti} />
      
      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden md:block">
        {/* Animated background orbs */}
        <FloatingOrbs />
        
        {/* Animated gradient overlay based on scroll */}
        <motion.div 
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"
        />

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Pricing Plans
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-300 mb-12 text-xl max-w-2xl mx-auto"
          >
            Choose the perfect plan to elevate your brand's social media presence
          </motion.p>

          {/* Billing Toggle with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center gap-4 mb-16"
          >
            <motion.span 
              animate={{ 
                scale: billingCycle === 'monthly' ? 1.1 : 1,
                color: billingCycle === 'monthly' ? '#fff' : '#9ca3af'
              }}
              className="font-semibold text-lg"
            >
              Monthly
            </motion.span>
            
            <button
              onClick={handleToggle}
              className="relative w-20 h-10 rounded-full overflow-hidden shadow-lg"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{ 
                  background: billingCycle === 'monthly' 
                    ? 'linear-gradient(to right, #3B82F6, #8B5CF6)' 
                    : 'linear-gradient(to right, #10B981, #059669)'
                }}
                className="absolute inset-0"
              />
              
              {/* Toggle knob with spring animation */}
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 4 : 44 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-md"
              />
            </button>
            
            <motion.span 
              animate={{ 
                scale: billingCycle === 'yearly' ? 1.1 : 1,
                color: billingCycle === 'yearly' ? '#fff' : '#9ca3af'
              }}
              className="font-semibold text-lg"
            >
              Yearly
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-2 text-sm text-green-400 font-bold px-2 py-1 bg-green-500/20 rounded-full"
              >
                Save 10%
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: hoveredCard === index ? 5 : 0 
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glassmorphism card with glow effect */}
                <div className={`relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-400/50' 
                    : 'border-white/20'
                } shadow-2xl overflow-hidden h-full`}>
                  
                  {/* Animated glow border for popular plan */}
                  {plan.popular && (
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-75"
                      style={{ zIndex: -1 }}
                    />
                  )}
                  
                  {/* Card glow effect on hover */}
                  <motion.div
                    animate={{
                      opacity: hoveredCard === index ? 0.3 : 0
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} blur-2xl`}
                  />

                  {/* Popular badge */}
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
                      className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-bl-3xl font-semibold text-sm shadow-lg"
                    >
                      ⭐ Most Popular
                    </motion.div>
                  )}

                  {/* Icon with gradient background */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  >
                    <span className="text-4xl">{plan.icon}</span>
                  </motion.div>

                  <h3 className="text-4xl font-bold mb-2 text-white relative z-10">{plan.name}</h3>
                  <p className="text-gray-300 mb-6 relative z-10">{plan.description}</p>

                  {/* Animated pricing */}
                  <div className="mb-8 relative z-10">
                    <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      ₹<AnimatedNumber value={billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice} />
                    </span>
                    <span className="text-gray-400 ml-2 text-lg">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  {/* Features list with tooltips */}
                  <ul className="space-y-4 mb-8 relative z-10">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.15 + idx * 0.05 }}
                        className="flex items-start group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <Tooltip text={feature.tooltip}>
                          <span className="text-gray-200 group-hover/item:text-white transition-colors cursor-help">
                            {feature.text}
                          </span>
                        </Tooltip>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button with glow effect */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group/btn ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <span className="relative z-10">Get Started</span>
                    {plan.popular && (
                      <motion.div
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Plan CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6 text-lg">Need a custom solution tailored to your needs?</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 border-2 border-purple-400 text-white rounded-full font-semibold hover:bg-purple-600 hover:border-purple-600 transition duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Contact Us for Custom Plans
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ==================== MOBILE VERSION ==================== */}
      <div className="block md:hidden">
        {/* Simplified mobile orbs */}
        <MobileOrbs />
        
        <div className="container mx-auto relative z-10 px-4">
          {/* Mobile Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-300 mb-8 text-base px-4"
          >
            Choose the perfect plan for your brand
          </motion.p>

          {/* Mobile Billing Toggle - Larger for touch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center gap-3 mb-10"
          >
            <motion.span 
              animate={{ 
                scale: billingCycle === 'monthly' ? 1.05 : 1,
                color: billingCycle === 'monthly' ? '#fff' : '#9ca3af'
              }}
              className="font-semibold text-base"
            >
              Monthly
            </motion.span>
            
            <button
              onClick={handleToggle}
              className="relative w-24 h-12 rounded-full overflow-hidden shadow-lg active:scale-95 transition-transform"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{ 
                  background: billingCycle === 'monthly' 
                    ? 'linear-gradient(to right, #3B82F6, #8B5CF6)' 
                    : 'linear-gradient(to right, #10B981, #059669)'
                }}
                className="absolute inset-0"
              />
              
              {/* Toggle knob - larger for mobile */}
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 4 : 52 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="absolute top-1 w-10 h-10 bg-white rounded-full shadow-md"
              />
            </button>
            
            <motion.span 
              animate={{ 
                scale: billingCycle === 'yearly' ? 1.05 : 1,
                color: billingCycle === 'yearly' ? '#fff' : '#9ca3af'
              }}
              className="font-semibold text-base"
            >
              Yearly
              <motion.span 
                className="ml-2 text-xs text-green-400 font-bold px-2 py-1 bg-green-500/20 rounded-full"
              >
                Save 17%
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Mobile Pricing Cards - Vertical Stack */}
          <div className="space-y-6 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                {/* Simplified glassmorphism card for mobile */}
                <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${
                  plan.popular 
                    ? 'border-purple-400/50 shadow-lg shadow-purple-500/20' 
                    : 'border-white/20'
                } overflow-hidden`}>
                  
                  {/* Simplified glow for popular plan on mobile */}
                  {plan.popular && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-50" style={{ zIndex: -1 }} />
                  )}

                  {/* Popular badge - mobile optimized */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-bl-2xl font-semibold text-xs">
                      ⭐ Popular
                    </div>
                  )}

                  {/* Icon - smaller for mobile */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <span className="text-2xl">{plan.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-5">{plan.description}</p>

                  {/* Pricing - mobile optimized */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      ₹<AnimatedNumber value={billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice} />
                    </span>
                    <span className="text-gray-400 ml-2 text-base">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>

                  {/* Features list - compact for mobile */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 + idx * 0.03 }}
                        className="flex items-start"
                      >
                        <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200 text-sm leading-relaxed">{feature.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button - larger for touch */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 text-base ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-white/20 text-white active:bg-white/30'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Custom Plan CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center pb-8"
          >
            <p className="text-gray-300 mb-4 text-sm">Need a custom solution?</p>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-3 border-2 border-purple-400 text-white rounded-full font-semibold active:bg-purple-600 active:border-purple-600 transition duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}