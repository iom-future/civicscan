import React from 'react';
import {
  UserCheck,
  FileSearch,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import Reveal from '../ui/Reveal';
import { trustPrinciples } from '../../data/siteData';

const iconMap = {
  UserCheck,
  FileSearch,
  ShieldCheck,
  CheckCircle2,
};

export default function Trust() {
  return (
    <section
      id="about-civicscan"
      className="border-b border-slate-200 bg-white py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left 5 Cols: Section Introduction & Governance Posture */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow="INTELLIGENCE MUST BE ACCOUNTABLE"
                title="AI Can Identify Patterns. People Verify What Matters."
                description="Infrastructure decisions affect real communities. CivicScan is designed to support human inspection and accountable public-service workflows."
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <div className="rounded-md border border-slate-200 bg-[#F4F7FA] p-5">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#3978E8]" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#142235] uppercase">
                    Decision-Support Architecture
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#68788D]">
                  CivicScan is built on the principle that automated image and
                  geospatial analysis should assist—never replace—qualified
                  municipal engineers, field inspectors, and public works
                  decision-makers.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right 7 Cols: Four Accountable AI Principles */}
          <div className="lg:col-span-7">
            <Reveal
              stagger={0.08}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {trustPrinciples.map((principle) => {
                const IconComponent = iconMap[principle.iconName] || UserCheck;
                return (
                  <div
                    key={principle.number}
                    className="flex flex-col justify-between rounded-md border border-slate-200 bg-white p-6 transition-colors hover:border-[#3978E8]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                        <span className="font-mono text-[10px] font-semibold tracking-wider text-[#3978E8] uppercase">
                          {principle.protocolTag}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-[#F4F7FA] text-[#101C2C]">
                          <IconComponent className="h-4 w-4 text-[#3978E8]" />
                        </div>
                      </div>

                      <h3 className="mt-4 font-heading text-xl font-semibold text-[#142235]">
                        {principle.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[#68788D] sm:text-base">
                        {principle.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-[#68788D]">
                      <span>PRINCIPLE {principle.number}</span>
                      <span className="text-[#142235] font-medium">
                        VERIFIED WORKFLOW
                      </span>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

