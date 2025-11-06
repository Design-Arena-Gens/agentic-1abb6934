import { PageHeader } from '../../components/PageHeader';
import { SectionCard } from '../../components/SectionCard';
import { ProgressBar } from '../../components/ProgressBar';
import { milestoneLog, recoveryScore, trendMetrics } from '../../content/dailyPlan';

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Progress Intelligence"
        subtitle="Translate the data into confident course corrections."
      />

      <SectionCard title="Trend Line" description="Track the metrics that matter most.">
        <div className="grid gap-4 md:grid-cols-2">
          {trendMetrics.map((metric) => (
            <ProgressBar key={metric.label} {...metric} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Recovery Rhythm" description="Keep your readiness between 80-95.">
        <div className="grid gap-4 md:grid-cols-7">
          {recoveryScore.map((entry) => (
            <div key={entry.day} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-xs uppercase text-slate-500">{entry.day}</p>
              <p className="mt-2 text-2xl font-semibold text-primary">{entry.score}</p>
              <div className="mt-3 h-16 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full w-full bg-primary/20"
                  style={{ transform: `translateY(${100 - entry.score}%)` }}
                >
                  <div className="h-1/2 bg-primary/50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Celebrated Wins" description="Evidence you are trending forward.">
        <ul className="space-y-4">
          {milestoneLog.map((milestone) => (
            <li key={milestone.date} className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase text-primary">{milestone.date}</p>
              <p className="mt-1 text-base font-semibold text-slate-900">{milestone.win}</p>
              <p className="text-sm text-slate-600">Anchor habit: {milestone.anchor}</p>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
