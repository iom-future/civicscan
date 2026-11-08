import { useState, useRef } from 'react';
import {
  MapPin,
  AlertCircle,
  Droplets,
  LightbulbOff,
  Trash2,
  Clock,
  Navigation,
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroStats, heroMapMarkers } from '../../data/siteData';

const markerConfig = {
  road: {
    label: 'Road damage',
    color: '#F59E0B',
    bg: 'bg-amber-500/20',
    border: 'border-amber-400',
    dot: 'bg-amber-400',
    icon: AlertCircle,
  },
  drainage: {
    label: 'Blocked drainage',
    color: '#3978E8',
    bg: 'bg-[#3978E8]/25',
    border: 'border-[#6B9CFF]',
    dot: 'bg-[#6B9CFF]',
    icon: Droplets,
  },
  streetlight: {
    label: 'Streetlight outage',
    color: '#A855F7',
    bg: 'bg-purple-500/20',
    border: 'border-purple-400',
    dot: 'bg-purple-400',
    icon: LightbulbOff,
  },
  waste: {
    label: 'Waste accumulation',
    color: '#55D3BD',
    bg: 'bg-[#55D3BD]/20',
    border: 'border-[#55D3BD]',
    dot: 'bg-[#55D3BD]',
    icon: Trash2,
  },
};

