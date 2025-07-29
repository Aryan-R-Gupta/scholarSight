import {
  Users,
  BarChart,
  Target,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SparklesIcon } from "../ui/icons";

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Role-Based Views",
    description:
      "Tailored dashboards for Administrators, Teachers, and Students, ensuring everyone sees the data that matters most to them.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI Performance Prediction",
    description:
      "Leverage AI to predict pass/fail outcomes, allowing for proactive student support and early intervention.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Performance Visualization",
    description:
      "Interactive charts and graphs provide a clear visual overview of student performance trends over time.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Personalized Recommendations",
    description:
      "AI-generated study plans and focus areas help students understand where to direct their efforts for maximum impact.",
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-primary" />,
    title: "Interpretability Analysis",
    description:
      "Go beyond predictions with generative AI explanations that offer insights into the 'why' behind student performance.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure & Scalable",
    description:
      "Built with enterprise-grade security and ready to scale with your institution's needs.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Powerful Features for Educational Excellence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ScholarSight provides a comprehensive suite of tools designed to
            empower educators, engage students, and improve academic outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="bg-card hover:shadow-lg transition-shadow border-border/60"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
