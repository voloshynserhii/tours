import { Button } from './Button';

export function FinalCta() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Ready to Ride?</h2>
      <p className="mb-8">
        Get in touch to plan your trip or find the right experience for you.
      </p>
      <Button link="/contact" >Enquire Now</Button>
    </div>
  );
}
