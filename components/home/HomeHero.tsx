import Link from 'next/link';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const stats = [
  { value: '15+', label: 'Years of Ministry' },
  { value: '2,400+', label: 'Lives Discipled' },
  { value: '18', label: 'Nations Reached' },
  { value: '40+', label: 'Active Students' },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/40 via-slate-950/70 to-slate-950" aria-hidden />
      <div
        className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand-600/40 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-float"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal animation="fade-down">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100 ring-1 ring-inset ring-white/20">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              AVOJ Ministries &amp; Bible College
            </span>
          </Reveal>
          <Reveal animation="fade-up" delay={120}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
              Equipping hearts for{' '}
              <span className="relative whitespace-nowrap">
                <span className="bg-gradient-to-r from-brand-300 via-accent to-brand-200 bg-clip-text text-transparent">
                  Kingdom
                </span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C40 3 160 3 198 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              impact
            </h1>
          </Reveal>
          <Reveal animation="fade-up" delay={220}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              A Spirit-led community devoted to biblically grounded education, fervent prayer, and
              the relentless advance of the Gospel across nations.
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={320}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="gap-2 rounded-full shadow-glow">
                <Link href="/bible-college">
                  Explore the College
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="gap-2 rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about">
                  <PlayCircle className="h-5 w-5" />
                  Our Story
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={420}>
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-white/15 pl-4">
                  <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal animation="scale-in" delay={300} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/30 to-accent/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6957165/pexels-photo-6957165.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Worshippers gathered in prayer"
                className="h-[34rem] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-slate-950/60 px-5 py-4 backdrop-blur-md">
                <p className="font-display text-lg font-semibold text-white">
                  &ldquo;Go and make disciples of all nations.&rdquo;
                </p>
                <p className="mt-1 text-sm text-brand-200">Matthew 28:19</p>
              </div>
            </div>
            <div className="absolute -left-6 top-10 hidden rotate-[-6deg] rounded-2xl border border-white/15 bg-white p-4 text-slate-900 shadow-xl sm:block animate-float">
              <p className="text-3xl font-bold text-brand-700">98%</p>
              <p className="text-xs text-slate-500">Graduate placement</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
