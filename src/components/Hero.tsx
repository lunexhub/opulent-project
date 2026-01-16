import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/gallery/hero-living-room.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 w-full max-w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full">
        <img
          src={heroImage}
          alt="Luxurious interior"
          className="w-full h-full object-cover object-center"
          loading="eager"
          style={{ maxWidth: '100%', width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 max-w-7xl w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-sage-light rounded-full mb-4 sm:mb-6 md:mb-8 max-w-full"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-sage-dark flex-shrink-0" />
            <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-foreground/80 whitespace-normal sm:whitespace-nowrap">
              Premium Craftsmanship Since Day One
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold leading-[1.15] sm:leading-[1.1] md:leading-[1.05] text-foreground mb-3 sm:mb-4 md:mb-6 break-words hyphens-auto"
          >
            Transform Your
            <span className="block text-accent">Spaces & Rides</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed break-words"
          >
            Expert upholstery, custom furniture design, and premium car interior
            trimming. We bring luxury and comfort to every stitch.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-foreground text-background rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-foreground/90 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg touch-manipulation min-h-[44px] w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-sage-light text-foreground rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-primary transition-all duration-300 touch-manipulation min-h-[44px] w-full sm:w-auto"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-16"
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5 sm:p-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-foreground/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
