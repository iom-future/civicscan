import React from 'react';
import { Radar, TrendingUp, CalendarClock } from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import MapPreview from '../ui/MapPreview';
import Reveal from '../ui/Reveal';
import { cityIntelligenceAreas } from '../../data/siteData';

const iconMap = {
  Radar,
  TrendingUp,
  CalendarClock,
};

export default function CityIntelligence() {
  return (
    <section
      id="city-intelligence"
      className="border-b border-[#22354E] bg-[#101C2C] py-20 text-white sm:py-28 bg-cad-grid-dark"
    >
      <Container>
        <Reveal>
          <SectionHeader
            dark
            eyebrow="THE LONG-TERM VISION"
            title="From Fixing Individual Problems to Understanding the City."
            description="A city generates thousands of infrastructure observations over time. When these observations are organized and connected with verified maintenance records, they can reveal patterns that individual reports cannot show."
          />
        </Reveal>

        {/* Three Intelligence Areas */}
        <Reveal
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {cityIntelligenceAreas.map((area, idx) => {
            const IconComponent = iconMap[area.iconName] || Radar;
            return (
              <div
                key={area.id}
                className="rounded-md border border-[#22354E] bg-[#15253A]/90 p-6 transition-colors hover:border-[#6B9CFF]/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#55D3BD]">
                    0{idx + 1} — INTELLIGENCE LAYER
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded border border-[#283E5C] bg-[#101C2C] text-[#6B9CFF]">
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>
                </div>

                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {area.description}
                </p>
              </div>
            );
          })}
        </Reveal>

        {/* Large Interactive Urban Command Centre Dashboard */}
        <Reveal delay={0.15} className="mt-10">
          <MapPreview />
        </Reveal>
      </Container>
    </section>
  );
}

