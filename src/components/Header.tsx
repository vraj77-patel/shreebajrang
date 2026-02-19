import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import headerLogo from "@/assets/header-logo.webp";

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Products", href: "#products" },
{ name: "Catalog", href: "/catalog", isRoute: true },
{ name: "Gallery", href: "#gallery" },
{ name: "Why Us", href: "#why-us" },
{ name: "Contact", href: "#contact" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const renderNavLink = (link: typeof navLinks[0], isMobile = false) => {
    const baseClass = isMobile ?
    "text-base font-medium text-foreground hover:text-primary transition-colors py-2" :
    "text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group";

    if (link.isRoute) {
      return (
        <Link
          key={link.name}
          to={link.href}
          onClick={() => setIsOpen(false)}
          className={baseClass}>

          {link.name}
          {!isMobile &&
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
          }
        </Link>);

    }

    // For hash links, handle navigation based on current route
    const handleClick = () => {
      setIsOpen(false);
      if (location.pathname !== "/") {
        window.location.href = "/" + link.href;
      }
    };

    return (
      <a
        key={link.name}
        href={location.pathname === "/" ? link.href : "/" + link.href}
        onClick={handleClick}
        className={baseClass}>

        {link.name}
        {!isMobile &&
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
        }
      </a>);

  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img alt="Shree Bajrang Acrylic Bangles Pipe" className="h-14 w-14 object-contain" src={headerLogo} width={56} height={56} loading="eager" decoding="async" fetchPriority="high" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-semibold text-foreground leading-tight">
                Shree Bajrang
              </h1>
              <p className="text-xs text-muted-foreground tracking-wider">
                Acrylic Bangles Pipe
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => renderNavLink(link))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href={location.pathname === "/" ? "#contact" : "/#contact"}>
                <Phone className="w-4 h-4" />
                Get Quote
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">

            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-b border-border overflow-hidden">

            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => renderNavLink(link, true))}
              <Button variant="gold" size="lg" className="mt-2" asChild>
                <a href={location.pathname === "/" ? "#contact" : "/#contact"} onClick={() => setIsOpen(false)}>
                  <Phone className="w-4 h-4" />
                  Get Quote
                </a>
              </Button>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};

export default Header;