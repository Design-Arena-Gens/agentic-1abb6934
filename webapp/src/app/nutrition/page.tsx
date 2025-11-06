import { PageHeader } from '../../components/PageHeader';
import { SectionCard } from '../../components/SectionCard';
import { ProgressBar } from '../../components/ProgressBar';
import { groceryFocus, macroTargets, meals } from '../../content/dailyPlan';

export default function NutritionPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Fuel Strategy"
        subtitle="Anchor energy and recovery with intentional nutrition."
      />

      <SectionCard title="Daily Macro Targets" description="Update as meals log in.">
        <div className="grid gap-4 md:grid-cols-2">
          {macroTargets.map((macro) => (
            <ProgressBar key={macro.label} {...macro} />
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-6 md:grid-cols-2">
        {meals.map((meal) => (
          <SectionCard key={meal.name} title={`${meal.name} • ${meal.time}`} description={meal.highlight}>
            <ul className="space-y-2">
              {meal.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </div>

      <SectionCard title="Grocery Prep" description="Shop once, prep twice.">
        <ul className="grid gap-3 md:grid-cols-2">
          {groceryFocus.map((item) => (
            <li key={item} className="rounded-xl border border-dashed border-primary/40 px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
