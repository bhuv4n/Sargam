import sargamLogo from "@/assets/sargam-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: ["Networking", "Web Design", "Device Repair", "IT Support"],
    company: ["About Us", "Careers", "Blog", "Contact"],
    legal: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={sargamLogo} alt="Sargam" className="h-8 w-auto rounded-sm" />
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Your trusted local technology partner in Edmonton. Professional 
              services for all your technical needs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sargam Solutions. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ in Canada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
