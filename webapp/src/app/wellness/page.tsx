import { PageHeader } from '../../components/PageHeader';
import { SectionCard } from '../../components/SectionCard';
import { habitLoops, mindfulnessStack, recoveryProtocols } from '../../content/dailyPlan';

export default function WellnessPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Wellness Systems"
        subtitle="Sustain high performance with intentional recovery and mental care."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {habitLoops.map((habit) => (
          <SectionCard key={habit.title} title={habit.title} description={habit.description}>
            <ol className="space-y-2">
              {habit.steps.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-500" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </SectionCard>
        ))}
      </div>

      <SectionCard title="Mindfulness Stack" description="Layer short, effective resets into the day.">
        <div className="grid gap-4 md:grid-cols-3">
          {mindfulnessStack.map((practice) => (
            <div key={practice.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{practice.name}</p>
              <p className="text-sm text-slate-600">{practice.duration}</p>
              <p className="mt-2 text-xs uppercase text-primary">Cue: {practice.cue}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Recovery Protocols" description="Protect your nervous system.">
        <ul className="space-y-2">
          {recoveryProtocols.map((protocol) => (
            <li key={protocol} className="flex gap-3">
              <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary" />
              <span>{protocol}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
