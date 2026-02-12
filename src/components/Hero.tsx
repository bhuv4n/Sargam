import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Globe, Wrench } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Serving businesses across Edmonton
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Your Local
            <span className="text-gradient"> Tech Partner</span>
            <br />
            for Every Need
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From network setup to device repairs, we deliver professional 
            technical solutions that keep your business running smoothly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline">
              View Services
            </Button>
          </div>

          {/* Floating Icons */}
          <div className="mt-16 flex justify-center gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center gap-2 animate-float">
              <div className="p-4 glass-card rounded-2xl">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Networking</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="p-4 glass-card rounded-2xl">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Web Design</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
              <div className="p-4 glass-card rounded-2xl">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Repairs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
