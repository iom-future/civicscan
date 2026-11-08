import React, { useState, useEffect } from 'react';
import { X, ShieldAlert } from 'lucide-react';
import Container from './Container';
import CivicScanLogo from '../ui/CivicScanLogo';

const legalDocs = {
  privacy: {
    title: 'Privacy Policy — Pilot Evaluation Scope',
    updated: 'Pilot Programme Documentation',
    paragraphs: [
      'CivicScan is designed around responsible data collection: collecting only the information needed for infrastructure reporting and pilot programme coordination.',
      'Information submitted through the Pilot Programme Registration form (such as full name, work email, organization details, and municipal infrastructure challenges) is used strictly to evaluate potential pilot partnerships and respond to institutional inquiries.',
      'During field or citizen reporting evaluations, submitted infrastructure photographs, timestamps, and geographic coordinates are retained to provide an auditable record for municipal review while protecting personal information submitted through reporting channels.',
    ],
  },
  terms: {
    title: 'Terms of Use — Decision-Support & Verification',
    updated: 'Platform Operational Notice',
    paragraphs: [
      'CivicScan provides AI-assisted infrastructure reporting, categorization, and geospatial visualization to support municipal maintenance workflows.',
      'AI-generated classifications, duplicate flags, and priority indicators are informational decision-support tools. They do not replace physical inspection, structural assessment, or professional engineering judgment.',
      'Physical repairs, site safety determinations, and maintenance dispatch decisions remain the sole responsibility of appropriately qualified municipal authorities or authorized infrastructure service providers.',
    ],
  },
};

export default function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeLegalModal) {
        setActiveLegalModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLegalModal]);

  return (
    <footer className="border-t border-[#22354E] bg-[#0B1420] text-slate-300">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] rounded"
            >
              <CivicScanLogo variant="light" />
            </a>

            <p className="mt-4 font-heading text-base font-medium text-white">
              See the Problem. Improve the City.
            </p>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              AI-powered civic infrastructure monitoring and intelligence
              platform helping cities identify, map, organize, prioritize, and
              monitor infrastructure problems.
            </p>
          </div>

          {/* Platform Links (2.5 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#city-intelligence"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  City Intelligence
                </a>
              </li>
              <li>
                <a
                  href="#audience"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Who It&apos;s For
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#about-civicscan"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About CivicScan
                </a>
              </li>
              <li>
                <a
                  href="#pilot-programme"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Pilot Programme
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('privacy')}
                  className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] rounded"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('terms')}
                  className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] rounded"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Required Footer Statement & Copyright */}
        <div className="mt-12 border-t border-[#1D2F47] pt-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-xs leading-relaxed text-slate-400">
              CivicScan provides AI-assisted infrastructure reporting and
              decision support. Infrastructure assessments and maintenance
              decisions should be verified by appropriately qualified personnel.
            </p>

            <p className="font-mono text-xs text-slate-400 shrink-0">
              Copyright © CivicScan. All rights reserved.
            </p>
          </div>
        </div>
      </Container>

      {/* Accessible Legal Notice Dialog */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101C2C]/80 p-4 backdrop-blur-xs"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-md border border-slate-200 bg-white p-6 text-[#142235] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="font-mono text-[10px] font-semibold tracking-wider text-[#3978E8] uppercase">
                  {legalDocs[activeLegalModal].updated}
                </span>
                <h4
                  id="legal-modal-title"
                  className="mt-1 font-heading text-lg font-semibold text-[#101C2C]"
                >
                  {legalDocs[activeLegalModal].title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close dialog"
                className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-[#101C2C] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#68788D]">
              {legalDocs[activeLegalModal].paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#142235]">
                <ShieldAlert className="h-3.5 w-3.5 text-[#3978E8]" />
                Human verification required
              </span>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="rounded bg-[#101C2C] px-4 py-2 text-xs font-medium text-white hover:bg-[#1E3350] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

