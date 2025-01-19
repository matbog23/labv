import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
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
        <section id="demo">
          <ScreenshotDemo />
        </section>
        <section id="about">
        </section>
      </main>
      <Footer />
    </>
  );
}
