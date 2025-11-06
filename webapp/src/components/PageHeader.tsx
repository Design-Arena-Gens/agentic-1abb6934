import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      </div>
      {actions && <div className="flex gap-3">{actions}</div>}
    </div>
  );
}
