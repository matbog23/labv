import { useState } from 'react';
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: 'How do I sign up as a passenger?',
      answer: 'To sign up, simply download the app, enter your email address, and create a password. You’ll also need to verify your phone number.',
    },
    {
      question: 'How do I become a driver?',
      answer: 'To become a driver, download the app, select "Driver Sign-Up," and complete the registration process, including submitting your vehicle and license details for approval.',
    },
    {
      question: 'Can I schedule rides in advance?',
      answer: 'Yes, passengers can schedule rides in advance by selecting a date and time when creating a ride. Drivers will be notified accordingly.',
    },
    {
      question: 'How are drivers paid?',
      answer: 'Drivers are paid weekly via direct deposit. You can view detailed earnings and payout information in the "Completed Rides" section of the app.',
    },
    {
      question: 'What safety measures are in place?',
      answer: 'We prioritize safety with features like real-time ride tracking, driver background checks, and the option to share ride details with friends or family.',
    },
    {
      question: 'What if I need help during a ride?',
      answer: 'If you need assistance, tap the help button in the app to access emergency support or contact customer service directly.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faqContainer}>

      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openQuestion === index ? styles.active : ''
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <div className={styles.faqHeader}>
              <span className={styles.faqQuestion}>{faq.question}</span>
              <span
                className={`${styles.arrow} ${
                  openQuestion === index ? styles.open : ''
                }`}
              >
                &rsaquo;
              </span>
            </div>
            {openQuestion === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
