import { useState } from 'react';
import styles from '../styles/ScreenshotDemo.module.css';

export default function ScreenshotDemo() {
  const [mode, setMode] = useState('Driver');
  const [currentFrame, setCurrentFrame] = useState(0);

  const slides = {
    Passenger: [
      { src: '/Login.jpg', alt: 'Login screen' },
      { src: '/DriverHomeArrived.png', alt: 'Home screen' },
      { src: '/CreateRide.jpg', alt: 'Create ride screen' },
      { src: '/PickDriverSelection.png', alt: 'Driver selection screen' },
      { src: '/PassagierOngoing.png', alt: 'Live ride screen' },
      { src: '/Review.png', alt: 'Review screen' },
      { src: '/Activity.jpg', alt: 'Activity screen' },
    ],
    Driver: [
      { src: '/Login.jpg', alt: 'Login screen' },
      { src: '/DriverHome.png', alt: 'Driver Home' },
      { src: '/DriverNotific.png', alt: 'Notification screen' },
      { src: '/StartRideDriver.png', alt: 'Start ride screen' },
      { src: '/OngoingActivityDriver.jpg', alt: 'Ongoing ride screen' },
      { src: '/CompletedDrives.png', alt: 'Completed rides screen' },

    ],
  };

  const currentSlides = slides[mode];

  const handleNext = () =>
    setCurrentFrame((prev) => (prev + 1) % currentSlides.length);
  const handlePrev = () =>
    setCurrentFrame((prev) => (prev - 1 + currentSlides.length) % currentSlides.length);
  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setCurrentFrame(0);
  };

  return (
    <div className={styles['screenshot-demo']}>
      <div className={styles['mode-switch']}>
      <button
          className={`${mode === 'Passenger' ? styles['active'] : ''}`}
          onClick={() => handleModeSwitch('Passenger')}
        >
          Passenger
        </button>
        <button
          className={`${mode === 'Driver' ? styles['active'] : ''}`}
          onClick={() => handleModeSwitch('Driver')}
        >
          Driver
        </button>
      </div>
      <div className={styles['slider']}>
        <img
          src={currentSlides[currentFrame].src}
          alt={currentSlides[currentFrame].alt}
        />
        <div className={styles['slider-buttons']}>
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className={styles['frame-indicators']}>
        {currentSlides.map((_, index) => (
          <span
            key={index}
            className={`${index === currentFrame ? styles['active'] : ''}`}
            onClick={() => setCurrentFrame(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
