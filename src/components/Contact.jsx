// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { useState } from 'react'

// export default function Contact() {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   })
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: '',
//   })
  
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitMessage, setSubmitMessage] = useState('')
  
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }
  
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     setTimeout(() => {
//       setSubmitMessage('Thank you! We will contact you soon.')
//       setIsSubmitting(false)
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: '',
//       })
      
//       setTimeout(() => {
//         setSubmitMessage('')
//       }, 5000)
//     }, 1500)
//   }
  
//   const contactInfo = [
//     {
//       icon: (
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//       ),
//       title: 'Email',
//       value: 'sociea.co@gmail.com',
//       gradient: 'from-blue-600 to-purple-600',
//     },
//     {
//       icon: (
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
//       ),
//       title: 'Phone',
//       value: '+91 82804 98167',
//       gradient: 'from-purple-600 to-pink-600',
//     },
//     {
//       icon: (
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
//       ),
//       title: 'Location',
//       value: '7th Floor, JSS STP\nBhubaneswar, Odisha',
//       gradient: 'from-pink-600 to-blue-600',
//     },
//   ]
  
//   const socialLinks = [
//     { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
//     { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
//     { icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
//     { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
//   ]
  
//   return (
//     <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white" ref={ref}>
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-4">Let's Work Together</h2>
//           <p className="text-gray-300 text-lg">Ready to grow your brand? Get in touch with us today</p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={info.title}
//                   className="flex items-start"
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
//                 >
//                   <motion.div
//                     className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       {info.icon}
//                     </svg>
//                   </motion.div>
//                   <div>
//                     <h4 className="font-bold mb-1">{info.title}</h4>
//                     <p className="text-gray-300 whitespace-pre-line">{info.value}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               className="flex space-x-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm"
//                   whileHover={{ 
//                     scale: 1.1,
//                     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d={social.icon}/>
//                   </svg>
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl"
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <motion.input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:border-purple-500 outline-none transition duration-300"
//                 whileFocus={{ scale: 1.02 }}
//               />
              
//               <motion.input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:border-purple-500 outline-none transition duration-300"
//                 whileFocus={{ scale: 1.02 }}
//               />
              
//               <motion.input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:border-purple-500 outline-none transition duration-300"
//                 whileFocus={{ scale: 1.02 }}
//               />
              
//               <motion.select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:border-purple-500 outline-none transition duration-300"
//                 whileFocus={{ scale: 1.02 }}
//               >
//                 <option value="" className="text-gray-900">Select Service</option>
//                 <option value="social-media" className="text-gray-900">Social Media Management</option>
//                 <option value="content" className="text-gray-900">Content Creation</option>
//                 <option value="advertising" className="text-gray-900">Advertising Campaigns</option>
//                 <option value="branding" className="text-gray-900">Branding</option>
//               </motion.select>
              
//               <motion.textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows={4}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:border-purple-500 outline-none transition duration-300"
//                 whileFocus={{ scale: 1.02 }}
//               />
              
//               <motion.button
//                 type="submit"
//                 className="w-full py-4 gradient-bg rounded-full font-semibold"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)' }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </motion.button>
//             </form>
            
//             {submitMessage && (
//               <motion.div
//                 className="mt-4 p-4 bg-green-500 text-white rounded-xl text-center"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//               >
//                 {submitMessage}
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }









'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Check, Loader2, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  
  const socialLinks = [
    { 
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      label: 'Facebook',
      href: 'https://facebook.com'
    },
    { 
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      label: 'Twitter',
      href: 'https://twitter.com'
    },
    { 
      icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
      label: 'Instagram',
      href: 'https://www.instagram.com/sociea.co'
    }
  ]
  
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sociea.co@gmail.com',
      gradient: 'from-blue-600 to-purple-600',
      href: 'mailto:sociea.co@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 82804 98167',
      gradient: 'from-purple-600 to-pink-600',
      href: 'tel:+918280498167',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '7th Floor, JSS STP\nBhubaneswar, Odisha',
      gradient: 'from-pink-600 to-blue-600',
      href: 'https://www.google.com/maps/search/?api=1&query=JSS+STP+Bhubaneswar+Odisha',
    },
  ]
  
  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value) ? '' : 'Please enter a valid email address'
      case 'phone':
        if (!value) return ''
        const phoneRegex = /^[+]?[\d\s()-]{10,}$/
        return phoneRegex.test(value) ? '' : 'Please enter a valid phone number'
      case 'message':
        return value.length >= 10 ? '' : 'Message must be at least 10 characters'
      case 'name':
        return value.trim() ? '' : 'Name is required'
      case 'service':
        return value ? '' : 'Please select a service'
      default:
        return ''
    }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }
  
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxROEtqtyogVRbiBeFV0aweBgihxey1S5qah821SbVyxY08FYwGON_ZmyvbK1Fk4ITQ/exec'
    
    try {
      // Create URL-encoded form data for Google Apps Script
      const params = new URLSearchParams()
      params.append('name', formData.name)
      params.append('email', formData.email)
      params.append('phone', formData.phone || 'N/A')
      params.append('service', formData.service)
      params.append('message', formData.message)
      params.append('timestamp', new Date().toISOString())
      
      const response = await fetch(GOOGLE_SCRIPT_URL + '?' + params.toString(), {
        method: 'GET',
        redirect: 'follow'
      })
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will contact you soon.',
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
      setErrors({})
      setTouched({})
      
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' })
      }, 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      })
      
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' })
      }, 7000)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Work Together
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Ready to grow your brand? Get in touch with us today</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.title === 'Location' ? '_blank' : '_self'}
                  rel={info.title === 'Location' ? 'noopener noreferrer' : ''}
                  className="group block cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                >
                  <div className="flex items-start">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-200 group-hover:text-purple-400 transition-colors">{info.title}</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 whitespace-pre-line leading-relaxed transition-colors">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-sm text-gray-400 font-medium">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon}/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Name"
                      disabled={isSubmitting}
                      className={`w-full px-5 py-4 rounded-xl bg-white/10 border ${
                        errors.name && touched.name ? 'border-red-400' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    <AnimatePresence>
                      {errors.name && touched.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Email"
                      disabled={isSubmitting}
                      className={`w-full px-5 py-4 rounded-xl bg-white/10 border ${
                        errors.email && touched.email ? 'border-red-400' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    <AnimatePresence>
                      {errors.email && touched.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone Number (Optional)"
                      disabled={isSubmitting}
                      className={`w-full px-5 py-4 rounded-xl bg-white/10 border ${
                        errors.phone && touched.phone ? 'border-red-400' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    <AnimatePresence>
                      {errors.phone && touched.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.45 }}
                  >
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      className={`w-full px-5 py-4 rounded-xl bg-white/10 border ${
                        errors.service && touched.service ? 'border-red-400' : 'border-white/20'
                      } text-white focus:border-purple-400 focus:bg-white/15 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <option value="" className="text-gray-900">Select Service</option>
                      <option value="social-media" className="text-gray-900">Social Media Management</option>
                      <option value="content" className="text-gray-900">Content Creation</option>
                      <option value="advertising" className="text-gray-900">Advertising Campaigns</option>
                      <option value="branding" className="text-gray-900">Branding</option>
                    </select>
                    <AnimatePresence>
                      {errors.service && touched.service && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.service}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    rows={5}
                    disabled={isSubmitting}
                    className={`w-full px-5 py-4 rounded-xl bg-white/10 border ${
                      errors.message && touched.message ? 'border-red-400' : 'border-white/20'
                    } text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 outline-none transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  <AnimatePresence>
                    {errors.message && touched.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden group"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)'
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : submitStatus.type === 'success' ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 15 }}
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </span>
                  {!isSubmitting && submitStatus.type !== 'success' && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </div>
              
              <AnimatePresence>
                {submitStatus.message && (
                  <motion.div
                    className={`mt-6 p-4 rounded-xl text-center font-medium ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}