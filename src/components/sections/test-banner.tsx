import { FlaskConical } from 'lucide-react';
import Link from 'next/link';

interface TestBannerProps {
  variant: string;
  name: string;
}

export const TestBanner = ({ variant, name }: TestBannerProps) => {
  return (
    <div className="bg-primary text-primary-foreground sticky top-0 z-50 border-b border-white/10">
      <div className="container flex items-center justify-between gap-4 py-2 text-xs">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-3.5 w-3.5" />
          <span>
            Variante de test <strong>{variant}</strong> — {name}
          </span>
        </div>
        <Link
          href="/services-test"
          className="underline underline-offset-4 hover:no-underline"
        >
          ← Retour au comparatif
        </Link>
      </div>
    </div>
  );
};
