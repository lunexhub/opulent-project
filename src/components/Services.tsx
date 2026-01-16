import { motion } from "framer-motion";
import { Sofa, Car, Wrench, Palette } from "lucide-react";
import carInterior from "@/assets/gallery/car-interior.jpg";
import furnitureRepair from "@/assets/gallery/furniture-repair.jpg";
import customCouch from "@/assets/custom-couch.jpg";
import heroImage from "@/assets/gallery/hero-living-room.jpg";
import { servicesConfig } from "@/lib/config";

// Icon mapping
const iconMap: Record<string, typeof Sofa> = {
  Sofa,
  Car,
  Wrench,
  Palette,
};

// Image mapping
const imageMap: Record<string, string> = {
  "@/assets/gallery/hero-living-room.jpg": heroImage,
  "@/assets/custom-couch.jpg": customCouch,
  "@/assets/gallery/furniture-repair.jpg": furnitureRepair,
  "@/assets/gallery/car-interior.jpg": carInterior,
};

// Map config to component format
const services = servicesConfig.map((service) => ({
  icon: iconMap[service.iconName],
  title: service.title,
  description: service.description,
  image: imageMap[service.imagePath],
}));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary overflow-hidden w-full max-w-full">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-widest mb-3 sm:mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-6 break-words hyphens-auto">
            Our Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0 break-words">
            From home furniture to automotive interiors, we deliver exceptional
            craftsmanship that transforms ordinary into extraordinary.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  style={{ maxWidth: '100%' }}
                />
                <div className="absolute inset-0 overlay-gradient opacity-60" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-background break-words">
                    {service.title}
                  </h3>
                </div>
                <p className="text-background/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
