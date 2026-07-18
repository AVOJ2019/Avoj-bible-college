import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  GraduationCap,
  Users,
  Library,
  CalendarDays,
  Clock,
  Award,
  ArrowRight,
  LogIn,
  CheckCircle2,
  Microscope,
  Church,
  Coffee,
  Wifi,
} from 'lucide-react';

const courses = [
  {
    code: 'BC 101',
    title: 'Foundations of Biblical Theology',
    duration: '12 weeks',
    credits: '3 credits',
    level: 'Certificate',
    excerpt:
      'A survey of the grand narrative of Scripture and the core doctrines of the Christian faith.',
    icon: BookOpen,
  },
  {
    code: 'BC 210',
    title: 'Hermeneutics & Bible Interpretation',
    duration: '10 weeks',
    credits: '3 credits',
    level: 'Diploma',
    excerpt:
      'Principles and practices for faithfully studying, interpreting, and teaching God\u2019s Word.',
    icon: Microscope,
  },
  {
    code: 'BC 305',
    title: 'Spiritual Formation & Prayer',
    duration: '8 weeks',
    credits: '2 credits',
    level: 'Diploma',
    excerpt:
      'Cultivating a vibrant life of prayer, worship, and Christlike character through the Spirit.',
    icon: Church,
  },
  {
    code: 'BC 410',
    title: 'Pastoral Ministry & Leadership',
    duration: '12 weeks',
    credits: '4 credits',
    level: 'Degree',
    excerpt:
      'Equipping servant-leaders for shepherding, preaching, and leading the local church.',
    icon: Users,
  },
  {
    code: 'BC 520',
    title: 'Cross-Cultural Missions',
    duration: '10 weeks',
    credits: '3 credits',
    level: 'Degree',
    excerpt:
      'The theology and practice of carrying the Gospel across cultures and contexts.',
    icon: GraduationCap,
  },
  {
    code: 'BC 601',
    title: 'Biblical Greek & Hebrew Survey',
    duration: '16 weeks',
    credits: '4 credits',
    level: 'Advanced',
    excerpt:
      'An introduction to the original languages of Scripture for deeper study and exposition.',
    icon: Library,
  },
];

const admissions = [
  {
    step: '01',
    title: 'Submit your application',
    body: 'Complete the online application form and share your testimony of faith in Christ.',
  },
  {
    step: '02',
    title: 'Provide references',
    body: 'Submit a pastoral reference and one personal reference affirming your character and calling.',
  },
  {
    step: '03',
    title: 'Interview with faculty',
    body: 'Meet with our admissions team to discern your fit and readiness for the program.',
  },
  {
    step: '04',
    title: 'Enroll & begin',
    body: 'Receive your acceptance, register for courses, and join the incoming cohort.',
  },
];

const requirements = [
  'A personal confession of faith in Jesus Christ',
  'Active membership in a local church for at least one year',
  'A sense of calling to ministry or deeper service',
  'A high school diploma or equivalent (for degree programs)',
];

