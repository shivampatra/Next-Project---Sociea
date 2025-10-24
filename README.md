This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




## ================================================================================================================================== ##
## ================================================================================================================================== ##
## ================================================================================================================================== ##
## ================================================================================================================================== ##
## ================================================================================================================================== ##
## ================================================================================================================================== ##



# 🚀 Sociea - Premium Social Media Marketing Landing Page

A cutting-edge, highly animated landing page built with Next.js 14, featuring 3D graphics, scroll animations, and premium interactions.

## ✨ Features

- 🎨 **3D Hero Section** - Interactive Three.js sphere with particle system
- 🌈 **Dynamic Gradients** - GSAP-powered scroll-synced background transitions
- ⚡ **Smooth Animations** - Framer Motion for buttery-smooth page transitions
- 📜 **Scroll Effects** - GSAP ScrollTrigger for advanced scroll animations
- 🎭 **Custom Shaders** - GLSL shaders for unique visual effects
- 📱 **Fully Responsive** - Perfect on all devices
- 🚀 **Performance Optimized** - Code splitting, lazy loading, and Next.js optimization
- ♿ **Accessible** - WCAG compliant with semantic HTML

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| Framer Motion | Animation library for UI components |
| Three.js (R3F) | 3D graphics via react-three-fiber |
| GSAP | Advanced scroll-triggered animations |
| Drei | Three.js helpers and utilities |
| Tailwind CSS | Utility-first styling |
| Lottie | Vector animation support |

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest sociea-landing --typescript=false --tailwind --app
cd sociea-landing
```

### Step 2: Install Dependencies

```bash
# Core animation libraries
npm install framer-motion gsap

# 3D graphics
npm install three @react-three/fiber @react-three/drei

# Additional utilities
npm install lottie-react react-intersection-observer

# Dev dependencies
npm install -D @types/three
```

### Step 3: Project Structure

Create the following folder structure:

```
sociea-landing/
├── public/
│   ├── logo.png          # Your logo file
│   └── animations/       # Lottie JSON files (optional)
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── GradientBackground.jsx
│   │   ├── ScrollSections.jsx
│   │   ├── Navigation.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── animations.js
│   └── shaders/
│       └── gradientShader.js
├── package.json
└── next.config.js
```

### Step 4: Copy Files

Copy all the provided component files into their respective directories.

### Step 5: Add Your Logo

Place your `logo.png` file in the `public/` directory.

### Step 6: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

## 🎨 Customization Guide

### Colors

Update the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        blue: '#3958A8',     // Primary blue
        purple: '#764ba2',   // Primary purple
        pink: '#f093fb',     // Accent pink
      },
    },
  },
}
```

### 3D Object

Modify the 3D sphere in `components/Hero.jsx`:

```javascript
// Change sphere properties
<Sphere args={[radius, widthSegments, heightSegments]} scale={size}>
  <MeshDistortMaterial
    color="#667eea"      // Change color
    distort={0.4}        // Distortion amount
    speed={2}            // Animation speed
  />
</Sphere>
```

### Animations

Adjust animation timings in `utils/animations.js`:

```javascript
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }, // Change duration
}
```

### Content

Update text content directly in component files:
- Hero text: `components/Hero.jsx`
- Services: `components/Services.jsx`
- Pricing: `components/Pricing.jsx`
- Contact info: `components/Contact.jsx`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance Optimization

### Implemented Optimizations

1. **Code Splitting** - Dynamic imports for heavy components
2. **Image Optimization** - Next.js Image component with lazy loading
3. **Lazy Loading** - 3D scenes load only when needed
4. **CSS Optimization** - Tailwind purges unused styles
5. **Animation Performance** - GPU-accelerated transforms
6. **Reduced Motion** - Respects user preferences

### Lighthouse Scores (Target)

- ⚡ Performance: 90+
- ♿ Accessibility: 95+
- 💚 Best Practices: 95+
- 🎯 SEO: 100

## 🎯 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## 🐛 Troubleshooting

### Three.js Not Rendering

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### GSAP ScrollTrigger Issues

Make sure GSAP is registered:

```javascript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
```

### Build Errors

Check that all imports use correct paths with `@/` alias:

```javascript
import Hero from '@/components/Hero'  // ✓ Correct
import Hero from '../components/Hero' // ✗ Avoid
```

## 📚 Key Concepts

### Framer Motion

Used for:
- Page transitions
- Component entrance animations
- Hover/tap interactions
- Stagger animations

```javascript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.05 }}
/>
```

### GSAP ScrollTrigger

Used for:
- Scroll-based animations
- Parallax effects
- Background color transitions
- Element pinning

```javascript
gsap.to(element, {
  scrollTrigger: {
    trigger: section,
    start: 'top 80%',
    end: 'top 20%',
  },
  opacity: 1,
  y: 0,
})
```

### React Three Fiber

Used for:
- 3D object rendering
- Particle systems
- Interactive camera controls
- Performance optimization

```javascript
<Canvas>
  <Sphere>
    <MeshDistortMaterial />
  </Sphere>
  <OrbitControls />
</Canvas>
```

## 🔗 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📝 License

MIT License - feel free to use this for commercial projects!

## 💬 Support

For questions or issues:
1. Check the troubleshooting section above
2. Review component comments in the code
3. Consult official documentation links

## 🎓 Learning Path

### Beginner Level
1. Understand Next.js App Router structure
2. Learn basic Framer Motion animations
3. Explore Tailwind CSS utilities

### Intermediate Level
1. Master GSAP ScrollTrigger
2. Create custom Three.js scenes
3. Optimize performance with dynamic imports

### Advanced Level
1. Write custom GLSL shaders
2. Build complex 3D interactions
3. Implement advanced scroll effects

## 🔥 Pro Tips

1. **Animation Performance**: Use `will-change` CSS property sparingly
2. **Mobile First**: Test on real devices, not just browser dev tools
3. **Accessibility**: Always test with keyboard navigation
4. **SEO**: Add proper meta tags in `layout.jsx`
5. **Loading States**: Implement skeleton screens for better UX

---

Built with ❤️ for modern web experiences