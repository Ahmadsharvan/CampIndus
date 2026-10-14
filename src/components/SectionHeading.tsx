type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', className = '', titleClassName = '' }: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">{eyebrow}</div>
      <h2 className={`text-3xl font-extrabold tracking-[-0.04em] text-navy md:text-4xl lg:text-[2.5rem] ${titleClassName}`}>{title}</h2>
      {description ? <p className="mt-4 text-base text-textMuted md:text-lg">{description}</p> : null}
    </div>
  );
}
