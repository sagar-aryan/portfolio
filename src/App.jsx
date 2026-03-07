import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EngineeringSection from './components/EngineeringSection';
import AchievementsEducation from './components/AchievementsEducation';
import ContactSection from './components/ContactSection';

function App() {

  return (
    <main className="bg-black text-white min-h-screen selection:bg-matrix-green/30 selection:text-matrix-green font-sans overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EngineeringSection />
      <AchievementsEducation />
      <ContactSection />
    </main>
  )
}

export default App;
