import { PageHeader } from '../components/PageHeader';
import { ProgressBar } from '../components/ProgressBar';
import { SectionCard } from '../components/SectionCard';
import {
  dashboardFocusAreas,
  energyChecklist,
  eveningReset,
  readinessMetrics
} from '../content/dailyPlan';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Your Daily Game Plan"
        subtitle="Execute the essentials, sustain momentum, and close the day with a win."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {dashboardFocusAreas.map((area) => (
          <div key={area.name} className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm`}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Focus</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{area.name}</h3>
            <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${area.color}`}>
              {area.status}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <SectionCard title="Readiness" description="Adapt intensity with smarter feedback." accent="Score 82">
          {readinessMetrics.map((metric) => (
            <ProgressBar key={metric.label} {...metric} />
          ))}
        </SectionCard>
        <SectionCard title="Today's Highlights" description="Lock in the non-negotiables.">
          <ul className="space-y-3">
            {energyChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Evening Reset" description="Close loops before you sleep.">
          <ul className="space-y-3">
            {eveningReset.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
