// // src/app/page.jsx
// import Hero from "@/components/Hero";
// import GradientBackground from "@/components/GradientBackground";
// // import ScrollSections from "@/components/ScrollSections";
// // import WhyChoose from "@/components/WhyChoose";
// // import Services from "@/components/Services";
// // import Portfolio from "@/components/Portfolio";
// import Testimonials from "@/components/Testimonials";
// // import Pricing from "@/components/Pricing";
// import Contact from "@/components/Contact";
// // import Footer from "@/components/Footer";
// // import Navigation from "@/components/Navigation";

// export default function HomePage() {
//   return (
//     <>
//       {/* Navigation bar */}
//       {/* <Navigation /> */}

//       {/* Hero section with 3D sphere or Lottie animation */}
//       <Hero />

//       {/* Optional gradient background overlay */}
//       <GradientBackground />

//       {/* Scroll-triggered sections */}
//       {/* <ScrollSections> */}
//         {/* <WhyChoose /> */}
//         {/* <Services /> */}
//         {/* <Portfolio /> */}
//         <Testimonials />
//         {/* <Pricing /> */}
//         <Contact />
//       {/* </ScrollSections> */}

//       {/* Footer */}
//       {/* <Footer /> */}
//     </>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import GradientBackground from '@/components/GradientBackground';
import Navigation from '@/components/Navigation';
import ScrollSections from '@/components/ScrollSections';
import WhyChoose from '@/components/WhyChoose';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ModernAboutSection from '@/components/AboutTeam';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <Hero />
      <ScrollSections />
      <WhyChoose />
      <Services />
      <Portfolio />
      <Testimonials />
       <ModernAboutSection />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}