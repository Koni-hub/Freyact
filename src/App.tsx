import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TechStackSection } from "./components/TechStackSection";
import { WorkflowSection } from "./components/WorkflowSection";
import { FutureVisionSection } from "./components/FutureVisionSection";
import { CTASection } from "./components/CTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <WorkflowSection />
      <TechStackSection />
      <FutureVisionSection />
      <CTASection />
    </div>
  );
}