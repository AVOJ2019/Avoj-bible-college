import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { Eye, Target, BookOpen, Heart, Users, Globe2 } from 'lucide-react';

const milestones = [
  {
    year: '2009',
    title: 'A vision is born',
    body: 'AVOJ Ministries began in a small living room with seven believers committed to prayer and the study of the Word.',
  },
  {
    year: '2013',
    title: 'First outreach',
    body: 'The ministry launched its first evangelism campaign, reaching three neighboring towns with the Gospel.',
  },
  {
    year: '2016',
    title: 'AVOJ Bible College founded',
    body: 'Responding to a growing need for trained leaders, the Bible College opened its doors with twelve pioneering students.',
  },
  {
    year: '2020',
    title: 'Missions expanded',
    body: 'Missionaries were sent to six nations, establishing partnerships and church-planting efforts across two continents.',
  },
  {
    year: '2024',
    title: 'A new campus',
    body: 'The Grace Avenue campus was dedicated, housing classrooms, a prayer hall, and a growing library of theological resources.',
  },
];

const faithPoints = [
  {
    title: 'The Holy Scriptures',
    body: 'We believe the Bible is the inspired, infallible, and authoritative Word of God, sufficient for all faith and life.',
  },
  {
    title: 'One Triune God',
    body: 'We believe in one God eternally existing in three persons: the Father, the Son, and the Holy Spirit.',
  },
  {
    title: 'The Lord Jesus Christ',
    body: 'We believe in His deity, virgin birth, sinless life, atoning death, bodily resurrection, ascension, and return.',
  },
  {
    title: 'Salvation by Grace',
    body: 'We believe salvation is by grace through faith in Christ alone, resulting in a transformed and fruitful life.',
  },
  {
    title: 'The Holy Spirit',
    body: 'We believe the Spirit indwells, fills, empowers, and gifts believers for service and godly living.',
  },
  {
    title: 'The Church &amp; Mission',
    body: 'We believe the Church is the Body of Christ, commissioned to make disciples of all nations.',
  },
];

const values = [
  { icon: BookOpen, title: 'Biblical Fidelity', body: 'Anchored to Scripture in all we teach and practice.' },
  { icon: Heart, title: 'Devotion', body: 'Loving God and people with undivided hearts.' },
  { icon: Users, title: 'Community', body: 'Doing life and ministry together as a family.' },
  { icon: Globe2, title: 'Mission', body: 'Carrying the Gospel across every boundary.' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        crumbs={[{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about' }]}
        title="A story of grace, growth, and the Gospel"
        description="For over fifteen years, AVOJ Ministries & AVOJ Bible College has been raising disciples, training leaders, and sending labourers into the harvest field."
      />

      {/* Ministry History */}
      <section id="history" className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal animation="slide-in-left" className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="Ministry History"
                title="From a living room to the nations"
                description="What began as a small gathering of believers has grown into a ministry touching lives across continents."
              />
              <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
                <img
                  src="https://images.pexels.com/photos/9852746/pexels-photo-9852746.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="AVOJ congregation gathered in worship"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={120}>
              <ol className="relative space-y-10 before:absolute before:left-[1.65rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-brand-400 before:via-brand-200 before:to-transparent">
                {milestones.map((m) => (
                  <li key={m.year} className="relative flex gap-6">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 font-display text-sm font-bold text-white shadow-glow">
                      {m.year}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-lg font-semibold text-slate-900">
                        {m.title}
                      </h3>
                      <p className="mt-1.5 text-slate-600">{m.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal animation="slide-in-left" className="relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/25 to-accent/15 blur-2xl" aria-hidden />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white shadow-glow">
                  <img
                    src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Founder and Senior Pastor of AVOJ Ministries"
                    className="h-[30rem] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -right-4 bottom-6 hidden rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-glow sm:block">
                  <p className="font-display text-sm font-semibold text-slate-900">
                    Founder &amp; Senior Pastor
                  </p>
                  <p className="text-xs text-brand-700">Since 2009</p>
                </div>
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={150} className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Our Founder"
                title="Dr. Samuel Obadiah"
                description="A pastor, teacher, and missionary whose heart beats for the next generation of Spirit-filled leaders."
              />
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  Dr. Samuel Obadiah founded AVOJ Ministries in 2009 with a simple conviction: that
                  the local church and the mission field both need believers deeply rooted in the
                  Word and filled with the Spirit.
                </p>
                <p>
                  After two decades of pastoral and cross-cultural ministry, he established AVOJ
                  Bible College to equip men and women for that very work. His teaching blends
                  theological depth with pastoral warmth and a relentless passion for the Great
                  Commission.
                </p>
                <p>
                  He holds a Doctor of Ministry and has authored several books on prayer, spiritual
                  formation, and missions. He and his wife, Grace, serve together from the Grace
                  Avenue campus.
                </p>
              </div>
              <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-white p-5 shadow-soft">
                <p className="font-display text-lg italic text-slate-900">
                  &ldquo;We are not raising professionals; we are raising servants whose lives are
                  shaped by the Word and set ablaze by the Spirit.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-brand-700">
                  &mdash; Dr. Samuel Obadiah
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <SectionHeading
              eyebrow="Our Compass"
              title="Vision &amp; Mission"
              description="The calling that gives shape and direction to everything we do."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal animation="fade-up" delay={120}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-50/40 p-8 shadow-soft lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">Vision</h3>
                <p className="mt-4 text-slate-600">
                  To see a generation of Spirit-filled, biblically grounded believers raised up to
                  transform their communities and carry the Gospel to the ends of the earth.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={240}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-accent/5 p-8 shadow-soft lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-brand-600 text-white shadow-glow">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">Mission</h3>
                <p className="mt-4 text-slate-600">
                  To make Christlike disciples through fervent prayer, faithful teaching, and
                  Spirit-empowered outreach, building leaders who serve the Church and advance the
                  Kingdom.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} animation="fade-up" delay={i * 90}>
                <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-semibold text-slate-900">
                    {v.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-600">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section id="faith" className="relative bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <SectionHeading
              eyebrow="What We Believe"
              title="Statement of Faith"
              description="The foundational truths that guide our teaching, ministry, and community life."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faithPoints.map((p, i) => (
              <Reveal key={p.title} animation="fade-up" delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <span className="font-display text-4xl font-bold text-brand-100 transition-colors group-hover:text-brand-200">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="mt-2 font-display text-lg font-semibold text-slate-900"
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
