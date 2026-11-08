import React from 'react';
import {
  Building2,
  Wrench,
  Compass,
  HardHat,
  Users,
  Smartphone,
} from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import Reveal from '../ui/Reveal';
import { audiencesList } from '../../data/siteData';
import inspectionImg from '../../assets/images/infrastructure-inspection.jpg';
import maintenanceImg from '../../assets/images/urban-maintenance.jpg';

const iconMap = {
  Building2,
  Wrench,
  Compass,
  HardHat,
  Users,
  Smartphone,
};

export default function Audience() {
  return (
    <section
      id="audience"
      className="border-b border-slate-200 bg-[#F4F7FA] py-20 sm:py-28"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="BUILT FOR BETTER CITIES"
              title="Connecting the People Who Report Problems With the Teams Who Resolve Them."
            />
          </Reveal>

          <Reveal delay={0.1} className="max-w-md">
            <div className="rounded-md border border-slate-200 bg-white p-4">
              <span className="font-mono text-[10px] font-semibold tracking-wider text-[#3978E8] uppercase">
                Operational Platform Focus
              </span>
              <p className="mt-1 text-xs leading-relaxed text-[#68788D]">
                CivicScan is designed as an operational workflow platform for
                municipal authorities, engineering units, and infrastructure
                service providers—connecting public observations with verified
                field execution.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Editorial Documentary Split Feature */}
        <Reveal
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12"
        >
          {/* Left Featured Photo Block: Field Inspection */}
          <div className="lg:col-span-6 overflow-hidden rounded-md border border-slate-200 bg-white p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-slate-900">
              <img
                src={inspectionImg}
                alt="Municipal field engineer in safety vest inspecting urban road infrastructure with a tablet"
                width="720"
                height="450"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded bg-[#101C2C]/90 px-3.5 py-2 text-white backdrop-blur-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#55D3BD] uppercase block">
                    Field Verification
                  </span>
                  <span className="text-xs font-medium">
                    Municipal Engineering & Inspection Teams
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-300">
                  ON-SITE REVIEW
                </span>
              </div>
            </div>
          </div>

          {/* Right Featured Photo Block: Civil Maintenance Execution */}
          <div className="lg:col-span-6 overflow-hidden rounded-md border border-slate-200 bg-white p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-slate-900">
              <img
                src={maintenanceImg}
                alt="Municipal maintenance personnel working on public road infrastructure in an African city"
                width="720"
                height="450"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded bg-[#101C2C]/90 px-3.5 py-2 text-white backdrop-blur-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#6B9CFF] uppercase block">
                    Coordinated Dispatch
                  </span>
                  <span className="text-xs font-medium">
                    Public Works & Infrastructure Service Providers
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-300">
                  WORK ORDER TRACKING
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Six Audience Presentations Grid */}
        <Reveal
          stagger={0.08}
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {audiencesList.map((audience) => {
            const IconComponent = iconMap[audience.iconName] || Building2;
            return (
              <div
                key={audience.id}
                className="group flex flex-col justify-between rounded-md border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-[#3978E8]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-[#3978E8] uppercase">
                      {audience.roleTag}
                    </span>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-slate-200 bg-[#F4F7FA] text-[#142235] group-hover:border-[#3978E8] group-hover:text-[#3978E8] transition-colors">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-semibold text-[#142235]">
                    {audience.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#68788D] sm:text-base">
                    {audience.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100">
                  <p className="font-mono text-[11px] leading-snug text-[#142235]">
                    {audience.operationalFocus}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}

