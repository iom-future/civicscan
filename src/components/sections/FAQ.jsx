import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import Accordion from '../ui/Accordion';
import Reveal from '../ui/Reveal';
import { faqItems } from '../../data/siteData';

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-slate-200 bg-white py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow="FREQUENTLY ASKED QUESTIONS"
                title="Questions About CivicScan?"
                description="Clear answers on how CivicScan works, where AI assists in the workflow, and how municipal pilot partnerships are structured."
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <div className="rounded-md border border-slate-200 bg-[#F4F7FA] p-5">
                <span className="font-mono text-xs font-semibold text-[#142235] uppercase">
                  Exploring a Municipal Pilot?
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-[#68788D]">
                  If your engineering department or organization has specific
                  workflow integration questions, register through the pilot
                  programme form above.
                </p>
                <a
                  href="#pilot-programme"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#3978E8] hover:text-[#142235] transition-colors"
                >
                  <span>Go to Pilot Registration</span>
                  <span>→</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Accordion items={faqItems} defaultOpenIndex={0} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

