import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, BrainCircuit } from "lucide-react";

export function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/40">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-primary to-accent gradient-text">
              Transforming
            </span>
            <br />
            Student Success with AI.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            ScholarSight provides AI-powered insights to predict academic
            performance, identify at-risk students, and offer personalized
            guidance to help every student succeed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="text-base">
              <Link href="/dashboard">
                Sign In <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <video
            width="600"
            height="400"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl shadow-2xl"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
