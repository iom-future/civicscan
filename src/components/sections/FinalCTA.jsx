import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../layout/Container';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import cityAerialImg from '../../assets/images/city-aerial.jpg';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#101C2C] py-24 text-white sm:py-32">
      {/* Authentic Aerial City Photograph with Deep Navy Overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={cityAerialImg}
          alt="Aerial photograph of a dense modern African urban environment and road network"
          width="1440"
          height="720"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-22 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101C2C] via-[#101C2C]/92 to-[#101C2C]/80" />
      </div>

      {/* Subtle Geospatial Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-cad-grid-dark opacity-70" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <SectionLabel dark>CIVIC INFRASTRUCTURE INTELLIGENCE</SectionLabel>
            </div>

            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[48px] leading-[1.12]">
              Better Cities Begin With Better Information.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Help create a future where infrastructure problems are easier to
              identify, understand, prioritize, and resolve.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="#pilot-programme"
                variant="teal"
                size="lg"
                icon={ArrowRight}
              >
                Partner With CivicScan
              </Button>
              <Button href="#how-it-works" variant="outlineDark" size="lg">
                Review Platform Workflow
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

