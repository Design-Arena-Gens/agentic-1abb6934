import { PageHeader } from '../../components/PageHeader';
import { SectionCard } from '../../components/SectionCard';
import { workoutBlocks, weeklySplits } from '../../content/dailyPlan';

export default function WorkoutsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Training Blueprint"
        subtitle="Command the session with focused, high leverage blocks."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {workoutBlocks.map((block) => (
          <SectionCard
            key={block.label}
            title={`${block.label} • ${block.duration}`}
            description={block.focus}
            accent="Today"
          >
            <ul className="space-y-2">
              {block.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </div>

      <SectionCard
        title="Weekly Stimulus Map"
        description="Rotate intent to balance stress, adaptation, and recovery."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {weeklySplits.map((split) => (
            <div key={split.day} className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">{split.day}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{split.stimulus}</p>
              <p className="text-sm text-slate-600">{split.intent}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
