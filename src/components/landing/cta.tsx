import Link from "next/link";
import { Button } from "../ui/button";
import { SparklesIcon } from "../ui/icons";

export function Cta() {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container text-center">
        <SparklesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Start Transforming Outcomes Today
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Ready to unlock the potential of every student? Get started with
          ScholarSight and bring predictive analytics to your institution.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
