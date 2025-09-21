import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Zap, Shield, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Personal Builder System
              </Badge>
              <h1 className="text-4xl lg:text-6xl">
                Build Freelance Projects{" "}
                <span className="text-primary">10x Faster</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Automate repetitive CRUD operations, authentication, and dashboards. 
                Deliver consistent quality projects while focusing on what matters.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Zap className="w-4 h-4" />
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-sm">Config-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Secure by Default</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm">Built-in Analytics</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NjIzMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}