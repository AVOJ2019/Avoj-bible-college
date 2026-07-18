import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-slate-900 py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal animation="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100 ring-1 ring-inset ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Join the Mission
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Step into your calling today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100/85 sm:text-lg">
            Whether you are called to study, serve, or sow into the work of the Gospel, there is a
            place for you at AVOJ. Let&rsquo;s advance the Kingdom together.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full bg-white text-brand-700 shadow-glow hover:bg-brand-50">
              <Link href="/bible-college">
                Apply to Bible College
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/50"
            >
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                Talk to Us
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
