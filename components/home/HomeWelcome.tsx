import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export function HomeWelcome() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal animation="slide-in-left" className="relative">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src="https://images.pexels.com/photos/8469326/pexels-photo-8469326.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="An open Bible with hands in prayer"
                className="h-[28rem] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-60 rounded-2xl border border-slate-100 bg-white p-5 shadow-glow sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Quote className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">
                    Word-centered
                  </p>
                  <p className="text-xs text-slate-500">Teaching &amp; training</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Every program is anchored in the authority of Scripture.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal animation="slide-in-right" delay={150}>
          <SectionHeading
            align="left"
            eyebrow="Welcome Home"
            title="A family devoted to Christ and His Word"
            description="At AVOJ, we believe every believer is called to a life of purpose, power, and fruitfulness. Our doors are open to all who hunger for truth and long to be equipped for service."
          />
          <div className="mt-8 space-y-5">
            {[
              {
                title: 'Biblically grounded',
                body: 'We hold Scripture as the final authority for faith, life, and ministry in everything we teach and do.',
              },
              {
                title: 'Spirit-led community',
                body: 'We pursue the presence and power of the Holy Spirit in worship, prayer, and everyday obedience.',
              },
              {
                title: 'Globally minded',
                body: 'We equip men and women to carry the Gospel across cultures, cities, and generations.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.2 3.2 6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
