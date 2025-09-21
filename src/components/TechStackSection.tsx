import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function TechStackSection() {
  const techStack = [
    {
      category: "Frontend",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300"
    },
    {
      category: "Backend",
      technologies: ["Next.js API", "Prisma ORM", "PostgreSQL"],
      color: "bg-green-500/10 text-green-700 dark:text-green-300"
    },
    {
      category: "State & Validation",
      technologies: ["React Query", "Context API", "Zod"],
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300"
    },
    {
      category: "Architecture",
      technologies: ["TurboRepo", "Monorepo", "Modular Packages"],
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Modern Tech Stack
          </Badge>
          <h2 className="text-3xl lg:text-4xl">
            Built with Industry Standards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging the best tools and technologies to ensure your projects are 
            scalable, maintainable, and future-proof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${stack.color.split(' ')[0]}`} />
                  <h3 className="font-medium">{stack.category}</h3>
                </div>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className={`${stack.color} border-0 mr-2 mb-2`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8">
            <CardContent className="space-y-4 p-0">
              <h3 className="text-xl">
                Monorepo Architecture
              </h3>
              <p className="text-muted-foreground">
                Organized with TurboRepo for maximum efficiency. Separate packages for UI components, 
                database models, authentication logic, and utilities mean you can pick and choose 
                modules for each freelance project.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {["@/ui", "@/auth", "@/db", "@/utils", "@/templates"].map((pkg, index) => (
                  <Badge key={index} variant="outline" className="font-mono text-xs">
                    {pkg}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}