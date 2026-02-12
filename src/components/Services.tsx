import { Wifi, Globe, Wrench, Server, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Network Solutions",
    description:
      "Professional network setup, configuration, and optimization for homes and businesses. Wired and wireless solutions.",
  },
  {
    icon: Globe,
    title: "Website Creation",
    description:
      "Custom website design and development that helps your business stand out online. Modern, responsive, and fast.",
  },
  {
    icon: Wrench,
    title: "Device Repairs",
    description:
      "Expert repair services for computers, laptops, phones, and tablets. Quick turnaround and quality parts.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Complete IT infrastructure setup and management. Servers, storage, and cloud solutions for your business.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security solutions. Virus removal, firewalls, and data protection.",
  },
  {
    icon: Headphones,
    title: "Tech Support",
    description:
      "Reliable ongoing technical support when you need it. Remote and on-site assistance available.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your needs. 
            We handle everything so you can focus on what matters most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 glass-card rounded-2xl hover:border-primary/30 transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
