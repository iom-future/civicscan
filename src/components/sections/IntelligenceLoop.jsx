import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import CivicScanLogo from '../ui/CivicScanLogo';
import Reveal from '../ui/Reveal';
import { intelligenceLoopStages } from '../../data/siteData';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IntelligenceLoop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const loopSectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion || !loopSectionRef.current) return;

      gsap.fromTo(
        '.loop-orbit-ring',
        { strokeDashoffset: 880 },
        {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: loopSectionRef.current,
            start: 'top 75%',
          },
        }
      );
    },
    { scope: loopSectionRef }
  );

  return (
    <section
      ref={loopSectionRef}
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-28"
    >
      {/* Faint City Road Network Pattern in Background */}
      <svg
        viewBox="0 0 1440 800"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.045]"
        aria-hidden="true"
      >
        <g stroke="#101C2C" strokeWidth="1.5" fill="none">
          <path d="M0 140 L1440 140" />
          <path d="M0 380 L1440 380" />
          <path d="M0 640 L1440 640" />
          <path d="M240 0 L240 800" />
          <path d="M720 0 L720 800" />
          <path d="M1180 0 L1180 800" />
          <path d="M0 40 Q 480 280 960 220 T 1440 520" strokeWidth="2.5" />
          <path d="M180 800 Q 620 420 1120 0" strokeWidth="2" />
          <circle cx="720" cy="380" r="240" />
          <circle cx="720" cy="380" r="360" strokeDasharray="8 8" />
        </g>
      </svg>

      <Container className="relative z-10">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="CONTINUOUS CITY INTELLIGENCE"
            title="Every Report Makes the City's Picture Clearer."
            description="CivicScan is designed to become more useful as infrastructure reports, inspections, and maintenance outcomes accumulate."
          />
        </Reveal>

        {/* Desktop Circular 4-Stage Diagram (lg and up) */}
        <div className="mt-16 hidden lg:block">
          <div className="relative mx-auto h-[580px] max-w-[1040px]">
            {/* Central SVG Connector Orbit */}
            <svg
              viewBox="0 0 1000 560"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {/* Outer Dashed Guide Ring */}
              <circle
                cx="500"
                cy="280"
                r="175"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              {/* Animated Primary Connector Ring */}
              <circle
                cx="500"
                cy="280"
                r="140"
                fill="none"
                stroke="#3978E8"
                strokeWidth="2"
                strokeDasharray="880"
                className="loop-orbit-ring"
              />
              {/* Directional Flow Nodes on Ring */}
              <circle cx="500" cy="140" r="6" fill="#3978E8" />
              <circle cx="640" cy="280" r="6" fill="#55D3BD" />
              <circle cx="500" cy="420" r="6" fill="#3978E8" />
              <circle cx="360" cy="280" r="6" fill="#55D3BD" />

              {/* Spokes to Stage Cards */}
              <line
                x1="500"
                y1="140"
                x2="500"
                y2="108"
                stroke="#3978E8"
                strokeWidth="1.5"
              />
              <line
                x1="640"
                y1="280"
                x2="695"
                y2="280"
                stroke="#3978E8"
                strokeWidth="1.5"
              />
              <line
                x1="500"
                y1="420"
                x2="500"
                y2="452"
                stroke="#3978E8"
                strokeWidth="1.5"
              />
              <line
                x1="360"
                y1="280"
                x2="305"
                y2="280"
                stroke="#3978E8"
                strokeWidth="1.5"
              />
            </svg>

            {/* Center CivicScan Core Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-[#22354E] bg-[#101C2C] p-4 text-center text-white shadow-xl">
              <CivicScanLogo variant="light" showText={false} />
              <span className="mt-2 font-heading text-sm font-bold tracking-tight">
                Civic<span className="text-[#55D3BD]">Scan</span>
              </span>
              <span className="mt-0.5 font-mono text-[9px] tracking-[0.14em] text-slate-400 uppercase">
                Intelligence Loop
              </span>
            </div>

            {/* Stage 01 — Top (Observe) */}
            <div
              onMouseEnter={() => setActiveIndex(0)}
              className={`
                absolute top-0 left-1/2 -translate-x-1/2 w-[320px] rounded-md border p-4 transition-all cursor-pointer
                ${
                  activeIndex === 0
                    ? 'border-[#3978E8] bg-[#101C2C] text-white shadow-md'
                    : 'border-slate-200 bg-white text-[#142235] hover:border-[#3978E8]'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-semibold ${
                    activeIndex === 0 ? 'text-[#55D3BD]' : 'text-[#3978E8]'
                  }`}
                >
                  01 — OBSERVE
                </span>
                <span className="font-mono text-[10px] opacity-75">
                  INPUT LAYER
                </span>
              </div>
              <h3 className="mt-1 font-heading text-base font-semibold">
                01 — {intelligenceLoopStages[0].title}
              </h3>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  activeIndex === 0 ? 'text-slate-300' : 'text-[#68788D]'
                }`}
              >
                {intelligenceLoopStages[0].description}
              </p>
            </div>

            {/* Stage 02 — Right (Understand) */}
            <div
              onMouseEnter={() => setActiveIndex(1)}
              className={`
                absolute top-1/2 right-0 -translate-y-1/2 w-[295px] rounded-md border p-4 transition-all cursor-pointer
                ${
                  activeIndex === 1
                    ? 'border-[#3978E8] bg-[#101C2C] text-white shadow-md'
                    : 'border-slate-200 bg-white text-[#142235] hover:border-[#3978E8]'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-semibold ${
                    activeIndex === 1 ? 'text-[#55D3BD]' : 'text-[#3978E8]'
                  }`}
                >
                  02 — UNDERSTAND
                </span>
                <span className="font-mono text-[10px] opacity-75">
                  AI TRIAGE
                </span>
              </div>
              <h3 className="mt-1 font-heading text-base font-semibold">
                02 — {intelligenceLoopStages[1].title}
              </h3>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  activeIndex === 1 ? 'text-slate-300' : 'text-[#68788D]'
                }`}
              >
                {intelligenceLoopStages[1].description}
              </p>
            </div>

            {/* Stage 03 — Bottom (Act) */}
            <div
              onMouseEnter={() => setActiveIndex(2)}
              className={`
                absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] rounded-md border p-4 transition-all cursor-pointer
                ${
                  activeIndex === 2
                    ? 'border-[#3978E8] bg-[#101C2C] text-white shadow-md'
                    : 'border-slate-200 bg-white text-[#142235] hover:border-[#3978E8]'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-semibold ${
                    activeIndex === 2 ? 'text-[#55D3BD]' : 'text-[#3978E8]'
                  }`}
                >
                  03 — ACT
                </span>
                <span className="font-mono text-[10px] opacity-75">
                  OPERATIONS
                </span>
              </div>
              <h3 className="mt-1 font-heading text-base font-semibold">
                03 — {intelligenceLoopStages[2].title}
              </h3>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  activeIndex === 2 ? 'text-slate-300' : 'text-[#68788D]'
                }`}
              >
                {intelligenceLoopStages[2].description}
              </p>
            </div>

            {/* Stage 04 — Left (Learn) */}
            <div
              onMouseEnter={() => setActiveIndex(3)}
              className={`
                absolute top-1/2 left-0 -translate-y-1/2 w-[295px] rounded-md border p-4 transition-all cursor-pointer
                ${
                  activeIndex === 3
                    ? 'border-[#3978E8] bg-[#101C2C] text-white shadow-md'
                    : 'border-slate-200 bg-white text-[#142235] hover:border-[#3978E8]'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-semibold ${
                    activeIndex === 3 ? 'text-[#55D3BD]' : 'text-[#3978E8]'
                  }`}
                >
                  04 — LEARN
                </span>
                <span className="font-mono text-[10px] opacity-75">
                  MEMORY LOOP
                </span>
              </div>
              <h3 className="mt-1 font-heading text-base font-semibold">
                04 — {intelligenceLoopStages[3].title}
              </h3>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  activeIndex === 3 ? 'text-slate-300' : 'text-[#68788D]'
                }`}
              >
                {intelligenceLoopStages[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Connected Vertical Process (below lg) */}
        <div className="mt-12 lg:hidden">
          <div className="mb-6 flex items-center gap-3 rounded-md border border-[#22354E] bg-[#101C2C] p-4 text-white">
            <CivicScanLogo variant="light" showText={false} />
            <div>
              <span className="font-mono text-[10px] text-[#55D3BD] uppercase block">
                Continuous Feedback Architecture
              </span>
              <span className="font-heading text-base font-semibold">
                CivicScan 4-Stage Intelligence Loop
              </span>
            </div>
          </div>

          <div className="relative pl-6 before:absolute before:top-3 before:bottom-3 before:left-2.5 before:w-0.5 before:bg-[#3978E8]/40 space-y-4">
            {intelligenceLoopStages.map((stage) => (
              <div
                key={stage.number}
                className="relative rounded-md border border-slate-200 bg-white p-5 shadow-2xs"
              >
                <span className="absolute -left-[21px] top-6 h-3 w-3 rounded-full border-2 border-white bg-[#3978E8]" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#3978E8]">
                    STAGE {stage.number}
                  </span>
                  <span className="font-mono text-[10px] text-[#68788D]">
                    {stage.metric}
                  </span>
                </div>
                <h3 className="mt-1.5 font-heading text-lg font-semibold text-[#142235]">
                  {stage.number} — {stage.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#68788D]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Closing Statement */}
        <Reveal delay={0.15} className="mt-12">
          <div className="mx-auto max-w-3xl rounded-md border border-slate-200 bg-[#F4F7FA] px-6 py-5 text-center">
            <p className="font-heading text-base font-medium text-[#142235] sm:text-lg">
              “The goal is not simply to collect more reports. It is to build a
              reliable understanding of the city&apos;s infrastructure over
              time.”
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

