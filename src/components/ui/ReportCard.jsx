import {
  Camera,
  MapPin,
  Tag,
  UserCheck,
  CheckCircle2,
  ShieldAlert,
  Clock,
  FileText,
} from 'lucide-react';
import urbanRoadImg from '../../assets/images/urban-road-infrastructure.jpg';
import inspectionImg from '../../assets/images/infrastructure-inspection.jpg';

const journeyMilestones = [
  { id: 1, label: 'Photograph submitted', icon: Camera, activeAtStage: 0 },
  { id: 2, label: 'Location identified', icon: MapPin, activeAtStage: 0 },
  { id: 3, label: 'Issue classified', icon: Tag, activeAtStage: 1 },
  { id: 4, label: 'Inspection assigned', icon: UserCheck, activeAtStage: 2 },
  { id: 5, label: 'Resolution documented', icon: CheckCircle2, activeAtStage: 3 },
];

export default function ReportCard({ activeStageIndex = 0, stageData }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-[#101C2C] px-5 py-3.5 text-white">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-[#55D3BD]" />
          <span className="font-mono text-xs font-medium tracking-wider uppercase">
            Sample Report Journey · {stageData.sampleData.reportId}
          </span>
        </div>
        <span className="rounded border border-[#55D3BD]/40 bg-[#55D3BD]/15 px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#55D3BD] uppercase">
          {stageData.statusBadge}
        </span>
      </div>

      {/* 5-Step Journey Progress Bar */}
      <div className="border-b border-slate-200 bg-[#F4F7FA] px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold tracking-wider text-[#68788D] uppercase">
            End-to-End Lifecycle Trace (Illustrative)
          </span>
          <span className="font-mono text-[10px] text-[#3978E8] font-medium">
            Stage {stageData.number} of 04
          </span>
        </div>

        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-5">
          {journeyMilestones.map((milestone, idx) => {
            const isCompleted = activeStageIndex > milestone.activeAtStage;
            const isCurrent = activeStageIndex === milestone.activeAtStage;

            return (
              <li
                key={milestone.id}
                className={`flex items-center gap-2 rounded border px-2.5 py-2 text-xs transition-all ${
                  isCurrent
                    ? 'border-[#3978E8] bg-white text-[#101C2C] font-semibold shadow-2xs'
                    : isCompleted
                    ? 'border-[#55D3BD]/60 bg-[#55D3BD]/10 text-[#142235]'
                    : 'border-slate-200 bg-white/60 text-[#68788D]'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${
                    isCurrent
                      ? 'bg-[#3978E8] text-white'
                      : isCompleted
                      ? 'bg-[#55D3BD] text-[#101C2C]'
                      : 'bg-slate-200 text-[#68788D]'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate text-[11px] leading-tight">
                  {milestone.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Active Stage Inspection Body */}
      <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 md:grid-cols-12">
        {/* Left Visual Evidence Preview */}
        <div className="md:col-span-5 flex flex-col justify-between rounded border border-slate-200 bg-[#F4F7FA] p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-slate-900">
            <img
              src={activeStageIndex >= 2 ? inspectionImg : urbanRoadImg}
              alt={
                activeStageIndex >= 2
                  ? 'Municipal field inspector verifying road infrastructure condition using a tablet'
                  : 'Submitted photograph of road surface damage for AI assessment'
              }
              width="480"
              height="360"
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-300"
            />

            {/* Simulated Bounding Box on Analyze Stage */}
            {activeStageIndex === 1 && (
              <div className="absolute inset-x-6 bottom-6 top-10 rounded border-2 border-[#55D3BD] bg-[#55D3BD]/10 pointer-events-none flex items-start justify-between p-1.5">
                <span className="rounded bg-[#101C2C]/90 px-1.5 py-0.5 font-mono text-[9px] font-medium text-[#55D3BD]">
                  CLASS: ROAD_DAMAGE
                </span>
                <span className="rounded bg-[#101C2C]/90 px-1.5 py-0.5 font-mono text-[9px] text-white">
                  DUPLICATE CHECK: PASS
                </span>
              </div>
            )}

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded bg-[#101C2C]/85 px-2.5 py-1 text-[10px] font-mono text-white backdrop-blur-xs">
              <span>{stageData.sampleData.coordinates}</span>
              <span className="text-[#55D3BD]">EXIF VERIFIED</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[#68788D] font-mono">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[#3978E8]" />
              {stageData.sampleData.timestamp}
            </span>
            <span>STAGE {stageData.number}</span>
          </div>
        </div>

        {/* Right Structured Report Details */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-[#3978E8]/10 px-2.5 py-1 font-mono text-[11px] font-medium text-[#3978E8]">
              <FileText className="h-3.5 w-3.5" />
              <span>{stageData.journeyStep}</span>
            </div>

            <h4 className="mt-3 font-heading text-xl font-semibold text-[#142235]">
              {stageData.sampleData.stepTitle}
            </h4>

            <p className="mt-1 font-mono text-xs text-[#68788D]">
              Location: {stageData.sampleData.location}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#142235]">
              {stageData.sampleData.details}
            </p>

            <div className="mt-4 space-y-2 border-t border-slate-200 pt-3.5">
              <span className="font-mono text-[10px] font-semibold tracking-wider text-[#68788D] uppercase">
                Stage Verification Log
              </span>
              <ul className="space-y-1.5">
                {stageData.sampleData.checkItems.map((check) => (
                  <li
                    key={check}
                    className="flex items-start gap-2 text-xs text-[#142235]"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3978E8]" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Required Engineering Judgment Disclaimer */}
          <div className="mt-5 flex items-start gap-2.5 rounded border border-slate-200 bg-[#F4F7FA] p-3 text-xs text-[#142235]">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#3978E8]" />
            <p className="leading-relaxed">
              <strong className="font-semibold">Operational Safeguard:</strong>{' '}
              AI-assisted classification organizes incoming observations for
              faster review—it does not replace physical inspection or
              professional engineering judgment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
