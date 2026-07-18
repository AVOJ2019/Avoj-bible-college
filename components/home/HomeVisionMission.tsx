import { Eye, Target } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export function HomeVisionMission() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal animation="fade-up">
          <SectionHeading
            eyebrow="Our Compass"
            title="Vision &amp; Mission"
            description="The conviction that shapes every classroom, prayer meeting, and outreach we undertake."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal animation="fade-up" delay={120}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow lg:p-10">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-50 transition-transform duration-700 group-hover:scale-150" aria-hidden />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">Our Vision</h3>
                <p className="mt-4 text-slate-600">
                  To see a generation of Spirit-filled, biblically grounded believers raised up to
                  transform their communities and carry the Gospel to the ends of the earth.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                  {['Christ exalted in every culture', 'Believers equipped for every good work', 'Communities renewed by the Gospel'].map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal animation="fade-up" delay={240}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow lg:p-10">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/10 transition-transform duration-700 group-hover:scale-150" aria-hidden />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-brand-600 text-white shadow-glow">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">Our Mission</h3>
                <p className="mt-4 text-slate-600">
                  To make Christlike disciples through fervent prayer, faithful teaching, and
                  Spirit-empowered outreach, building leaders who serve the Church and advance the
                  Kingdom.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                  {['Teach the whole counsel of Scripture', 'Train servant leaders for ministry', 'Send labourers into the harvest field'].map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
