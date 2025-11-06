import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  accent?: string;
}

export function SectionCard({ title, description, children, accent }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </div>
        {accent && <span className="text-sm font-semibold text-primary">{accent}</span>}
      </div>
      <div className="space-y-4 text-sm text-slate-700">{children}</div>
    </section>
  );
}
