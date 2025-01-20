import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AutoCarousel from '../components/AutoCarousel';
import ScreenshotDemo from '../components/ScreenshotDemo';
import Footer from '../components/Footer';

export default function Home() {
  const [isLargeViewport, setIsLargeViewport] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // Large viewport starts from 768px
    const handleResize = () => setIsLargeViewport(mediaQuery.matches);

    // Initial check
    handleResize();

    // Add listener for viewport changes
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="demo1">
          {isLargeViewport ? <AutoCarousel /> : <ScreenshotDemo />}
        </section>
        <section id="about">
        </section>
      </main>
      <Footer />
    </>
  );
}
