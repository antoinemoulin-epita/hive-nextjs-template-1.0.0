import Link from 'next/link';

import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)}>
      {/* Cran notch mark — precision/mechanical reference */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer ring */}
        <circle
          cx="14"
          cy="14"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Inner precision circle */}
        <circle
          cx="14"
          cy="14"
          r="4"
          fill="currentColor"
        />
        {/* Notch marks — crans de réglage */}
        <line x1="14" y1="0" x2="14" y2="5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="23" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="0" y1="14" x2="5" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="23" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" />
        {/* Diagonal notches */}
        <line x1="4.1" y1="4.1" x2="7.6" y2="7.6" stroke="currentColor" strokeWidth="1" />
        <line x1="20.4" y1="20.4" x2="23.9" y2="23.9" stroke="currentColor" strokeWidth="1" />
        <line x1="23.9" y1="4.1" x2="20.4" y2="7.6" stroke="currentColor" strokeWidth="1" />
        <line x1="4.1" y1="23.9" x2="7.6" y2="20.4" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">
        Studio Cran
      </span>
    </Link>
  );
};

export default Logo;
