import { FileText, Lightbulb, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Step 1: Data Integration",
    description:
      "ScholarSight securely integrates with your existing student information systems (SIS) to gather relevant data points like attendance, grades, and assessment scores.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Step 2: AI Analysis & Prediction",
    description:
      "Our advanced AI models analyze the data to predict future academic performance and identify key factors influencing each student's trajectory.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Step 3: Actionable Insights",
    description:
      "The platform generates personalized study plans, performance explanations, and role-based dashboards, empowering educators and students with clear, actionable guidance.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How ScholarSight Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple yet powerful three-step process to unlock predictive
            insights and drive student success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dotted line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px">
             <svg width="100%" height="2" className="overflow-visible">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10">
              <Card className="text-center bg-card hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    {step.icon}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
