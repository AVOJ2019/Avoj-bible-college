import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]',
            light
              ? 'bg-white/10 text-brand-100 ring-1 ring-inset ring-white/20'
              : 'bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200'
          )}
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', light ? 'bg-gold-400' : 'bg-brand-500')} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]',
          light ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            light ? 'text-brand-100/80' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
