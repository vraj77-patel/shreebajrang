import { motion } from "framer-motion";
import { Award, Factory, Users, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4
}));

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
      {/* Animated SVG Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <motion.circle
                cx="40" cy="40" r="1.5" fill="hsl(var(--gold))"
                animate={{ r: [1.5, 3, 1.5], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

              <motion.path
                d="M0 40 L80 40 M40 0 L40 80"
                stroke="hsl(var(--gold))"
                strokeWidth="0.5"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>

        {/* Animated concentric rings */}
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.06]"
          viewBox="0 0 800 800">

          {[150, 250, 350].map((r, i) =>
          <motion.circle
            key={r}
            cx="400" cy="400" r={r}
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="0.8"
            strokeDasharray="10 6"
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }} />

          )}
        </motion.svg>
      </div>

      {/* Animated Particles */}
      {floatingParticles.map((p) =>
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-gold/20"
        style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, -20, 0],
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.2, 0.5]
        }}
        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }} />

      )}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

      <motion.div
        className="absolute bottom-1/4 left-[15%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} />


      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 mb-8">

            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-gold" />
            </motion.div>
            <span className="text-sm font-medium text-gold">Premium Quality Manufacturer</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}>

            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}>

              Shree Bajrang{" "}
            </motion.span>
            <motion.span
              className="text-gradient-gold inline-block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}>

              Acrylic Bangles Pipe
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}>

            Leading manufacturer of premium quality acrylic bangles pipes. Delivering excellence,
            precision, and trust since inception.
          </motion.p>

          {/* Contact Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 120 }}
            className="mb-12">

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="gold" size="xl" asChild className="text-lg px-10 py-6 shadow-gold">
                <a href="#contact" onClick={handleContactClick}>
                  <Phone className="w-5 h-5" />
                  Contact Us
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Logo with orbiting circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, type: "spring" }}
            className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-14">

            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-[-20px] rounded-full border-2 border-dashed border-gold/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

            {/* Inner rotating ring (opposite) */}
            <motion.div
              className="absolute inset-[-8px] rounded-full border border-gold/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />

            {/* Orbiting dots */}
            {[0, 1, 2, 3].map((i) =>
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gold rounded-full shadow-gold"
              style={{ top: "50%", left: "50%", marginTop: -6, marginLeft: -6 }}
              animate={{
                x: [
                Math.cos(i * Math.PI / 2) * 110,
                Math.cos(i * Math.PI / 2 + Math.PI / 2) * 110,
                Math.cos(i * Math.PI / 2 + Math.PI) * 110,
                Math.cos(i * Math.PI / 2 + 3 * Math.PI / 2) * 110,
                Math.cos(i * Math.PI / 2 + 2 * Math.PI) * 110],

                y: [
                Math.sin(i * Math.PI / 2) * 110,
                Math.sin(i * Math.PI / 2 + Math.PI / 2) * 110,
                Math.sin(i * Math.PI / 2 + Math.PI) * 110,
                Math.sin(i * Math.PI / 2 + 3 * Math.PI / 2) * 110,
                Math.sin(i * Math.PI / 2 + 2 * Math.PI) * 110]

              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * 0.5 }} />

            )}
            {/* Pulsing glow behind logo */}
            <motion.div
              className="absolute inset-4 rounded-full bg-gold/10 blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

            {/* Logo */}
            <motion.img
              alt="Shree Bajrang Acrylic Bangles Pipe"
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="/lovable-uploads/45658394-5c39-413f-9548-2db0fd881934.png"
              width={224}
              height={224}
              loading="eager"
              decoding="async"
              fetchPriority="high" />

          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
            { icon: Factory, value: "5+", label: "Years Experience" },
            { icon: Users, value: "50+", label: "Happy Clients" },
            { icon: Award, value: "100%", label: "Quality Assured" }].
            map((stat, index) =>
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.15, duration: 0.6, type: "spring" }}
              className="text-center">

                <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}>

                  <stat.icon className="w-7 h-7 text-gold mx-auto mb-2" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;