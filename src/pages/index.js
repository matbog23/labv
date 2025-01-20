import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AutoCarousel from '../components/AutoCarousel';
import ScreenshotDemo from '../components/ScreenshotDemo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="demo1">
          <AutoCarousel />
        </section>
        <section id="demo3">
          <ScreenshotDemo />
        </section>
        <section id="about">
        </section>
      </main>
      <Footer />
    </>
  );
}
