import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import customCouch from "@/assets/custom-couch.jpg";
import { aboutFeaturesConfig } from "@/lib/config";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden w-full max-w-full">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden w-full order-2 lg:order-1"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant-lg w-full">
              <img
                src={customCouch}
                alt="Our craftsmanship"
                className="w-full aspect-square object-cover"
                loading="lazy"
                style={{ maxWidth: '100%', width: '100%' }}
              />
            </div>
            {/* Decorative Element - contained within parent, only visible on larger screens */}
            <div className="hidden md:block absolute bottom-4 right-4 w-32 lg:w-48 h-32 lg:h-48 bg-sage-light rounded-3xl -z-10 opacity-60" />
            <div className="hidden md:block absolute top-4 left-4 w-24 lg:w-32 h-24 lg:h-32 bg-primary rounded-2xl -z-10 opacity-60" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-widest mb-3 sm:mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight break-words hyphens-auto">
              Crafting Excellence in Every Detail
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8">
              At Opulent Auto Trimming Interiors, we believe that every space deserves
              the finest touch. Whether it's reviving a cherished piece of furniture
              or transforming your vehicle's interior, our team of skilled artisans
              delivers unparalleled quality.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10">
              With a passion for perfection and an eye for design, we turn your
              visions into reality. Our commitment to using only premium materials
              ensures durability and elegance that stands the test of time.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              {aboutFeaturesConfig.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/90 break-words">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-foreground text-background rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-foreground/90 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg touch-manipulation min-h-[44px] w-full sm:w-auto"
            >
              Work With Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
