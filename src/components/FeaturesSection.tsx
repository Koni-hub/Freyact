import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Shield, 
  Database, 
  BarChart3, 
  Layers, 
  Settings, 
  Zap 
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentication & Role Management",
      description: "Secure login system with admin/staff/client roles built-in. No more writing auth from scratch.",
      badge: "Security First"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "CRUD Generator",
      description: "Automatically generate forms, tables, and API endpoints based on simple configuration files.",
      badge: "Auto-Generated"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboard with Stats & Charts",
      description: "Beautiful data visualization and analytics dashboards to impress your clients.",
      badge: "Client-Ready"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modular React Components",
      description: "Reusable UI components that maintain consistency across all your freelance projects.",
      badge: "Reusable"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Entity Configuration File",
      description: "Define your data models and relationships declaratively using JSON/YAML configuration.",
      badge: "Config-Driven"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API Layer with Type Safety",
      description: "Backend routes and Prisma ORM models generated from config with full TypeScript support.",
      badge: "Type-Safe"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            MVP Core Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl">
            Everything You Need to Build Fast
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six powerful features that handle the most common freelance project requirements, 
            so you can focus on the unique aspects of each client's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBjaGFydHN8ZW58MXx8fHwxNzU3NTkzMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dashboard analytics"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="text-primary-foreground p-12 max-w-lg">
              <h3 className="text-2xl mb-4">
                See It In Action
              </h3>
              <p className="text-primary-foreground/90">
                Generate beautiful dashboards and analytics views that your clients will love, 
                all from a simple configuration file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}