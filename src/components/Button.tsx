import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function Button({ children, to, variant = 'primary', className = '', icon = false, onClick, type = 'button' }: ButtonProps) {
  const classes = {
    primary: 'bg-electric text-white shadow-soft hover:bg-brightBlue',
    secondary: 'border border-navy/20 bg-white text-navy hover:border-electric hover:text-electric',
    dark: 'bg-navy text-white hover:bg-deepNavy',
  };

  const content = (
    <span className="inline-flex items-center gap-2">
      {children}
      {icon ? <ArrowRight className="h-4 w-4" /> : null}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${classes[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${classes[variant]} ${className}`}>
      {content}
    </button>
  );
}
