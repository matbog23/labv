import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
  return (
    <>
    <Header />
    <div className="contact-container">
      <h1>About</h1>
      <section className="bio-section">
        <p>
        My journey into the world of design and development started with an innate curiosity for human behavior. Studying Human Sciences taught me how people think and interact—a foundation that continues to inspire my work in crafting meaningful digital experiences.
        </p>
        <p>
        But it wasn’t until I discovered the vibrant intersection of creativity and technology that my passion truly came to life. At AP Hogeschool Antwerpen, I immersed myself in Grafische en Digitale Media, where I honed my skills in coding, UX/UI design, and storytelling. During my studies, I had the unique opportunity to step into the role of guest lecturer, teaching first-year students the magic of code—a deeply rewarding experience that affirmed my love for collaboration and mentorship.
        </p>
        <p>
        This year, I was honored to be invited by Cronos Group on an inspiring trip to the Ardennes, where I connected with other entrepreneurial young minds. It was a weekend filled with big ideas, camaraderie, and the spark of shared ambition—an experience that underscored my passion for working with people who thrive on creativity and innovation.
        </p>
        <p>
        When I’m not behind a screen, you’ll find me scaling indoor climbing walls, hiking through nature, or exploring Antwerp’s best restaurants. Music plays a constant soundtrack to my life, and there’s nothing I love more than a great conversation over a good meal.
        </p>
      </section>
      <section className="contact-info">
        <p>
          <strong>Email:</strong> 
          <a href="mailto:your-email@example.com"> Booga3rtsM@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> 
          <a href="tel:+32468143887"> +32 468 14 38 87</a>
        </p>
        <p>
          <strong>Follow me on:</strong>
          <a href="https://www.instagram.com/booga3rtsm/" target="_blank" rel="noopener noreferrer"> Instagram</a>, 
          <a href="https://www.linkedin.com/in/mathieu-boogaerts/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </section>
      <div className="portfolio-button">
        <a href="https://www.boogaertsmathieu.be/" target="_blank" rel="noopener noreferrer">
          <button>View My Portfolio</button>
        </a>
      </div>
      <Footer />
    </div>
    </>
  );
}
