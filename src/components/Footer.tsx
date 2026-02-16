import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-4 mb-6">
              <img src={logo} alt="Shree Bajrang" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-heading text-xl font-bold">Shree Bajrang</h3>
                <p className="text-sm text-secondary-foreground/70">Acrylic Bangles Pipe</p>
              </div>
            </a>
            <p className="text-secondary-foreground/70 max-w-md mb-6">
              Premium manufacturer of high-quality acrylic bangles pipes. 
              Trusted by manufacturers across India for our commitment to 
              quality, precision, and timely delivery.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gold">◆</span>
              <span className="text-sm text-secondary-foreground/70">Quality • Trust • Excellence</span>
              <span className="text-gold">◆</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-secondary-foreground/70">
              <p>Balaji Estate, Manda Dungar</p>
              <p>Rajkot, Gujarat</p>
              <p className="pt-2">
                <a href="tel:+918690599990" className="hover:text-gold transition-colors">
                  +91 86905 99990
                </a>
              </p>
              <p>
                <a href="mailto:ShreeBajrangPipe@Gmail.com" className="hover:text-gold transition-colors">
                  ShreeBajrangPipe@Gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} Shree Bajrang Acrylic Bangles Pipe. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-gold">♦</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
