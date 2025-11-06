import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Daily Fitness Tracker',
  description: 'Plan, track, and optimize your daily fitness routine.'
};

const inter = Inter({ subsets: ['latin'] });

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/workouts', label: 'Workouts' },
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/progress', label: 'Progress' },
  { href: '/wellness', label: 'Wellness' }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <div className="min-h-screen">
          <header className="bg-white shadow-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
              <Link href="/" className="text-xl font-semibold text-primary">
                Daily Fitness Tracker
              </Link>
              <div className="flex items-center gap-3">
                <ul className="flex flex-wrap gap-3 text-sm font-medium">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-full px-4 py-2 transition hover:bg-primary hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="/FitnessTracker.docx"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
                  download
                >
                  Download Plan
                </a>
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-10">
            {children}
          </main>
          <footer className="bg-white py-6 text-center text-sm text-slate-500">
            Built for high-impact daily routines — stay consistent and celebrate every win.
          </footer>
        </div>
      </body>
    </html>
  );
}
