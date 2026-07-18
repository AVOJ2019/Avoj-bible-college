import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Megaphone,
  HandHeart,
  Flame,
  Baby,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Quote,
} from 'lucide-react';

const ministries = [
  {
    id: 'evangelism',
    icon: Megaphone,
    name: 'Evangelism',
    tagline: 'Sharing the Gospel boldly',
    excerpt:
      'We take the Good News to streets, campuses, and homes, trusting the Spirit to awaken hearts to the love of Christ.',
    body: 'Our evangelism teams are trained in both the message and the manner of the Gospel: clear, compassionate, and courageous. Through open-air outreach, personal witnessing, and citywide campaigns, we labor to see lives turned to Jesus.',
    points: ['Weekly street &amp; campus outreach', 'Annual citywide Gospel campaigns', 'Personal witnessing training', 'Follow-up &amp; discipleship pathway'],
    image: 'https://images.pexels.com/photos/9852764/pexels-photo-9852764.jpeg?auto=compress&cs=tinysrgb&w=1100',
    verse: { text: 'Go into all the world and preach the gospel to all creation.', ref: 'Mark 16:15' },
    reversed: false,
  },
  {
    id: 'prayer',
    icon: HandHeart,
    name: 'Prayer Ministry',
    tagline: 'Seeking His face together',
    excerpt:
      'Prayer is the engine of every ministry at AVOJ. We gather persistently to intercede for the Church and the nations.',
    body: 'Our prayer ministry hosts nightly intercession, monthly all-night watches, and a 24/7 prayer chain. We believe nothing of eternal significance happens apart from dependence on God in fervent, believing prayer.',
    points: ['Daily morning intercession', 'Monthly all-night prayer watch', '24/7 prayer chain &amp; alerts', 'Healing &amp; deliverance prayer'],
    image: 'https://images.pexels.com/photos/6957165/pexels-photo-6957165.jpeg?auto=compress&cs=tinysrgb&w=1100',
    verse: { text: 'Devote yourselves to prayer, being watchful and thankful.', ref: 'Colossians 4:2' },
    reversed: true,
  },
  {
    id: 'youth',
    icon: Flame,
    name: 'Youth Ministry',
    tagline: 'Raising a generation on fire',
    excerpt:
      'We disciple young people to know Christ deeply, live boldly, and lead courageously in their schools and spheres.',
    body: 'AVOJ Youth meets weekly for worship, the Word, and fellowship, with small groups that foster real accountability. Through retreats, service projects, and mentorship, we are raising a generation grounded in truth and ablaze for Jesus.',
    points: ['Weekly youth gatherings', 'Small-group discipleship', 'Annual youth retreat', 'Mentorship &amp; leadership track'],
    image: 'https://images.pexels.com/photos/9852746/pexels-photo-9852746.jpeg?auto=compress&cs=tinysrgb&w=1100',
    verse: { text: 'Don\u2019t let anyone look down on you because you are young.', ref: '1 Timothy 4:12' },
    reversed: false,
  },
  {
    id: 'children',
    icon: Baby,
    name: "Children's Ministry",
    tagline: 'Rooting little hearts in the Word',
    excerpt:
      'We plant the truths of Scripture into young hearts through engaging, Christ-centered teaching and care.',
    body: 'Our children\u2019s ministry provides a safe, joyful environment where kids encounter Jesus through songs, stories, crafts, and play. Every volunteer is trained and screened, and every lesson is anchored in the Gospel.',
    points: ['Sunday kids\u2019 church', 'Vacation Bible School', 'Trained &amp; screened volunteers', 'Family discipleship resources'],
    image: 'https://images.pexels.com/photos/8469326/pexels-photo-8469326.jpeg?auto=compress&cs=tinysrgb&w=1100',
    verse: { text: 'Let the little children come to me, and do not hinder them.', ref: 'Luke 18:16' },
    reversed: true,
  },
  {
    id: 'missions',
    icon: Globe2,
    name: 'Missions',
    tagline: 'Sending labourers to the nations',
    excerpt:
      'We partner with churches and workers across borders to plant communities of faith among the unreached.',
    body: 'AVOJ Missions identifies, trains, and sends labourers to the least-reached places, while partnering with indigenous churches for lasting fruit. We support long-term workers, short-term teams, and mercy ministries that open doors for the Gospel.',
    points: ['Field worker support &amp; care', 'Short-term mission trips', 'Church-planting partnerships', 'Community mercy projects'],
    image: 'https://images.pexels.com/photos/6962964/pexels-photo-6962964.jpeg?auto=compress&cs=tinysrgb&w=1100',
    verse: { text: 'Ask the Lord of the harvest to send out workers into his harvest field.', ref: 'Matthew 9:38' },
    reversed: false,
  },
];

export default function MinistriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Ministries"
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Ministries', href: '/ministries' }]}
        title="Serving the Church, the city, and the nations"
        description="Every ministry at AVOJ flows from one calling: to make Christ known and to make disciples who make disciples."
      />

      {/* Quick nav cards */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ministries.map((m, i) => (
              <Reveal key={m.id} animation="fade-up" delay={i * 80}>
                <a
                  href={`#${m.id}`}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-semibold text-slate-900">
                    {m.name}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry sections */}
      <div className="bg-slate-50">
        {ministries.map((m, idx) => (
          <section
            key={m.id}
            id={m.id}
            className={`relative scroll-mt-20 overflow-hidden py-20 lg:py-28 ${idx % 2 === 1 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${m.reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <Reveal animation={m.reversed ? 'slide-in-right' : 'slide-in-left'} className="relative">
                  <div className="relative">
                    <div
                      className={`absolute -inset-5 rounded-[2rem] bg-gradient-to-tr ${idx % 2 === 0 ? 'from-brand-500/20 to-accent/15' : 'from-accent/15 to-brand-500/20'} blur-2xl`}
                      aria-hidden
                    />
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white shadow-glow">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-[26rem] w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                      <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-slate-950/60 px-5 py-3 backdrop-blur-md">
                        <p className="flex items-center gap-2 text-sm font-semibold text-white">
                          <m.icon className="h-4 w-4 text-gold-400" />
                          {m.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal animation={m.reversed ? 'slide-in-left' : 'slide-in-right'} delay={150}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 ring-1 ring-inset ring-brand-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {m.tagline}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                    {m.name}
                  </h2>
                  <p className="mt-4 text-lg text-slate-600">{m.excerpt}</p>
                  <p className="mt-4 text-slate-600">{m.body}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span dangerouslySetInnerHTML={{ __html: p }} />
                      </li>
                    ))}
                  </ul>

                  <blockquote className="mt-7 flex gap-3 rounded-2xl border-l-4 border-brand-500 bg-white p-4 shadow-soft">
                    <Quote className="h-5 w-5 shrink-0 text-brand-400" />
                    <div>
                      <p className="font-display text-base italic text-slate-900">&ldquo;{m.verse.text}&rdquo;</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                        {m.verse.ref}
                      </p>
                    </div>
                  </blockquote>

                  <Button asChild size="lg" className="mt-8 gap-2 rounded-full shadow-glow">
                    <Link href="/contact">
                      Get involved
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection />
    </PageShell>
  );
}
