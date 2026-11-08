import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `accordion-btn-${item.id || idx}`;
        const panelId = `accordion-panel-${item.id || idx}`;

        return (
          <div key={item.id || idx} className="group">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(idx)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-[#3978E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2 cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-medium text-[#68788D]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-lg font-semibold text-[#142235] group-hover:text-[#3978E8] sm:text-xl transition-colors">
                    {item.question}
                  </span>
                </div>
                <span
                  className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded border transition-colors ${
                    isOpen
                      ? 'border-[#3978E8] bg-[#3978E8] text-white'
                      : 'border-slate-300 bg-white text-[#142235] group-hover:border-[#3978E8]'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100 pb-6'
                  : 'grid-rows-[0fr] opacity-0 pb-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pl-8 pr-4 text-base leading-relaxed text-[#68788D] sm:pl-9">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

