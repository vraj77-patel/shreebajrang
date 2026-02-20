import { Award, Factory, Users, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/logo.png";

const HeroSection = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero pt-20 overflow-hidden">
      {/* Background Pattern - pure CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="hsl(var(--gold))" className="animate-hero-pulse" />
              <path
                d="M0 40 L80 40 M40 0 L40 80"
                stroke="hsl(var(--gold))"
                strokeWidth="0.5"
                className="animate-hero-path-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>

        {/* Concentric rings - CSS rotation */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.06]"
          viewBox="0 0 800 800">
          {[150, 250, 350].map((r, i) =>
            <circle
              key={r}
              cx="400" cy="400" r={r}
              fill="none"
              stroke="hsl(var(--gold))"
              strokeWidth="0.8"
              strokeDasharray="10 6"
              className={i % 2 === 0 ? "animate-hero-spin-slow" : "animate-hero-spin-slow-reverse"}
              style={{ transformOrigin: "400px 400px" }} />
          )}
        </svg>
      </div>

      {/* Glowing Orbs - CSS only */}
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px] animate-hero-glow" />
      <div
        className="absolute bottom-1/4 left-[15%] w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-hero-glow-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 mb-8 animate-hero-fade-in">
            <div className="animate-hero-spin-icon">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <span className="text-sm font-medium text-gold">Premium Quality Manufacturer</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-hero-fade-in-up">
            <span className="inline-block">Shree Bajrang </span>
            <span className="text-gradient-gold inline-block">Acrylic Bangles Pipe</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-hero-fade-in-up-delayed">
            Leading manufacturer of premium quality acrylic bangles pipes. Delivering excellence,
            precision, and trust since inception.
          </p>

          {/* Contact Us CTA */}
          <div className="mb-12 animate-hero-fade-in-up-delayed-2">
            <Button variant="gold" size="xl" asChild className="text-lg px-10 py-6 shadow-gold hover:scale-105 active:scale-[0.97] transition-transform">
              <a href="#contact" onClick={handleContactClick}>
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Logo with orbiting circles */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-14 animate-hero-fade-in">
            {/* Outer rotating ring */}
            <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-gold/40 animate-hero-spin-slow" />

            {/* Inner rotating ring (opposite) */}
            <div className="absolute inset-[-8px] rounded-full border border-gold/25 animate-hero-spin-slow-reverse" />

            {/* Pulsing glow behind logo */}
            <div className="absolute inset-4 rounded-full bg-gold/10 blur-xl animate-hero-glow" />

            {/* Logo */}
            <img
              alt="Shree Bajrang Acrylic Bangles Pipe"
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl animate-hero-float"
              src={heroProduct}
              width={224}
              height={224}
              loading="eager"
              decoding="async"
              fetchPriority="high" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { icon: Factory, value: "5+", label: "Years Experience" },
              { icon: Users, value: "50+", label: "Happy Clients" },
              { icon: Award, value: "100%", label: "Quality Assured" }
            ].map((stat, index) =>
              <div
                key={stat.label}
                className="text-center animate-hero-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}>
                <stat.icon className="w-7 h-7 text-gold mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
