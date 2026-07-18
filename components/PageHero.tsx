import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Crumb = { name: string; href: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-slate-950/80 to-slate-950" aria-hidden />
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal animation="fade-down">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-600" />}
                <Link
                  href={c.href}
                  className={i === crumbs.length - 1 ? 'text-white' : 'transition-colors hover:text-brand-300'}
                >
                  {c.name}
                </Link>
              </span>
            ))}
          </nav>
        </Reveal>
        <Reveal animation="fade-up" delay={120}>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100 ring-1 ring-inset ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal animation="fade-up" delay={220}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal animation="fade-up" delay={320}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
