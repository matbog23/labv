import Header from '../components/Header';
import Features from '../components/Features';
import ScreenshotDemo from '../components/ScreenshotDemo';
import Bio from '../components/Bio';
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
          <Bio />
        </section>
      </main>
      <Footer />
    </>
  );
}
