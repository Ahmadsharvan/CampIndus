import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type FAQAccordionProps = {
  items: { question: string; answer: string }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-borderSoft bg-white shadow-soft">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="text-base font-semibold text-navy">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-textMuted transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-6 text-textMuted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
