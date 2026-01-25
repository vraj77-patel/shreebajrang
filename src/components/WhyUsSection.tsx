import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, BadgeCheck, Handshake, Truck, HeadphonesIcon } from "lucide-react";

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% quality assurance on every product we manufacture",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to delivering your orders on schedule, every time",
    },
    {
      icon: BadgeCheck,
      title: "Industry Experience",
      description: "Years of expertise in acrylic pipe manufacturing",
    },
    {
      icon: Handshake,
      title: "Customer Focus",
      description: "Building long-term relationships based on trust and reliability",
    },
    {
      icon: Truck,
      title: "Pan-India Shipping",
      description: "Delivering to all major cities and industrial hubs across India",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Our team is always ready to assist with your requirements",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your Trusted <span className="text-gradient-gold">Manufacturing Partner</span>
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            We are committed to delivering excellence in every aspect of our business, 
            from product quality to customer service.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-gold/50 hover:bg-secondary-foreground/10 transition-all duration-500"
            >
              <div className="inline-flex p-4 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-secondary-foreground/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
