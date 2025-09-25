import React, { useState, useEffect } from 'react';
import styles from './FundingGoal.module.css';

function FundingGoal() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const goal = 1000;

  useEffect(() => {
    const fetchFunding = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://ko-fi.com/api/...');
        const data = await response.json();
        const percentage = (data.amount / goal) * 100;
        setProgress(Math.min(percentage, 100));
      } catch (error) {
        setError('Failed to load funding data');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFunding();
  }, []);

  if (loading) return <div className={styles.loading}>Loading funding data...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <section className={`section ${styles.fundingGoal}`}>
      <div className="container">
        <h2>Funding Progress</h2>
        <div className={styles.progressBar}>
          <div 
            className={styles.progress}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p>{progress}% of ${goal} goal reached</p>
      </div>
    </section>
  );
}

export default FundingGoal;
