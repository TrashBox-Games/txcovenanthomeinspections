import { ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { CHAMPIONS_SCHOOL } from "@/lib/constants";

export function ChampionsCareerCard() {
  return (
    <aside
      aria-label="Champions School career opportunity"
      className="glass-card space-y-6 rounded-xl p-6"
    >
      <div className="inline-flex rounded-lg bg-gold/15 p-2">
        <GraduationCap className="h-8 w-8 text-gold" aria-hidden />
      </div>
      <h2 className="font-headline text-xl font-semibold text-primary md:text-2xl">
        Interested in a career in realty or home inspections?
      </h2>
      <p className="text-sm leading-6 text-on-surface-variant md:text-base">
        Join the Champions family.
      </p>
      <Button
        href={CHAMPIONS_SCHOOL.href}
        target="_blank"
        rel="noopener noreferrer"
        variant="gold"
        size="lg"
        className="w-full"
      >
        {CHAMPIONS_SCHOOL.label}
        <ExternalLink className="h-4 w-4" aria-hidden />
      </Button>
    </aside>
  );
}
