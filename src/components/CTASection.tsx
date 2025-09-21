import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Github, 
  BookOpen, 
  Rocket,
  Star
} from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                Ready to Build Faster?
              </Badge>
              <h2 className="text-3xl lg:text-4xl">
                Transform Your Freelance Workflow Today
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Stop rebuilding the same features over and over. Start delivering 
                exceptional projects faster with Freyact's automated builder system.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Rocket className="w-4 h-4" />
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Open Source</span>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Free and open for the community
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">Documentation</span>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Comprehensive guides and examples
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Rocket className="w-4 h-4" />
                  <span className="text-sm font-medium">Active Development</span>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Constantly improving and evolving
                </p>
              </div>
            </div>
          </CardContent>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/5 rounded-full translate-y-12 -translate-x-12" />
        </Card>
      </div>
    </section>
  );
}