import Link from 'next/link';
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUpRight,
  Heart,
} from 'lucide-react';

const footerLinks = {
  ministry: [
    { name: 'About Us', href: '/about' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Bible College', href: '/bible-college' },
    { name: 'Contact Us', href: '/contact' },
  ],
  college: [
    { name: 'Courses', href: '/bible-college#courses' },
    { name: 'Admissions', href: '/bible-college#admissions' },
    { name: 'Faculty', href: '/bible-college#faculty' },
    { name: 'Facilities', href: '/bible-college#facilities' },
  ],
  ministries: [
    { name: 'Evangelism', href: '/ministries#evangelism' },
    { name: 'Prayer Ministry', href: '/ministries#prayer' },
    { name: 'Youth Ministry', href: '/ministries#youth' },
    { name: 'Children\u2019s Ministry', href: '/ministries#children' },
    { name: 'Missions', href: '/ministries#missions' },
  ],
};

const socials = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">AVOJ</span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand-300">
                  Ministries
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Equipping believers, transforming lives, and advancing the Gospel of Jesus Christ
              through biblically grounded education and Spirit-led ministry.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-brand-400/50 hover:bg-brand-500/20 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Ministry
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.ministry.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-4" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Bible College
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.college.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-4" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-slate-400">
                 NO 1, 5th Street,<br />
  Kalam Nagar,<br />
  Uthiramerur,<br />
  Kanchipuram District,<br />
  Tamil Nadu - 603406,<br />
  India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href="tel:+18005550199" className="text-slate-400 transition-colors hover:text-white">
                  <p>
  Phone: +91 7299906126
</p>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href="mailto:hello@avojministries.org"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <p>
  Email: jyesm126@gmail.com
</p>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-1 font-medium text-brand-300 transition-colors hover:text-white"
                >
                  Send us a message
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} AVOJ Ministries &amp; AVOJ Bible College. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-brand-500 text-brand-500" /> for the Gospel
          </p>
        </div>
      </div>
    </footer>
  );
}
