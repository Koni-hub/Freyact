import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Store, 
  Puzzle, 
  Zap,
  Users,
  ArrowRight
} from "lucide-react";

export function FutureVisionSection() {
  const visionItems = [
    {
      icon: <Store className="w-6 h-6" />,
      title: "Template Marketplace",
      description: "A curated marketplace of templates for common freelance needs like booking systems, inventory management, and content libraries.",
      status: "Planned"
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Plugin Ecosystem",
      description: "Extensible plugin system for third-party integrations including payments, notifications, and external APIs.",
      status: "In Development"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "SaaS Platform",
      description: "Transform Freyact into a SaaS solution that empowers other freelancers and small dev teams to build faster.",
      status: "Future"
    }
  ];

  return (
    <section id="vision" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Future Vision
              </Badge>
              <h2 className="text-3xl lg:text-4xl">
                Beyond Personal Use
              </h2>
              <p className="text-xl text-muted-foreground">
                While Freyact starts as your personal builder system, the vision extends 
                to empowering the entire freelance developer community.
              </p>
            </div>

            <div className="space-y-6">
              {visionItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {item.icon}
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                      <Badge 
                        variant={item.status === "In Development" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button className="gap-2">
                <Users className="w-4 h-4" />
                Join the Community
              </Button>
              <Button variant="outline" className="gap-2">
                Contribute Ideas
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="space-y-6 p-0">
                <div className="text-center">
                  <h3 className="text-xl mb-2">
                    Current Focus: You
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Right now, Freyact is designed specifically for your freelance workflow. 
                    Every feature is built to solve your real-world problems.
                  </p>
                </div>

                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NTc2NDI0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Software development"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Faster project delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Consistent code quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>Scalable architecture</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}