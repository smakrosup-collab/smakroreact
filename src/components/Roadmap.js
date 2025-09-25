import React from 'react';
import styles from './Roadmap.module.css';

const milestones = [
  {
    phase: "Prototype",
    description: "Core features and basic functionality",
    status: "completed"
  },
  {
    phase: "Beta",
    description: "Enhanced features and community testing",
    status: "current"
  },
  {
    phase: "Full Release",
    description: "Complete feature set and optimization",
    status: "upcoming"
  }
];

function Roadmap() {
  return (
    <section className={`section ${styles.roadmap}`}>
      <div className="container">
        <h2>Development Roadmap</h2>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`${styles.milestone} ${styles[milestone.status]}`}
            >
              <h3>{milestone.phase}</h3>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
