interface ProgressBarProps {
  label: string;
  value: number;
  goal: number;
  units?: string;
}

export function ProgressBar({ label, value, goal, units }: ProgressBarProps) {
  const percentage = Math.min(100, Math.round((value / goal) * 100));

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
        <span>{label}</span>
        <span>
          {value}
          {units} / {goal}
          {units}
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-primary" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
