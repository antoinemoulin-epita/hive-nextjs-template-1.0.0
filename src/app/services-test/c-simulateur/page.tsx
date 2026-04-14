import type { Metadata } from 'next';

import { Simulator } from './simulator';

export const metadata: Metadata = {
  title: 'Variante C — Simulateur',
  description: 'Test interne : approche simulateur interactif.',
  robots: { index: false, follow: false },
};

export default function VariantC() {
  return <Simulator />;
}