const faculty = [
  {
    name: 'Dr. Samuel Obadiah',
    role: 'Founder &amp; President',
    field: 'Pastoral Theology',
    src: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. Grace Obadiah',
    role: 'Dean of Students',
    field: 'Spiritual Formation',
    src: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Prof. Daniel Okoro',
    role: 'Professor of Biblical Studies',
    field: 'Hermeneutics &amp; Languages',
    src: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Mrs. Esther Adeyemi',
    role: 'Lecturer in Missions',
    field: 'Cross-Cultural Studies',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const facilities = [
  { icon: Library, title: 'Theological Library', body: 'Over 12,000 volumes, journals, and digital resources for deep study.' },
  { icon: Church, title: 'Prayer Hall', body: 'A dedicated sanctuary open daily for personal and corporate prayer.' },
  { icon: Users, title: 'Lecture Halls', body: 'Modern classrooms designed for interactive, discussion-based learning.' },
  { icon: Coffee, title: 'Student Commons', body: 'Warm spaces to fellowship, study, and rest between classes.' },
  { icon: Wifi, title: 'Digital Learning', body: 'Hybrid course options and an online portal for remote students.' },
  { icon: Award, title: 'Chapel &amp; Auditorium', body: 'A 400-seat hall for chapel services, conferences, and graduations.' },
];

export default function BibleCollegePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="AVOJ Bible College"
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Bible College', href: '/bible-college' }]}
        title="Equipping servants for a lifetime of ministry"
        description="A Word-centered, Spirit-led college forming leaders for the Church and the nations through rigorous study, fervent prayer, and hands-on ministry."
      />

      {/* Courses */}
      <section id="courses" className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <SectionHeading
              eyebrow="Academic Programs"
              title="Courses designed to form and equip"
              description="From foundational certificates to advanced degrees, our curriculum grounds students in Scripture and prepares them for real ministry."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.code} animation="fade-up" delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="absolute right-6 top-6 rounded-full bg-brand-50 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-brand-700">
                    {c.level}
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-600">
                    {c.code}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand-500" />
                      {c.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-brand-500" />
                      {c.credits}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal animation="slide-in-left" className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="Admissions"
                title="Begin your journey with us"
                description="Our admissions process is designed to discern calling and readiness, not to overwhelm. Here is what to expect."
              />
              <div className="mt-8 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  Entry requirements
                </h3>
                <ul className="mt-4 space-y-3">
                  {requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {r}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-6 w-full gap-2 rounded-full shadow-glow">
                  <Link href="/contact">
                    Request an application pack
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={120}>
              <ol className="relative space-y-6">
                {admissions.map((s) => (
                  <li key={s.step}>
                    <div className="group flex gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 font-display text-lg font-bold text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-slate-900">
                          {s.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-600">{s.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-600/10 p-5 text-sm text-brand-800">
                <CalendarDays className="h-5 w-5 shrink-0 text-brand-600" />
                <p>
                  Applications for the Fall cohort close{' '}
                  <span className="font-semibold">July 31</span>. Late applications are considered
                  on a rolling basis.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <SectionHeading
              eyebrow="Faculty"
              title="Learn from seasoned servants"
              description="Our faculty are pastors, scholars, and missionaries who teach from a life of faithful ministry."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f, i) => (
              <Reveal key={f.name} animation="fade-up" delay={i * 100}>
                <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={f.src}
                      alt={f.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
                    <span className="absolute inset-x-3 bottom-3 rounded-xl bg-white/90 px-3 py-1.5 text-center text-xs font-semibold text-brand-700 backdrop-blur-sm">
                      {f.field}
                    </span>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-semibold text-slate-900">{f.name}</h3>
                    <p
                      className="mt-1 text-sm text-slate-500"
                      dangerouslySetInnerHTML={{ __html: f.role }}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="relative bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <SectionHeading
              eyebrow="Campus &amp; Facilities"
              title="A home for study and formation"
              description="Our Grace Avenue campus is designed to nurture both the mind and the spirit."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} animation="fade-up" delay={i * 90}>
                <article className="group flex h-full items-start gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3
                      className="font-display text-lg font-semibold text-slate-900"
                      dangerouslySetInnerHTML={{ __html: f.title }}
                    />
                    <p className="mt-1.5 text-sm text-slate-600">{f.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Portal CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-slate-900 py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <Reveal animation="slide-in-left" className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Already enrolled? Access the Student Portal
            </h2>
            <p className="mt-3 text-brand-100/85">
              View your courses, submit assignments, check grades, and connect with faculty and
              fellow students.
            </p>
          </Reveal>
          <Reveal animation="slide-in-right" delay={120}>
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-white px-8 text-brand-700 shadow-glow hover:bg-brand-50"
            >
              <Link href="/contact">
                <LogIn className="h-5 w-5" />
                Student Portal
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
