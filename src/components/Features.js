import React from 'react';
import styles from './Features.module.css';

const features = [
  {
    icon: "📊",
    title: "Matchup Tracking",
    description: "Track your matchups and win rates against different compositions"
  },
  {
    icon: "🎯",
    title: "Real-time Comp Suggestions",
    description: "Get intelligent suggestions based on your current game state"
  },
  {
    icon: "👑",
    title: "Champion Info",
    description: "Detailed champion statistics and optimal positioning"
  },
  {
    icon: "⚔️",
    title: "Item Combinations",
    description: "Best item builds and combination suggestions"
  },
  {
    icon: "📈",
    title: "Performance Statistics",
    description: "Track your progress and improvement over time"
  }
];

function Features() {
  return (
    <section className={`section ${styles.features}`}>
      <div className="container">
        <h2>Features</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
