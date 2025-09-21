import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, FileText, Terminal, Rocket, Puzzle } from "lucide-react";

export function WorkflowSection() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Define Entities",
      description: "Create a simple config file describing your data models and relationships",
      step: "01"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Generate Code",
      description: "Run CLI commands to auto-generate CRUD modules, API routes, and React forms",
      step: "02"
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Customize & Extend",
      description: "Pick and choose modules, customize UI components, and add project-specific features",
      step: "03"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deploy Fast",
      description: "Build standalone apps or embed modules in existing client portals",
      step: "04"
    }
  ];

  return (
    <section id="workflow" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Simple Workflow
          </Badge>
          <h2 className="text-3xl lg:text-4xl">
            From Config to Deployment in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined workflow that takes you from project requirements to a 
            fully functional application faster than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {step.step}
                    </Badge>
                  </div>
                  <h3>{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="text-center space-y-4 p-0">
            <h3 className="text-xl">
              Config-Driven Development
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Define your entities and relationships in a simple JSON or YAML file. 
              Freyact handles the rest - generating type-safe APIs, database schemas, 
              React forms, and admin interfaces automatically.
            </p>
            <div className="bg-muted rounded-lg p-4 text-left max-w-md mx-auto">
              <code className="text-sm font-mono">
                {`{
  "entities": {
    "User": {
      "fields": {
        "name": "string",
        "email": "string",
        "role": "enum"
      }
    }
  }
}`}
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}