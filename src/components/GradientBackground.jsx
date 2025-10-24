'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Animated gradient background that changes colors on scroll
 * Uses GSAP ScrollTrigger to sync color transitions with page scroll
 */
export default function GradientBackground() {
  const bgRef = useRef(null)
  
  useEffect(() => {
    if (!bgRef.current) return
    
    // Color palette for different sections
    const colorStops = [
      { color1: '#667eea', color2: '#764ba2', color3: '#f093fb' }, // Hero
      { color1: '#764ba2', color2: '#f093fb', color3: '#4facfe' }, // Why Choose
      { color1: '#f093fb', color2: '#4facfe', color3: '#667eea' }, // Services
      { color1: '#4facfe', color2: '#667eea', color3: '#764ba2' }, // Portfolio
      { color1: '#667eea', color2: '#f093fb', color3: '#4facfe' }, // Testimonials
    ]
    
    // Create timeline for color transitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    
    // Animate CSS variables
    colorStops.forEach((colors, index) => {
      if (index === 0) return
      
      tl.to(bgRef.current, {
        '--gradient-1': colors.color1,
        '--gradient-2': colors.color2,
        '--gradient-3': colors.color3,
        duration: 1,
        ease: 'none'
      }, index / colorStops.length)
    })
    
    return () => {
      tl.kill()
    }
  }, [])
  
  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 opacity-10"
      style={{
        background: `
          radial-gradient(
            circle at 20% 50%,
            var(--gradient-1, #667eea) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 80%,
            var(--gradient-2, #764ba2) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 40% 20%,
            var(--gradient-3, #f093fb) 0%,
            transparent 50%
          )
        `,
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 15s ease infinite',
      }}
    >
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}