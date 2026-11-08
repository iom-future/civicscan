import React, { useState } from 'react';
import { Camera, Scan, Sliders, CheckCircle2 } from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import ReportCard from '../ui/ReportCard';
import Reveal from '../ui/Reveal';
import { workflowStages } from '../../data/siteData';

const stageIcons = {
  Report: Camera,
  Analyze: Scan,
  Prioritize: Sliders,
  'Resolve & Monitor': CheckCircle2,
};

export default function HowItWorks() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="how-it-works"
      className="border-b border-slate-200 bg-white py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="FROM REPORTS TO INFRASTRUCTURE INTELLIGENCE"
            title="Turn Everyday Observations Into Actionable City Data."
            description="CivicScan brings citizen reports, infrastructure observations, and location data together to help local authorities understand and manage infrastructure issues."
          />
        </Reveal>

        {/* Four Interactive Workflow Stages */}
        <Reveal
          stagger={0.08}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {workflowStages.map((item, idx) => {
            const isActive = activeStage === idx;
            const StageIcon = stageIcons[item.stage] || CheckCircle2;
            return (
              <button
                key={item.stage}
                type="button"
                onClick={() => setActiveStage(idx)}
                aria-pressed={isActive}
                className={`group flex flex-col justify-between rounded-md border p-5 text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] ${
                  isActive
                    ? 'border-[#3978E8] bg-[#101C2C] text-white shadow-md'
                    : 'border-slate-200 bg-[#F4F7FA] text-[#142235] hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded border transition-colors ${
                          isActive
                            ? 'border-[#3978E8] bg-[#15253A] text-[#55D3BD]'
                            : 'border-slate-200 bg-white text-[#142235] group-hover:border-[#3978E8] group-hover:text-[#3978E8]'
                        }`}
                      >
                        <StageIcon className="h-4 w-4" />
                      </div>
                      <h3
                        className={`font-heading text-lg font-semibold ${
                          isActive ? 'text-white' : 'text-[#142235]'
                        }`}
                      >
                        {item.stage}
                      </h3>
                    </div>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        isActive ? 'bg-[#55D3BD]' : 'bg-slate-300'
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isActive ? 'text-slate-300' : 'text-[#68788D]'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className={`mt-5 pt-3 border-t flex items-center justify-between font-mono text-[11px] ${
                    isActive
                      ? 'border-[#243854] text-[#6B9CFF]'
                      : 'border-slate-200 text-[#68788D] group-hover:text-[#3978E8]'
                  }`}
                >
                  <span>{isActive ? 'Inspecting stage' : 'Click to inspect'}</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </Reveal>

        {/* Interactive Sample Report Journey Interface */}
        <Reveal delay={0.15} className="mt-8">
          <ReportCard
            activeStageIndex={activeStage}
            stageData={workflowStages[activeStage]}
          />
        </Reveal>
      </Container>
    </section>
  );
}

