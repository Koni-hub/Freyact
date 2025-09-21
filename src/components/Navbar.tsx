import { useState } from "react";
import { Menu, Code2, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Badge } from "./ui/badge";

const navigationLinks = [
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Vision", href: "#vision" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code2 className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-none">
                  Freyact
                </span>
                <Badge variant="secondary" className="text-xs mt-0.5 w-fit">
                  BETA
                </Badge>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="sm" className="text-sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button size="sm" className="text-sm">
              Get Started
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full p-0 [&>button]:top-4 [&>button]:right-4"
              >
                <div className="flex flex-col h-full">
                  <SheetHeader className="text-center p-6 border-b relative">
                    <SheetTitle className="flex items-center justify-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Code2 className="h-4 w-4" />
                      </div>
                      <span>Freyact</span>
                      <Badge variant="secondary" className="text-xs">
                        BETA
                      </Badge>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-8 flex flex-col items-center max-w-sm mx-auto">
                      {/* Navigation Links */}
                      <div className="w-full space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground mb-6 text-center">
                          Navigation
                        </h3>
                        <div className="space-y-2">
                          {navigationLinks.map((link) => (
                            <button
                              key={link.name}
                              onClick={() => scrollToSection(link.href)}
                              className="flex w-full items-center justify-center rounded-md px-6 py-4 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {link.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="w-full space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground mb-6 text-center">
                          Actions
                        </h3>
                        <div className="space-y-3">
                          <Button
                            variant="ghost"
                            className="w-full justify-center h-12"
                            size="default"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                          </Button>
                          <Button
                            className="w-full justify-center h-12"
                            size="default"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Get Started
                          </Button>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="w-full">
                        <div className="rounded-lg bg-muted p-4 text-center">
                          <p className="text-sm text-muted-foreground">
                            Freyact is a personal builder system for automating
                            freelance development tasks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
