import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';

const contactCards = [
 {
  icon: MapPin,
  label: 'Visit Us',
  primary: 'No 1, 5th Street, Kalamanagar, Uthiramerur',
  secondary: 'Kanchipuram - 603406, Tamil Nadu',
  href: 'https://maps.google.com/?q=No+1+5th+Street+Kalamanagar+Uthiramerur+Kanchipuram+603406',
},
  {
    icon: Phone,
    label: 'Call Us',
    primary: '+91 7299906126',
    secondary: 'Mon&ndash;Fri, 9am &ndash; 5pm',
   href: 'tel:+917299906126'
  },
  {
    icon: Mail,
    label: 'Email Us',
    primary: 'jyesm126@gmail.com',
    secondary: 'paulabishek100@gmail.com',
    href: 'mailto:jyesm126@gmail.com',
  },
];

const hours = [
  { day: 'Sunday', time: 'Morning 6:00 AM &ndash; 8:00 AM' },
  { day: 'Monday &ndash; Friday', time: 'Fasting Prayer 10:00 AM &ndash; 12:00 PM' },
  { day: 'Every Tuesday', time: 'Gospel Prayer Meeting 6:00 PM &ndash; 8:00 PM (Andhra, Thiruvallur, Chennai, Kanchipuram)' },
  { day: 'Saturday', time: 'Open All Time' },
];

const socials = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/estheryesm?mibextid=rS40aB7S9Ucbxw6v',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/alarming_voice_of_jesus?igsh=aGx2N21kdDZsNm0w',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtu.be/H8mg1GqK708?si=V2GnBnLXsOr0OkLH',
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact Us', href: '/contact' }]}
        title="We would love to hear from you"
        description="Whether you have a question, a prayer request, or a calling to explore, our team is here to walk with you."
      />

      {/* Contact cards */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((c, i) => (
              <Reveal key={c.label} animation="fade-up" delay={i * 100}>
                <a
                  href={c.href}
                  target={c.icon === MapPin ? '_blank' : undefined}
                  rel={c.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="group flex h-full items-start gap-4 rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                      {c.label}
                    </p>
                    <p
                      className="mt-1.5 font-display text-base font-semibold text-slate-900"
                      dangerouslySetInnerHTML={{ __html: c.primary }}
                    />
                    <p
                      className="mt-1 text-sm text-slate-500"
                      dangerouslySetInnerHTML={{ __html: c.secondary }}
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="relative bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <Reveal animation="slide-in-left">
              <SectionHeading
                align="left"
                eyebrow="Send a Message"
                title="Reach out and we will respond"
                description="Fill in the form below and our team will get back to you within two business days. For urgent prayer requests, call our prayer line."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={150} className="space-y-6">
              {/* Hours */}
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow">
                    <Clock className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    Service Hours
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <span
                        className="font-medium text-slate-900"
                        dangerouslySetInnerHTML={{ __html: h.day }}
                      />
                      <span
                        className="text-slate-600"
                        dangerouslySetInnerHTML={{ __html: h.time }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  Follow the ministry
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Stay connected and encouraged throughout the week.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:border-brand-300 hover:bg-brand-600 hover:text-white"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Prayer line highlight */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-slate-900 p-7 text-white shadow-glow">
                <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
                <div className="relative">
                  <h3 className="font-display text-lg font-semibold">24/7 Prayer Line</h3>
                  <p className="mt-1.5 text-sm text-brand-100/85">
                    Need prayer or spiritual support? Our prayer team is always available.
                  </p>
                  <a
                     href="tel:+917299906126"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4" />
                   +91 7299906126
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <SectionHeading
              eyebrow="Find Us"
              title="Our Grace Avenue campus"
              description="Located in the heart of Faith City with easy access and ample parking."
            />
          </Reveal>
          <Reveal animation="scale-in" delay={150} className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
  <iframe
    title="AVOJ Ministries location map"
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3893.2487822354587!2d79.7597547750707!3d12.631677587653313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDM3JzU0LjAiTiA3OcKwNDUnNDQuNCJF!5e0!3m2!1sen!2sin!4v1784531221000!5m2!1sen!2sin"
    className="h-[28rem] w-full"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    style={{ border: 0 }}
    allowFullScreen
  ></iframe>
</div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
