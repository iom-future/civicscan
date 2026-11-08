import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import HowItWorks from '../components/sections/HowItWorks';
import Capabilities from '../components/sections/Capabilities';
import IntelligenceLoop from '../components/sections/IntelligenceLoop';
import Audience from '../components/sections/Audience';
import CityIntelligence from '../components/sections/CityIntelligence';
import Trust from '../components/sections/Trust';
import PilotProgramme from '../components/sections/PilotProgramme';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#142235] overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-[#101C2C] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-16 sm:pt-[70px]">
        <Hero />
        <Problem />
        <HowItWorks />
        <Capabilities />
        <IntelligenceLoop />
        <Audience />
        <CityIntelligence />
        <Trust />
        <PilotProgramme />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

