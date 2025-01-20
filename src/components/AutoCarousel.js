import { useState, useEffect } from 'react';
import styles from '../styles/AutoCarousel.module.css';

export default function AutoCarousel() {
  const [mode, setMode] = useState('Passenger');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideDuration = 8000;

  const slides = {
  Passenger: [
    {
      src: '/Login.jpg',
      alt: 'Login screen',
      title: 'Login',
      text: 'Sign in to your account with ease. Enjoy a secure and seamless login process to access all the features designed to enhance your journey.'
    },
    {
      src: '/DriverHomeArrived.png',
      alt: 'Home screen',
      title: 'Home Screen',
      text: 'Welcome to your personalized home screen. Check your current status, plan your next ride, and stay informed about ongoing activities.'
    },
    {
      src: '/CreateRide.jpg',
      alt: 'Create ride screen',
      title: 'Create a Ride',
      text: 'Plan your trip in just a few taps. Enter your destination, choose your preferences, and create a ride that suits your schedule perfectly.'
    },
    {
      src: '/PickDriverSelection.png',
      alt: 'Driver selection screen',
      title: 'Select a Driver',
      text: 'Choose from a list of available drivers that match your preferences. View ratings, vehicle details, and make an informed choice for your journey.'
    },
    {
      src: '/PassagierOngoing.png',
      alt: 'Live ride screen',
      title: 'Live Ride',
      text: 'Track your journey in real-time with live updates on your driver’s location. Stay connected and informed every step of the way.'
    },
    {
      src: '/Review.png',
      alt: 'Review screen',
      title: 'Leave a Review',
      text: 'Share your feedback about your ride. Your review helps us improve the experience and ensure top-notch service for every user.'
    },
    {
      src: '/Activity.jpg',
      alt: 'Activity screen',
      title: 'Activity Overview',
      text: 'Get a detailed view of your ride history. Monitor past trips, track expenses, and manage your activity with ease.'
    },
  ],
  Driver: [
    {
      src: '/Login.jpg',
      alt: 'Login screen',
      title: 'Login',
      text: 'Log in to your driver account effortlessly. Gain access to tools and features designed to help you manage and optimize your workday.'
    },
    {
      src: '/DriverHome.png',
      alt: 'Driver Home',
      title: 'Home Screen',
      text: 'Stay organized with your home screen. View scheduled rides, notifications, and earnings all in one place, ready for your next trip.'
    },
    {
      src: '/DriverNotific.png',
      alt: 'Notification screen',
      title: 'Notifications',
      text: 'Stay updated on ride requests and important alerts. Never miss a new opportunity or a critical update with instant notifications.'
    },
    {
      src: '/StartRideDriver.png',
      alt: 'Start ride screen',
      title: 'Start a Ride',
      text: 'Easily start your ride with just a tap. Follow the optimized route and provide an efficient and safe journey for your passengers.'
    },
    {
      src: '/OngoingActivityDriver.jpg',
      alt: 'Ongoing ride screen',
      title: 'Ongoing Ride',
      text: 'Monitor your current ride in real-time. Stay informed about the route, your passenger’s preferences, and estimated time of arrival.'
    },
    {
      src: '/CompletedDrives.png',
      alt: 'Completed rides screen',
      title: 'Completed Rides',
      text: 'Review your completed rides and track your performance. Access summaries and insights to help you improve and earn more.'
    },
  ],
};


  const currentSlides = slides[mode];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 100 / (slideDuration / 100) : 0));
      if (progress >= 100) {
        handleNext();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [progress]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % currentSlides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length);
    setProgress(0);
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setCurrentSlide(0);
    setProgress(0);
  };

  return (
    <div className={styles.container}>
        <h1>The RYDR app flow</h1>
      <div className={styles['mode-switch-container']}>
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
      </div>
      <div className={styles['auto-carousel']}>
        <div className={styles['carousel-content']}>
          <div className={styles['carousel-image-wrapper']}>
            <img
              src={currentSlides[currentSlide].src}
              alt={currentSlides[currentSlide].alt}
              className={styles['carousel-image']}
            />
          </div>
          <div className={styles['carousel-text']}>
            <h2>{currentSlides[currentSlide].title}</h2>
            <p>{currentSlides[currentSlide].text}</p>
          </div>
        </div>

        <div className={styles['pagination']}>
          <button className={styles['prev-button']} onClick={handlePrev}>
            Previous
          </button>
          <div className={styles['progress-bar']}>
            <div
              className={styles['progress']}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button className={styles['next-button']} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
