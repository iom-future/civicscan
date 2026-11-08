import React from 'react';
import {
  Building2,
  Wrench,
  Compass,
  HardHat,
  Users,
  Smartphone,
  Quote,
  Star,
  ShieldCheck,
} from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import Reveal from '../ui/Reveal';
import { audiencesList, testimonialsList } from '../../data/siteData';
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
                decoding="async"
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
                decoding="async"
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

        {/* Testimonials Subsection: Field & Municipal Perspectives */}
        <div id="testimonials" className="mt-16 pt-16 border-t border-slate-200">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider text-[#3978E8] uppercase">
                <span>Field & Municipal Perspectives</span>
                <span className="inline-block h-1 w-1 rounded-full bg-[#3978E8]" />
                <span className="text-[#68788D]">Nigeria Deployments</span>
              </div>
              <h3 className="mt-2.5 font-heading text-2xl font-semibold text-[#142235] sm:text-3xl">
                Built With Input From Field Engineers and City Planners.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#68788D] sm:text-base">
                Observations from Nigerian public works directors, civil engineers, and infrastructure contractors shaping our workflow design.
              </p>
            </div>
          </Reveal>

          <Reveal
            stagger={0.08}
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {testimonialsList.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-md border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-[#3978E8] hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-[#3978E8] uppercase bg-[#3978E8]/8 px-2.5 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <div className="relative mt-4">
                    <Quote className="h-6 w-6 text-[#3978E8]/20 mb-2" />
                    <p className="text-sm leading-relaxed text-[#142235] italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#55D3BD]/40 bg-[#101C2C] shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.author}
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-mono text-xs font-semibold text-[#55D3BD]">
                        {item.avatarInitials}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading text-sm font-semibold text-[#142235] truncate group-hover:text-[#3978E8] transition-colors">
                      {item.author}
                    </h4>
                    <p className="text-xs text-[#68788D] truncate">
                      {item.role}
                    </p>
                    <p className="font-mono text-[10px] text-[#3978E8] truncate">
                      {item.organization} · {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

