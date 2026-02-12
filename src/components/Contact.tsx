import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Edmonton, Alberta, Canada",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "780-267-4371",
    },
    {
      icon: Mail,
      title: "Email",
      value: "sales@sargam.ca",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Sat: 9AM - 6PM",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or need technical assistance? 
            Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 animate-fade-in-left">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project or issue..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-right">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 glass-card rounded-xl"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.title}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="mt-8 p-6 glass-card rounded-2xl text-center">
              <h4 className="font-semibold mb-2">Need Urgent Support?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                For emergency technical issues, give us a call directly.
              </p>
              <Button variant="outline" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
