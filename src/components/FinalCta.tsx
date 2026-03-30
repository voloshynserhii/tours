import { Button } from './Button';

export function FinalCta({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      <p className="mb-8">
        {subtitle}
      </p>
      <Button>Enquire Now</Button>
    </div>
  );
}
