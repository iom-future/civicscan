import {
  ScanEye,
  Map,
  Layers,
  SlidersHorizontal,
  ClipboardCheck,
  BarChart3,
  MapPin,
} from 'lucide-react';
import urbanRoadImg from '../../assets/images/urban-road-infrastructure.jpg';

const iconMap = {
  ScanEye,
  Map,
  Layers,
  SlidersHorizontal,
  ClipboardCheck,
  BarChart3,
};

function VisionAssessmentPreview() {
  return (
    <div className="mt-6 overflow-hidden rounded border border-slate-200 bg-[#101C2C] p-3 text-white">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-slate-400">
        <span>VISION PIPELINE · ILLUSTRATIVE SAMPLE</span>
        <span className="text-[#55D3BD]">HUMAN REVIEW REQUIRED</span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-12 items-center">
        <div className="sm:col-span-7 relative aspect-[16/10] overflow-hidden rounded border border-[#243854]">
          <img
            src={urbanRoadImg}
            alt="Submitted street photograph analyzed by CivicScan image assessment preview"
            width="420"
            height="260"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {/* Simulated Detection Frame */}
          <div className="absolute inset-x-5 bottom-3 top-6 rounded border-2 border-[#55D3BD] bg-[#3978E8]/15 p-1.5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded bg-[#101C2C]/90 px-1.5 py-0.5 font-mono text-[9px] text-[#55D3BD]">
                CARRIAGEWAY_DEFECT
              </span>
              <span className="rounded bg-[#101C2C]/90 px-1.5 py-0.5 font-mono text-[9px] text-white">
                0.94 SCORE
              </span>
            </div>
            <div className="self-end rounded bg-[#101C2C]/90 px-1.5 py-0.5 font-mono text-[9px] text-[#6B9CFF]">
              SURFACE_WEAR_MODERATE
            </div>
          </div>
        </div>

        <div className="sm:col-span-5 space-y-2 text-xs">
          <div className="rounded border border-[#243854] bg-[#16263B] p-2">
            <span className="font-mono text-[9px] text-slate-400 uppercase block">
              Detected Category
            </span>
            <span className="font-medium text-white">Road Surface Damage</span>
          </div>
          <div className="rounded border border-[#243854] bg-[#16263B] p-2">
            <span className="font-mono text-[9px] text-slate-400 uppercase block">
              Secondary Tags
            </span>
            <span className="font-mono text-[10px] text-[#6B9CFF]">
              #asphalt-pothole #edge-wear
            </span>
          </div>
          <div className="rounded border border-[#243854] bg-[#16263B] p-2">
            <span className="font-mono text-[9px] text-slate-400 uppercase block">
              Duplicate Check
            </span>
            <span className="text-[11px] text-[#55D3BD]">
              Matched within 15m radius
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GeospatialMapPreview() {
  return (
    <div className="mt-6 overflow-hidden rounded border border-slate-200 bg-[#101C2C] p-3 text-white">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-slate-400">
        <span>GEOSPATIAL CLUSTER VIEW · SECTOR 02</span>
        <span className="text-[#6B9CFF]">ILLUSTRATIVE LAYER</span>
      </div>

      <div className="relative h-44 w-full overflow-hidden rounded border border-[#243854] bg-[#0C1623]">
        <svg
          viewBox="0 0 400 180"
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <g stroke="#1E3450" strokeWidth="1" fill="#132235">
            <rect x="15" y="15" width="90" height="60" rx="2" />
            <rect x="120" y="15" width="110" height="60" rx="2" />
            <rect x="245" y="15" width="135" height="60" rx="2" />
            <rect x="15" y="95" width="140" height="70" rx="2" />
            <rect x="170" y="95" width="210" height="70" rx="2" />
          </g>
          <g stroke="#294366" strokeWidth="4">
            <line x1="0" y1="85" x2="400" y2="85" />
            <line x1="112" y1="0" x2="112" y2="180" />
            <line x1="238" y1="0" x2="238" y2="180" />
          </g>
          {/* Concentration Zone Circles */}
          <circle
            cx="112"
            cy="85"
            r="28"
            fill="#3978E8"
            fillOpacity="0.22"
            stroke="#6B9CFF"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle cx="112" cy="85" r="5" fill="#55D3BD" />

          <circle
            cx="238"
            cy="85"
            r="22"
            fill="#F59E0B"
            fillOpacity="0.2"
            stroke="#F59E0B"
            strokeWidth="1"
          />
          <circle cx="238" cy="85" r="4.5" fill="#F59E0B" />
        </svg>

        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded bg-[#101C2C]/90 px-2.5 py-1 font-mono text-[10px] text-slate-300">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-[#55D3BD]" />
            2 Active Concentration Zones
          </span>
          <span className="text-[#55D3BD]">Ward Boundary Overlay</span>
        </div>
      </div>
    </div>
  );
}

function MaintenanceQueuePreview() {
  const sampleRows = [
    {
      id: 'INC-904',
      issue: 'Blocked stormwater culvert',
      ward: 'Ward 03 East',
      stage: 'Under Maintenance',
      badgeColor: 'bg-[#3978E8]/15 text-[#6B9CFF] border-[#3978E8]/40',
    },
    {
      id: 'INC-899',
      issue: 'Arterial pothole cluster',
      ward: 'Ward 07 Central',
      stage: 'Inspection Assigned',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-400/40',
    },
    {
      id: 'INC-882',
      issue: 'Streetlight feeder fault',
      ward: 'Ring Road North',
      stage: 'Resolved & Verified',
      badgeColor: 'bg-[#55D3BD]/15 text-[#55D3BD] border-[#55D3BD]/40',
    },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded border border-slate-200 bg-[#101C2C] p-3 text-white">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-slate-400">
        <span>ISSUE MANAGEMENT WORKFLOW QUEUE (ILLUSTRATIVE)</span>
        <span>3 TRACKED ITEMS</span>
      </div>
      <div className="divide-y divide-[#22354E] rounded border border-[#22354E] bg-[#132235]">
        {sampleRows.map((row) => (
          <div
            key={row.id}
            className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-xs"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[10px] text-slate-400">
                {row.id}
              </span>
              <span className="font-medium text-white">{row.issue}</span>
              <span className="hidden sm:inline font-mono text-[10px] text-slate-400">
                · {row.ward}
              </span>
            </div>
            <span
              className={`rounded border px-2 py-0.5 font-mono text-[10px] ${row.badgeColor}`}
            >
              {row.stage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeatureCard({ capability }) {
  const IconComponent = iconMap[capability.iconName] || Layers;
  const isLarge = capability.span === 'large';

  return (
    <div
      className={`group flex flex-col justify-between rounded-md border border-slate-200 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-[#3978E8]/60 hover:shadow-sm ${
        isLarge ? 'lg:col-span-7' : 'lg:col-span-5'
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#3978E8]">
            CAPABILITY {capability.number}
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded border border-slate-200 bg-[#F4F7FA] text-[#142235] transition-colors group-hover:border-[#3978E8] group-hover:bg-[#3978E8] group-hover:text-white">
            <IconComponent className="h-4.5 w-4.5" />
          </div>
        </div>

        <h3 className="mt-4 font-heading text-xl font-semibold text-[#142235] sm:text-2xl">
          {capability.number} — {capability.title}
        </h3>

        <p className="mt-2.5 text-base leading-relaxed text-[#68788D]">
          {capability.description}
        </p>
      </div>

      {/* Embedded Product Interface Previews */}
      {capability.previewType === 'vision' && <VisionAssessmentPreview />}
      {capability.previewType === 'map' && <GeospatialMapPreview />}
      {capability.previewType === 'dashboard' && <MaintenanceQueuePreview />}

      {capability.previewType === 'classification' && (
        <div className="mt-6 rounded border border-slate-200 bg-[#F4F7FA] p-3.5">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#68788D] uppercase">
            <span>Auto-Routing & Deduplication</span>
            <span className="text-[#3978E8]">3 → 1 Incident</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="rounded border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-[#142235]">
              Road Damage
            </span>
            <span className="rounded border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-[#142235]">
              Blocked Drainage
            </span>
            <span className="rounded border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-[#142235]">
              Streetlights
            </span>
            <span className="rounded border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-[#142235]">
              Solid Waste
            </span>
          </div>
        </div>
      )}

      {capability.previewType === 'priority' && (
        <div className="mt-6 rounded border border-slate-200 bg-[#F4F7FA] p-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-[#142235]">
              Configurable Priority Indicators
            </span>
            <span className="font-mono text-[10px] text-[#3978E8]">
              OPERATOR VERIFIED
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
            <div className="rounded border border-slate-200 bg-white p-2 text-center">
              <span className="block text-[#68788D]">LOCATION</span>
              <span className="font-semibold text-[#142235]">Arterial Rd</span>
            </div>
            <div className="rounded border border-slate-200 bg-white p-2 text-center">
              <span className="block text-[#68788D]">FREQUENCY</span>
              <span className="font-semibold text-[#142235]">4 Reports</span>
            </div>
            <div className="rounded border border-slate-200 bg-white p-2 text-center">
              <span className="block text-[#68788D]">REVIEW</span>
              <span className="font-semibold text-[#3978E8]">Assigned</span>
            </div>
          </div>
        </div>
      )}

      {capability.previewType === 'insights' && (
        <div className="mt-6 rounded border border-slate-200 bg-[#F4F7FA] p-3.5">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#68788D] uppercase">
            <span>Recurring Hotspot Pattern (Illustrative)</span>
            <span className="text-[#142235] font-semibold">Q1–Q4 View</span>
          </div>
          <div className="mt-2.5 flex items-end gap-2 h-14 px-1">
            {[38, 52, 44, 68, 84, 60, 45, 32].map((val, i) => (
              <div
                key={i}
                style={{ height: `${val}%` }}
                className={`flex-1 rounded-t ${
                  i === 4 ? 'bg-[#3978E8]' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
