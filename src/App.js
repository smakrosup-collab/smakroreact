import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhySupport from './components/WhySupport';
import FundingGoal from './components/FundingGoal';
import Roadmap from './components/Roadmap';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <WhySupport />
      <FundingGoal />
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="support">
        <CallToAction />
      </div>
    </div>
  );
}

export default App;
