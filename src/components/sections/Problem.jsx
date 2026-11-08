import React from 'react';
import {
  EyeOff,
  Split,
  MapPinOff,
  AlertTriangle,
  ArrowUpRight,
} from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import Reveal from '../ui/Reveal';
import { problemItems } from '../../data/siteData';
import urbanRoadImg from '../../assets/images/urban-road-infrastructure.jpg';
import drainageImg from '../../assets/images/drainage-infrastructure.jpg';

const iconMap = {
  EyeOff,
  Split,
  MapPinOff,
  AlertTriangle,
};

export default function Problem() {
  return (
    <section
      id="platform"
      className="border-b border-slate-200 bg-[#F4F7FA] py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Intro + Documentary Infrastructure Photography */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal>
              <SectionHeader
                eyebrow="THE URBAN INFRASTRUCTURE GAP"
                title="Cities Can't Fix What They Can't Clearly See."
                description="Infrastructure problems are often reported, recorded, and managed through disconnected processes. Without a clear picture of where problems exist and how they evolve, maintenance teams struggle to respond efficiently."
              />
            </Reveal>

            {/* Documentary Field Visuals */}
            <Reveal delay={0.1} className="mt-10 space-y-4">
              <div className="overflow-hidden rounded-md border border-slate-200 bg-white p-2 shadow-xs">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-slate-900">
                  <img
                    src={urbanRoadImg}
                    alt="Documentary photograph of a damaged urban asphalt road in an African city showing potholes and surrounding infrastructure"
                    width="800"
                    height="500"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between rounded bg-[#101C2C]/90 px-3 py-1.5 backdrop-blur-xs">
                    <span className="font-mono text-[10px] font-medium tracking-wider text-white uppercase">
                      FIELD REALITY · CARRIAGEWAY SURFACE FAILURE
                    </span>
                    <span className="font-mono text-[10px] text-[#55D3BD]">
                      UNLOGGED DEFECT
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center rounded-md border border-slate-200 bg-white p-3">
                <div className="sm:col-span-5 relative aspect-[16/10] overflow-hidden rounded-xs bg-slate-900">
                  <img
                    src={drainageImg}
                    alt="Documentary photograph of an urban stormwater drainage channel requiring maintenance and desilting"
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="sm:col-span-7">
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-[#3978E8] uppercase">
                    Compounding Risk
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-[#142235]">
                    Unaddressed drainage blockages accelerate road surface
                    degradation during heavy rainfall, turning routine clearing
                    into major civil reconstruction.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Dossier Ledger */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal
              stagger={0.1}
              className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white"
            >
              {problemItems.map((item) => {
                const IconComponent = iconMap[item.iconName] || AlertTriangle;
                return (
                  <div
                    key={item.title}
                    className="group relative p-6 sm:p-8 transition-colors duration-200 hover:bg-[#F8FAFC]"
                  >
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-slate-200 bg-[#F4F7FA] text-[#142235] transition-colors group-hover:border-[#3978E8] group-hover:text-[#3978E8]">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <h3 className="font-heading text-xl font-semibold text-[#142235] group-hover:text-[#3978E8] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <span className="font-mono text-[10px] font-medium tracking-wider text-[#68788D] uppercase border border-slate-200 bg-[#F4F7FA] px-2 py-0.5 rounded">
                          {item.metricLabel}
                        </span>
                      </div>

                      <p className="mt-3 text-base leading-relaxed text-[#68788D]">
                        {item.description}
                      </p>

                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs text-[#68788D] font-mono">
                        {item.metricDetail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>

            {/* Required Closing Statement Banner */}
            <Reveal delay={0.2} className="mt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-md border border-[#101C2C] bg-[#101C2C] px-6 py-5 text-white">
                <div className="flex items-center gap-3.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#55D3BD]" />
                  <p className="font-heading text-base font-medium sm:text-lg text-white">
                    A better-maintained city starts with better infrastructure
                    visibility.
                  </p>
                </div>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#55D3BD] hover:text-white transition-colors shrink-0"
                >
                  <span>See the workflow</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

