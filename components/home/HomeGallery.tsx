import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const gallery = [
  {
    src: 'https://images.pexels.com/photos/9852746/pexels-photo-9852746.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Congregation in worship',
    label: 'Sunday Worship',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/6962964/pexels-photo-6962964.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bible study group',
    label: 'Bible Study',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/9852764/pexels-photo-9852764.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Youth gathering',
    label: 'Youth Night',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/8090118/pexels-photo-8090118.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Worship team leading music',
    label: 'Praise &amp; Worship',
    span: 'lg:col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/6963002/pexels-photo-6963002.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Baptism celebration',
    label: 'Baptism Service',
    span: '',
  },
];

export function HomeGallery() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal animation="fade-up">
          <SectionHeading
            eyebrow="Life at AVOJ"
            title="A glimpse of our community"
            description="Moments of worship, learning, and fellowship captured across our ministries and campus."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              animation="scale-in"
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span
                  className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm ring-1 ring-inset ring-white/25"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="fade-up" delay={200} className="mt-12 text-center">
          <Link
            href="/ministries"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition-all hover:border-brand-400 hover:bg-brand-50"
          >
            Explore our ministries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
