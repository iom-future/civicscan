import { useState } from 'react';
import {
  Layers,
  Filter,
  TrendingUp,
  MapPin,
  Info,
} from 'lucide-react';

const categoryData = {
  all: {
    label: 'All Categories',
    totalSample: '4,280',
    activeHotspots: '6 Zones',
    trendNote: 'Seasonal peak observed during Q2–Q3 rainfall months (Illustrative)',
    monthlySeries: [42, 48, 55, 74, 92, 86, 68, 59, 52, 49, 45, 41],
    clusters: [
      { id: 'HZ-01', name: 'Central Market Canal & Arterial', count: 142, x: 46, y: 42, severity: 'High Density' },
      { id: 'HZ-02', name: 'East Transit Corridor Jct', count: 98, x: 74, y: 58, severity: 'Recurring' },
      { id: 'HZ-03', name: 'North Industrial Ring Rd', count: 76, x: 28, y: 30, severity: 'Moderate' },
      { id: 'HZ-04', name: 'Ward 09 Residential Collector', count: 54, x: 34, y: 72, severity: 'Monitored' },
    ],
    areaSummaries: [
      { ward: 'District 04 — Central Corridor', reports: 412, primaryIssue: 'Blocked drainage & road edge wear', status: 'Inspection Priority' },
      { ward: 'District 07 — East Transit Hub', reports: 329, primaryIssue: 'Carriageway pothole clusters', status: 'Scheduled Maintenance' },
      { ward: 'District 02 — North Industrial', reports: 248, primaryIssue: 'Streetlight feeder outages', status: 'Under Review' },
      { ward: 'District 09 — South Residential', reports: 194, primaryIssue: 'Solid waste overflow points', status: 'Routine Collection' },
    ],
  },
  road: {
    label: 'Road Damage',
    totalSample: '1,840',
    activeHotspots: '3 Zones',
    trendNote: 'Carriageway wear concentrates along heavy freight & bus corridors (Illustrative)',
    monthlySeries: [35, 38, 44, 62, 78, 84, 72, 60, 50, 44, 39, 36],
    clusters: [
      { id: 'HZ-02', name: 'East Transit Corridor Jct', count: 84, x: 74, y: 58, severity: 'High Density' },
      { id: 'HZ-03', name: 'North Industrial Ring Rd', count: 62, x: 28, y: 30, severity: 'Recurring' },
    ],
    areaSummaries: [
      { ward: 'District 07 — East Transit Hub', reports: 215, primaryIssue: 'Arterial pothole clusters', status: 'Scheduled Maintenance' },
      { ward: 'District 02 — North Industrial', reports: 164, primaryIssue: 'Heavy axle surface rutting', status: 'Inspection Priority' },
    ],
  },
  drainage: {
    label: 'Blocked Drainage',
    totalSample: '1,190',
    activeHotspots: '2 Zones',
    trendNote: 'Culvert siltation reports rise ahead of primary wet-season onset (Illustrative)',
    monthlySeries: [22, 28, 49, 88, 96, 78, 52, 38, 30, 25, 22, 20],
    clusters: [
      { id: 'HZ-01', name: 'Central Market Canal & Arterial', count: 112, x: 46, y: 42, severity: 'High Density' },
      { id: 'HZ-04', name: 'Ward 09 Residential Collector', count: 41, x: 34, y: 72, severity: 'Monitored' },
    ],
    areaSummaries: [
      { ward: 'District 04 — Central Corridor', reports: 284, primaryIssue: 'Culvert silt & debris blockage', status: 'Desilting Queued' },
      { ward: 'District 09 — South Residential', reports: 118, primaryIssue: 'Roadside channel obstruction', status: 'Under Review' },
    ],
  },
  lighting: {
    label: 'Streetlighting & Waste',
    totalSample: '1,250',
    activeHotspots: '2 Zones',
    trendNote: 'Steady baseline observations across transit stops and commercial zones (Illustrative)',
    monthlySeries: [45, 46, 48, 50, 54, 52, 51, 49, 48, 47, 46, 44],
    clusters: [
      { id: 'HZ-03', name: 'North Industrial Ring Rd', count: 49, x: 28, y: 30, severity: 'Moderate' },
      { id: 'HZ-02', name: 'East Transit Corridor Jct', count: 53, x: 74, y: 58, severity: 'Recurring' },
    ],
    areaSummaries: [
      { ward: 'District 02 — North Industrial', reports: 142, primaryIssue: 'Corridor luminaire outages', status: 'Contractor Assigned' },
      { ward: 'District 09 — South Residential', reports: 136, primaryIssue: 'Roadside waste accumulation', status: 'Routine Collection' },
    ],
  },
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function MapPreview() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const current = categoryData[selectedCategory];

  return (
    <div className="overflow-hidden rounded-lg border border-[#22354E] bg-[#0D1826] text-white shadow-2xl">
      {/* Top Command Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#22354E] bg-[#101C2C] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#55D3BD]" />
          <div>
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">
              CivicScan Urban Intelligence Command View
            </h3>
            <p className="font-mono text-[10px] text-slate-400">
              LONGITUDINAL OBSERVATION & HOTSPOT AGGREGATION · ILLUSTRATIVE DATA
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 inline-flex items-center gap-1 font-mono text-[10px] text-slate-400 uppercase">
            <Filter className="h-3 w-3 text-[#6B9CFF]" />
            Filter:
          </span>
          {Object.entries(categoryData).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCategory(key)}
              className={`rounded px-2.5 py-1 font-mono text-[11px] font-medium transition-colors cursor-pointer ${
                selectedCategory === key
                  ? 'bg-[#3978E8] text-white'
                  : 'border border-[#243854] bg-[#132235] text-slate-300 hover:border-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Command Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left 7 Cols: Interactive Cluster Map */}
        <div className="relative min-h-[340px] border-b border-[#22354E] p-5 lg:col-span-7 lg:border-r lg:border-b-0 flex flex-col justify-between bg-[#0B1522]">
          {/* Vector City Grid Map */}
          <svg
            viewBox="0 0 650 380"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="intel-grid"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 36 0 L 0 0 0 36"
                  fill="none"
                  stroke="#172940"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="650" height="380" fill="url(#intel-grid)" />

            {/* District Polygons */}
            <g fill="#122134" stroke="#1F3654" strokeWidth="1.2">
              <polygon points="30,30 260,30 240,170 30,170" />
              <polygon points="275,30 610,30 610,185 255,170" />
              <polygon points="30,185 235,185 215,350 30,350" />
              <polygon points="250,185 610,200 610,350 230,350" />
            </g>

            {/* Primary Corridor Lines */}
            <g stroke="#2B486E" strokeWidth="5" fill="none">
              <path d="M 0 178 L 650 192" />
              <path d="M 268 0 L 222 380" />
              <path d="M 80 0 Q 300 180 560 380" />
            </g>

            {/* District Labels */}
            <text x="45" y="55" fill="#526D8F" fontSize="10" fontFamily="monospace">
              DISTRICT 02 · NORTH INDUSTRIAL
            </text>
            <text x="290" y="55" fill="#526D8F" fontSize="10" fontFamily="monospace">
              DISTRICT 04 · CENTRAL CORRIDOR
            </text>
            <text x="45" y="335" fill="#526D8F" fontSize="10" fontFamily="monospace">
              DISTRICT 09 · SOUTH RESIDENTIAL
            </text>
            <text x="380" y="335" fill="#526D8F" fontSize="10" fontFamily="monospace">
              DISTRICT 07 · EAST TRANSIT HUB
            </text>
          </svg>

          {/* Top Map Overlay KPI Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 rounded border border-[#243854] bg-[#101C2C]/90 px-3 py-1.5 backdrop-blur-xs">
              <Layers className="h-3.5 w-3.5 text-[#55D3BD]" />
              <span className="font-mono text-[11px] text-slate-200">
                Showing: <strong className="text-white">{current.label}</strong> ({current.totalSample} illustrative logs)
              </span>
            </div>
            <span className="rounded border border-[#55D3BD]/30 bg-[#55D3BD]/10 px-2.5 py-1 font-mono text-[10px] text-[#55D3BD] uppercase">
              {current.activeHotspots} Identified
            </span>
          </div>

          {/* Cluster Markers on Map */}
          <div className="relative z-10 my-auto h-52 w-full">
            {current.clusters.map((cluster) => (
              <div
                key={cluster.id}
                style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span className="animate-pulse-ring absolute -inset-3 rounded-full border border-[#3978E8]" />
                <div className="relative flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-[#6B9CFF] bg-[#101C2C]/95 text-white shadow-lg">
                  <span className="font-mono text-xs font-bold text-[#55D3BD]">
                    {cluster.count}
                  </span>
                </div>
                <div className="mt-1 whitespace-nowrap rounded border border-[#243854] bg-[#101C2C]/95 px-2 py-0.5 text-center font-mono text-[9px] text-slate-200 shadow-md">
                  {cluster.name}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Map Note */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 rounded border border-[#22354E] bg-[#101C2C]/90 px-3 py-2 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#6B9CFF]" />
              Cluster circles indicate multi-report density within a 250m grid cell.
            </span>
            <span className="font-mono text-[10px] text-[#55D3BD]">
              ILLUSTRATIVE SIMULATION
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Historical Report Trends Chart & Area Summaries */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#101C2C] p-5">
          {/* Historical Trend Chart */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#55D3BD]" />
                <h4 className="font-heading text-sm font-semibold text-white">
                  Illustrative Infrastructure Reports Over Time
                </h4>
              </div>
              <span className="font-mono text-[10px] text-slate-400">
                12-MONTH VIEW
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">{current.trendNote}</p>

            {/* SVG Bar & Trendline Chart */}
            <div className="mt-4 rounded border border-[#22354E] bg-[#132235] p-3.5">
              <div className="flex h-28 items-end justify-between gap-1.5 pt-2">
                {current.monthlySeries.map((val, idx) => (
                  <div
                    key={months[idx]}
                    className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end"
                  >
                    <div
                      style={{ height: `${val}%` }}
                      className={`w-full rounded-t transition-all duration-300 ${
                        val > 75
                          ? 'bg-[#55D3BD]'
                          : val > 55
                          ? 'bg-[#3978E8]'
                          : 'bg-[#2B486E]'
                      }`}
                    />
                    <span className="font-mono text-[9px] text-slate-400">
                      {months[idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Area-Level Issue Summaries */}
          <div className="mt-5">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                Area-Level Issue Summaries (Illustrative)
              </span>
              <span className="font-mono text-[10px] text-[#6B9CFF]">
                By Administrative District
              </span>
            </div>

            <div className="space-y-2">
              {current.areaSummaries.map((area) => (
                <div
                  key={area.ward}
                  className="rounded border border-[#22354E] bg-[#132235] p-2.5 text-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-white">
                      {area.ward}
                    </span>
                    <span className="font-mono text-[10px] text-[#55D3BD]">
                      {area.reports} reports
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2 text-[11px] text-slate-300">
                    <span>{area.primaryIssue}</span>
                    <span className="rounded bg-[#101C2C] px-1.5 py-0.5 font-mono text-[9px] text-slate-300 border border-[#243854]">
                      {area.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Engineering & Structural Safety Disclaimer */}
          <div className="mt-4 flex items-start gap-2 rounded border border-[#243854] bg-[#0C1623] p-2.5 text-[11px] text-slate-300">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6B9CFF]" />
            <p className="leading-snug">
              All dashboard figures are illustrative. CivicScan organizes visual
              and geospatial observations to support maintenance planning; it
              does not determine structural safety or predict infrastructure
              failure without engineering validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
