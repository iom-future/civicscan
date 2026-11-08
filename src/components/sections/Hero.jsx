import React, { useRef } from 'react';
import { ArrowRight, Scan, MapPin, BarChart2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Container from '../layout/Container';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import DashboardPreview from '../ui/DashboardPreview';
import heroUrbanImg from '../../assets/images/hero-urban-infrastructure.jpg';

const trustIndicators = [
  {
    icon: Scan,
    label: 'AI-assisted infrastructure assessment',
  },
  {
    icon: MapPin,
    label: 'Location-based issue tracking',
  },
  {
    icon: BarChart2,
    label: 'Data-informed maintenance planning',
  },
];

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion || !heroRef.current) return;

      gsap.fromTo(
        '.hero-animate-item',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden border-b border-slate-200 bg-white pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-cad-grid"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Left Column: Copy, CTAs, Trust Indicators & Aerial Context Strip */}
          <div className="lg:col-span-5 lg:pt-2">
            <div className="hero-animate-item">
              <SectionLabel>
                AI-POWERED CIVIC INFRASTRUCTURE INTELLIGENCE
              </SectionLabel>
            </div>

            <h1 className="hero-animate-item mt-5 font-heading text-4xl font-semibold tracking-tight text-[#101C2C] sm:text-5xl lg:text-[46px] xl:text-[52px] leading-[1.09]">
              Every City Has Problems.{' '}
              <span className="text-[#3978E8]">
                Better Cities Know Where They Are.
              </span>
            </h1>

            <p className="hero-animate-item mt-5 text-base leading-relaxed text-[#68788D] sm:text-lg sm:leading-[1.65]">
              CivicScan uses AI, geolocation, and infrastructure data to help
              cities identify, map, and prioritize the problems affecting their
              communities.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-animate-item mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="#platform"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                Explore CivicScan
              </Button>
              <Button href="#pilot-programme" variant="secondary" size="lg">
                Become a Pilot Partner
              </Button>
            </div>

            {/* Three Compact Trust Indicators */}
            <div className="hero-animate-item mt-9 border-t border-slate-200 pt-6">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1">
                {trustIndicators.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm font-medium text-[#142235]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-slate-200 bg-[#F4F7FA] text-[#3978E8]">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grounded Urban Aerial Reference Strip */}
            <div className="hero-animate-item mt-8 overflow-hidden rounded-md border border-slate-200 bg-[#F4F7FA] p-2.5">
              <div className="flex items-center gap-3.5">
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded border border-slate-200">
                  <img
                    src={heroUrbanImg}
                    alt="Aerial photograph of a modern African city showing arterial roads and surrounding urban buildings"
                    width="192"
                    height="128"
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3978E8]" />
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-[#68788D] uppercase">
                      Municipal Observation Layer
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-snug text-[#142235]">
                    Built for municipal engineering teams, urban planners, and
                    public service operators managing complex road and drainage
                    networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive React Municipal Intelligence Dashboard */}
          <div className="lg:col-span-7">
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}

