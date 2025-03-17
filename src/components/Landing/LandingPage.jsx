import React from 'react';
import HeroSection from './Hero/HeroSection';
import Header from './Header';
import MiniIntro from './MiniIntro';
import ProjectsSection from './Project/ProjectsSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Header />
      <HeroSection />
      <MiniIntro />
      <ProjectsSection />
    </div>
  );
}

export default LandingPage