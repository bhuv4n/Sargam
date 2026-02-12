import { CheckCircle, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick turnaround times and responsive support when you need it most.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "A team that understands Canadian businesses and their unique needs.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We stand behind our work with satisfaction guarantees on all services.",
  },
  {
    icon: CheckCircle,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality or service.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Choose Sargam
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Trusted
              <span className="text-gradient"> Technology </span>
              Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With years of experience serving Canadian businesses and 
              homeowners, we've built a reputation for reliable, professional 
              technical services that deliver results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">5★</div>
                <div className="text-sm text-muted-foreground">Rated</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-right">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 glass-card rounded-xl hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
