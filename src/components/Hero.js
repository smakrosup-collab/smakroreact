import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Smakro: Smarter Strategies for TFT</h1>
        <p>Enhance your gameplay with real-time analysis and smart suggestions</p>
        <div className={styles.buttons}>
          <a href="https://ko-fi.com/smakro" className="button button-primary">Support on Ko-fi</a>
          <a href="https://paypal.me/smakro" className="button button-secondary">Donate via PayPal</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
