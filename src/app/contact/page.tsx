'use client';

import { Calendar, Mail, Send } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_EMAIL } from '@/lib/constants';

export default function ContactPage() {
  return (
    <section className="hero-padding">
      <div className="container grid gap-16 md:grid-cols-2">
        {/* Left: heading + alternatives */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Parlons de votre projet
            </h1>
            <p className="text-muted-foreground text-lg">
              Décrivez-nous votre besoin en quelques mots. On vous répond sous
              48h avec une première analyse gratuite.
            </p>
          </div>

          {/* Alternatives */}
          <div className="space-y-4">
            <div className="border-border flex items-start gap-4 rounded-lg border p-5">
              <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <Calendar className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold">
                  Réserver un appel de 30 min
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  On échange sur votre projet, sans engagement.
                </p>
                <Button variant="link" asChild className="mt-2 h-auto p-0">
                  <Link
                    href="https://calendly.com/studiocran"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choisir un créneau →
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border-border flex items-start gap-4 rounded-lg border p-5">
              <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <Mail className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold">
                  Écrire directement
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Vous préférez un email ? Pas de problème.
                </p>
                <Button variant="link" asChild className="mt-2 h-auto p-0">
                  <Link href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                type="text"
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.fr"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">
                Entreprise{' '}
                <span className="text-muted-foreground font-normal">
                  (optionnel)
                </span>
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Nom de votre entreprise"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Votre besoin</Label>
              <Textarea
                id="message"
                placeholder="Décrivez en quelques lignes ce que vous cherchez à améliorer ou automatiser..."
                className="min-h-[140px] resize-none"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">
              <Send className="mr-2 h-4 w-4" />
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
