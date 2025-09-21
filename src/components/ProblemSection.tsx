import { Card, CardContent } from "./ui/card";
import { Clock, RotateCcw, TrendingDown } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Repetitive Setup",
      description: "Setting up authentication, CRUD operations, and dashboards from scratch for every project"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Wasted",
      description: "Hours spent on boilerplate code instead of solving unique client problems"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Inconsistent Quality",
      description: "Quality varies between projects due to rushing through common features"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            The Freelancer's Dilemma
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every freelance project shares common patterns, yet we rebuild the same 
            features over and over. This wastes time and slows down delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                  {problem.icon}
                </div>
                <h3>{problem.title}</h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full">
            <span>Freyact solves this by automating and streamlining these repetitive tasks</span>
          </div>
        </div>
      </div>
    </section>
  );
}