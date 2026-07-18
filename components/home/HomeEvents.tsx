import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const events = [
  {
    day: '12',
    month: 'Oct',
    title: 'Annual Convocation Service',
    time: '10:00 AM',
    location: 'AVOJ Main Sanctuary',
    tag: 'Worship',
    excerpt:
      'A sacred gathering to dedicate the new academic year to the Lord and commission incoming students.',
  },
  {
    day: '18',
    month: 'Oct',
    title: 'Prayer &amp; Fasting Night',
    time: '7:00 PM',
    location: 'Prayer Hall',
    tag: 'Prayer',
    excerpt:
      'An evening of corporate intercession for our city, the nations, and the work of the Gospel.',
  },
  {
    day: '02',
    month: 'Nov',
    title: 'Missions Conference 2026',
    time: '9:00 AM',
    location: 'Grace Auditorium',
    tag: 'Missions',
    excerpt:
      'Hear from field workers, explore mission opportunities, and discover your role in the Great Commission.',
  },
];

export function HomeEvents() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal animation="fade-up">
            <SectionHeading
              align="left"
              eyebrow="Mark Your Calendar"
              title="Upcoming Events"
              description="Gather with us throughout the year for worship, learning, prayer, and outreach."
              className="max-w-xl"
            />
          </Reveal>
          <Reveal animation="fade-up" delay={120}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              View all events
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.title} animation="fade-up" delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="flex items-stretch">
                  <div className="flex w-20 shrink-0 flex-col items-center justify-center bg-gradient-to-b from-brand-600 to-brand-800 py-6 text-white">
                    <span className="font-display text-3xl font-bold leading-none">
                      {event.day}
                    </span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-100">
                      {event.month}
                    </span>
                  </div>
                  <div className="flex-1 p-6">
                    <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-brand-700">
                      {event.tag}
                    </span>
                    <h3
                      className="mt-3 font-display text-lg font-semibold leading-snug text-slate-900"
                      dangerouslySetInnerHTML={{ __html: event.title }}
                    />
                    <div className="mt-3 space-y-1.5 text-xs text-slate-500">
                      <p className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-brand-500" />
                        {event.time}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-brand-500" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 px-6 py-5">
                  <p
                    className="text-sm text-slate-600"
                    dangerouslySetInnerHTML={{ __html: event.excerpt }}
                  />
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                  >
                    Reserve a seat
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
