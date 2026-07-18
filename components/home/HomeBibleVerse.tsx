import { BookOpenText } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function HomeBibleVerse() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-slate-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal animation="scale-in">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold-400 ring-1 ring-inset ring-white/20">
            <BookOpenText className="h-8 w-8" />
          </span>
        </Reveal>
        <Reveal animation="fade-up" delay={120}>
          <blockquote className="mt-8">
            <p className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl md:leading-snug text-balance">
              &ldquo;Trust in the Lord with all your heart and lean not on your own understanding; in
              all your ways submit to Him, and He will make your paths straight.&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
              Proverbs 3:5&ndash;6
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
