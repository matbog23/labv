import styles from '../styles/Hero.module.css'; // Import the CSS module

export default function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles['hero-content']}>
        <div className={styles['hero-text']}>
          <h1>Welcome to Our App</h1>
          <p>Discover how we make your journey easier, faster, and more convenient.</p>
          <button onClick={scrollToDemo}>See the App in Action</button>
        </div>
      </div>
    </section>
  );
}
