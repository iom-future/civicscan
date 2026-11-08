import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import FeatureCard from '../ui/FeatureCard';
import Reveal from '../ui/Reveal';
import { capabilitiesList } from '../../data/siteData';

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-b border-slate-200 bg-[#F4F7FA] py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="THE CIVICSCAN PLATFORM"
            title="A Clearer Picture of Your City's Infrastructure."
            description="From individual reports to city-wide infrastructure patterns, CivicScan helps organize the information needed to make better maintenance decisions."
          />
        </Reveal>

        {/* Asymmetrical 12-column Bento Architecture */}
        <Reveal
          stagger={0.08}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12"
        >
          {/* Row 1: 01 (7 cols) + 03 (5 cols) */}
          <FeatureCard capability={capabilitiesList[0]} />
          <FeatureCard capability={capabilitiesList[2]} />

          {/* Row 2: 04 (5 cols) + 02 (7 cols) */}
          <FeatureCard capability={capabilitiesList[3]} />
          <FeatureCard capability={capabilitiesList[1]} />

          {/* Row 3: 05 (7 cols) + 06 (5 cols) */}
          <FeatureCard capability={capabilitiesList[4]} />
          <FeatureCard capability={capabilitiesList[5]} />
        </Reveal>
      </Container>
    </section>
  );
}

