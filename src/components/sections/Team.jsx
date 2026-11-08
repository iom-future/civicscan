import React from 'react';
import { MapPin, ArrowUpRight, Award } from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import Reveal from '../ui/Reveal';
import { teamMembers } from '../../data/siteData';

export default function Team() {
  return (
    <section
      id="team"
      className="border-b border-slate-200 bg-[#F4F7FA] py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="LEADERSHIP & ENGINEERING"
            title="Built by Nigerian Technologists and Urban Advocates."
            description="We combine deep contextual knowledge of Nigerian cities with computer vision, spatial computing, and municipal workflow engineering to make civic infrastructure maintenance visible, accountable, and proactive."
          />
        </Reveal>

        {/* 6 Team Members Grid */}
        <Reveal
          stagger={0.08}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col justify-between rounded-md border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-[#3978E8] hover:shadow-md"
            >
              <div>
                {/* Team Member Portrait Image */}
                <div className="relative aspect-[4/3.8] w-full overflow-hidden rounded bg-slate-900 border border-slate-100">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      width="400"
                      height="380"
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-heading text-2xl font-bold text-[#55D3BD] bg-[#101C2C]">
                      {member.avatarInitials}
                    </div>
                  )}

                  {/* Location Tag Overlay */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 font-mono text-[10px] text-white bg-[#101C2C]/85 backdrop-blur-xs border border-white/10 px-2 py-0.5 rounded shadow-xs">
                    <MapPin className="h-3 w-3 text-[#55D3BD]" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mt-4">
                  <h3 className="font-heading text-lg font-semibold text-[#142235] group-hover:text-[#3978E8] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#3978E8]">
                    {member.role}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-[#68788D] leading-tight">
                    {member.credentials}
                  </p>
                </div>

                {/* Bio */}
                <p className="mt-3 text-xs leading-relaxed text-[#68788D]">
                  {member.bio}
                </p>
              </div>

              {/* Specialization Tags */}
              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-[#142235] bg-[#F4F7FA] border border-slate-200/80 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Institutional & Technical Advisory Strip */}
        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-md border border-slate-200 bg-white p-5 sm:px-6 shadow-xs">
            <div className="flex items-start sm:items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#3978E8]/30 bg-white text-[#3978E8]">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <span className="font-heading text-sm font-semibold text-[#142235] block">
                  Municipal-Grade Engineering Standards
                </span>
                <p className="text-xs text-[#68788D] mt-0.5">
                  Collaborating with certified members of the Nigerian Society of Engineers (NSE), COREN, and regional urban planning authorities to ensure all data categorization aligns with public works specifications.
                </p>
              </div>
            </div>
            <a
              href="#pilot-programme"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#3978E8] hover:text-[#101C2C] transition-colors shrink-0"
            >
              <span>Join Our Engineering Network</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