export default function DashboardPreview() {
  const [selectedMarker, setSelectedMarker] = useState(heroMapMarkers[0]);
  const [activeFilter, setActiveFilter] = useState('all');
  const dashboardRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion || !dashboardRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        dashboardRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15 }
      )
        .fromTo(
          '.hero-stat-card',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
          '-=0.35'
        )
        .fromTo(
          '.hero-map-marker',
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.07,
            ease: 'back.out(1.7)',
          },
          '-=0.2'
        )
        .fromTo(
          '.hero-floating-report',
          { opacity: 0, x: 16 },
          { opacity: 1, x: 0, duration: 0.5 },
          '-=0.25'
        );
    },
    { scope: dashboardRef }
  );

  const visibleMarkers =
    activeFilter === 'all'
      ? heroMapMarkers
      : heroMapMarkers.filter((m) => m.type === activeFilter);

  return (
    <div
      ref={dashboardRef}
      className="relative w-full overflow-hidden rounded-lg border border-[#22354E] bg-[#101C2C] text-white shadow-2xl"
      aria-label="Illustrative CivicScan Municipal Intelligence Dashboard Preview"
    >
      {/* Top Command Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#22354E] bg-[#0C1623] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#55D3BD]" />
            <span className="font-mono text-[11px] font-medium tracking-wider text-slate-200 uppercase">
              CIVICSCAN MUNICIPAL CONSOLE
            </span>
          </div>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <Navigation className="h-3 w-3 text-[#6B9CFF]" />
            METRO SECTOR 04 · GRID VIEW
          </span>
        </div>

        {/* Explicit Illustrative Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded border border-[#55D3BD]/30 bg-[#55D3BD]/10 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-[#55D3BD] uppercase">
            Illustrative Sample Data
          </span>
        </div>
      </div>

      {/* City Overview 4-Stat Strip */}
      <div className="border-b border-[#22354E] bg-[#132235] px-4 py-3.5 sm:px-5">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
            City Overview — Operational Summary (Illustrative)
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            Updated: Live Sync Simulation
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.id}
              className="hero-stat-card rounded border border-[#243854] bg-[#101C2C]/90 p-3 transition-colors hover:border-[#3978E8]/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-300">
                  {stat.label}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    stat.tone === 'teal'
                      ? 'bg-[#55D3BD]'
                      : stat.tone === 'amber'
                      ? 'bg-amber-400'
                      : stat.tone === 'electric'
                      ? 'bg-[#6B9CFF]'
                      : 'bg-[#3978E8]'
                  }`}
                />
              </div>
              <div className="mt-1.5 flex items-baseline justify-between gap-1">
                <span className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] text-[#55D3BD]">
                  {stat.delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Geospatial Map & Floating Report Area */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        {/* Map Canvas */}
        <div className="relative min-h-[320px] sm:min-h-[360px] lg:col-span-7 xl:col-span-8 bg-[#0D1826] overflow-hidden">
          {/* Vector CAD Municipal Map SVG */}
          <svg
            viewBox="0 0 600 400"
            className="absolute inset-0 h-full w-full object-cover opacity-85"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#1B2E47"
                  strokeWidth="0.75"
                />
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#hero-grid)" />

            {/* Urban Blocks / Parcels */}
            <g fill="#132236" stroke="#1E3450" strokeWidth="1">
              <rect x="30" y="25" width="110" height="75" rx="2" />
              <rect x="160" y="25" width="140" height="75" rx="2" />
              <rect x="325" y="25" width="115" height="90" rx="2" />
              <rect x="460" y="25" width="110" height="90" rx="2" />

              <rect x="30" y="125" width="110" height="110" rx="2" />
              <rect x="160" y="125" width="140" height="110" rx="2" />
              <rect x="325" y="140" width="115" height="95" rx="2" />
              <rect x="460" y="140" width="110" height="95" rx="2" />

              <rect x="30" y="260" width="145" height="110" rx="2" />
              <rect x="200" y="260" width="100" height="110" rx="2" />
              <rect x="325" y="260" width="245" height="110" rx="2" />
            </g>

            {/* Waterway / Drainage Canal */}
            <path
              d="M 0 210 Q 180 195 315 245 T 600 220"
              fill="none"
              stroke="#1B3B5C"
              strokeWidth="12"
            />
            <path
              d="M 0 210 Q 180 195 315 245 T 600 220"
              fill="none"
              stroke="#3978E8"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.6"
            />

            {/* Primary Arterial Roads */}
            <g stroke="#294366" strokeWidth="6" fill="none">
              <line x1="150" y1="0" x2="150" y2="400" />
              <line x1="312" y1="0" x2="312" y2="400" />
              <line x1="450" y1="0" x2="450" y2="400" />
              <line x1="0" y1="112" x2="600" y2="112" />
              <line x1="0" y1="248" x2="600" y2="248" />
            </g>

            {/* Arterial Centerlines */}
            <g
              stroke="#6B9CFF"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.4"
            >
              <line x1="150" y1="0" x2="150" y2="400" />
              <line x1="312" y1="0" x2="312" y2="400" />
              <line x1="0" y1="112" x2="600" y2="112" />
              <line x1="0" y1="248" x2="600" y2="248" />
            </g>

            {/* Sector Coordinate Labels */}
            <text
              x="40"
              y="44"
              fill="#4B6382"
              fontSize="9"
              fontFamily="monospace"
            >
              WARD 04-A
            </text>
            <text
              x="170"
              y="44"
              fill="#4B6382"
              fontSize="9"
              fontFamily="monospace"
            >
              CENTRAL CORRIDOR
            </text>
            <text
              x="335"
              y="44"
              fill="#4B6382"
              fontSize="9"
              fontFamily="monospace"
            >
              MARKET DRAINAGE ZONE
            </text>
            <text
              x="335"
              y="280"
              fill="#4B6382"
              fontSize="9"
              fontFamily="monospace"
            >
              EAST TRANSIT DISTRICT
            </text>
          </svg>

          {/* Map Filter Bar Overlay */}
          <div className="relative z-10 flex flex-wrap items-center gap-1.5 p-3">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`rounded px-2 py-1 font-mono text-[10px] font-medium transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#3978E8] text-white'
                  : 'bg-[#101C2C]/85 text-slate-300 border border-[#243854] hover:border-slate-400'
              }`}
            >
              All Markers ({heroMapMarkers.length})
            </button>
            {Object.entries(markerConfig).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={`inline-flex items-center gap-1.5 rounded px-2 py-1 font-mono text-[10px] transition-colors cursor-pointer ${
                  activeFilter === key
                    ? 'bg-[#22354E] text-white border border-[#6B9CFF]'
                    : 'bg-[#101C2C]/85 text-slate-300 border border-[#243854] hover:border-slate-400'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                <span>{cfg.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Infrastructure Markers */}
          {visibleMarkers.map((marker) => {
            const cfg = markerConfig[marker.type] || markerConfig.road;
            const IconComponent = cfg.icon;
            const isSelected = selectedMarker?.id === marker.id;

            return (
              <button
                key={marker.id}
                type="button"
                onClick={() => setSelectedMarker(marker)}
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                aria-label={`Inspect ${marker.category} report at ${marker.location}`}
                className={`hero-map-marker group absolute -translate-x-1/2 -translate-y-1/2 z-20 focus-visible:outline-none cursor-pointer`}
              >
                {isSelected && (
                  <span
                    className="animate-pulse-ring absolute -inset-2 rounded-full border border-[#55D3BD]"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-transform duration-200 ${
                    cfg.bg
                  } ${cfg.border} ${
                    isSelected
                      ? 'scale-120 ring-2 ring-white shadow-lg bg-[#101C2C]'
                      : 'hover:scale-110 bg-[#101C2C]/90'
                  }`}
                >
                  <IconComponent
                    className="h-4 w-4"
                    style={{ color: cfg.color }}
                  />
                </span>
              </button>
            );
          })}

          {/* Map Legend Footer */}
          <div className="absolute bottom-2.5 left-3 right-3 z-10 flex flex-wrap items-center justify-between gap-2 rounded border border-[#22354E] bg-[#101C2C]/90 px-3 py-1.5 backdrop-blur-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Road damage
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#6B9CFF]" />
                Blocked drainage
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-300">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                Streetlight outage
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#55D3BD]" />
                Waste accumulation
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              Click marker to inspect
            </span>
          </div>
        </div>

        {/* Floating New Infrastructure Report Card / Inspector Panel */}
        <div className="hero-floating-report lg:col-span-5 xl:col-span-4 border-t lg:border-t-0 lg:border-l border-[#22354E] bg-[#132235] p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#243854] pb-3">
              <div>
                <span className="font-mono text-[10px] font-semibold tracking-wider text-[#55D3BD] uppercase">
                  New Infrastructure Report
                </span>
                <h3 className="mt-0.5 font-heading text-sm font-semibold text-white">
                  Report #{selectedMarker.id}
                </h3>
              </div>
              <span className="rounded border border-amber-400/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-amber-300">
                {selectedMarker.status}
              </span>
            </div>

            {/* Required Fields: Location, Category, Status */}
            <dl className="mt-3.5 space-y-2.5 text-xs">
              <div className="rounded border border-[#243854] bg-[#101C2C] p-2.5">
                <dt className="font-mono text-[10px] text-slate-400 uppercase">
                  Location
                </dt>
                <dd className="mt-0.5 font-medium text-white flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#6B9CFF] shrink-0" />
                  <span>{selectedMarker.location}</span>
                </dd>
                <dd className="mt-0.5 pl-5 font-mono text-[10px] text-slate-400">
                  {selectedMarker.coordinates}
                </dd>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded border border-[#243854] bg-[#101C2C] p-2.5">
                  <dt className="font-mono text-[10px] text-slate-400 uppercase">
                    Category
                  </dt>
                  <dd className="mt-1 font-medium text-white">
                    {selectedMarker.category}
                  </dd>
                </div>

                <div className="rounded border border-[#243854] bg-[#101C2C] p-2.5">
                  <dt className="font-mono text-[10px] text-slate-400 uppercase">
                    Status
                  </dt>
                  <dd className="mt-1 font-medium text-[#55D3BD]">
                    {selectedMarker.status}
                  </dd>
                </div>
              </div>

              {/* AI Triage Metadata */}
              <div className="rounded border border-[#243854] bg-[#101C2C]/70 p-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">AI Image Assessment</span>
                  <span className="font-mono text-[10px] text-[#6B9CFF]">
                    {selectedMarker.confidence}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-300">
                  {selectedMarker.title}
                </p>
              </div>
            </dl>
          </div>

          <div className="mt-4 pt-3 border-t border-[#243854] flex items-center justify-between text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              Logged {selectedMarker.timestamp}
            </span>
            <span className="font-mono text-[10px] text-slate-300">
              Human review required
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
