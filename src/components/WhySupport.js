import React from 'react';
import styles from './WhySupport.module.css';

function WhySupport() {
  return (
    <section className={`section ${styles.whySupport}`}>
      <div className="container">
        <h2>Why Support Smakro?</h2>
        <div className={styles.content}>
          <p>
            Smakro is a community-driven project aimed at helping TFT players improve their gameplay.
            Your support helps us maintain and develop new features, keeping the tool free for everyone.
          </p>
          <ul>
            <li>Support ongoing development</li>
            <li>Keep features free for everyone</li>
            <li>Help improve the TFT community</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhySupport;
