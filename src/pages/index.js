import Header from '../components/Header';
import Features from '../components/Features';
import ScreenshotDemo from '../components/ScreenshotDemo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
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