import React, { useEffect, useRef } from 'react';
import styles from './CallToAction.module.css';

function CallToAction() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trackDonationClick = (platform) => {
    // Analytics tracking
    console.log(`Donation click: ${platform}`);
  };

  return (
    <section className={`section ${styles.cta}`} ref={sectionRef}>
      <div className="container">
        <h2>Support Smakro Today</h2>
        <p className={styles.subtitle}>Join our growing community of supporters</p>
        <div className={styles.donationInfo}>
          <div className={styles.stat}>
            <span>50+</span>
            <p>Active Supporters</p>
          </div>
          <div className={styles.stat}>
            <span>$500</span>
            <p>Raised So Far</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <a 
            href="https://ko-fi.com/smakro" 
            className={`button button-primary ${styles.kofi}`}
            onClick={() => trackDonationClick('kofi')}
          >
            <span className={styles.icon}>☕</span>
            Support on Ko-fi
          </a>
          <a 
            href="https://paypal.me/smakro" 
            className={`button button-secondary ${styles.paypal}`}
            onClick={() => trackDonationClick('paypal')}
          >
            <span className={styles.icon}>💝</span>
            Donate via PayPal
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
