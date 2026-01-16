import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { contactConfig } from "@/lib/config";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: contactConfig.phone.display,
    href: `tel:${contactConfig.phone.raw}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contactConfig.whatsapp.display,
    href: `https://wa.me/${contactConfig.whatsapp.number}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: contactConfig.address.display,
    href: contactConfig.address.googleMaps,
  },
  {
    icon: Clock,
    label: "Hours",
    value: contactConfig.hours,
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-sage-light overflow-hidden w-full max-w-full">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-widest mb-3 sm:mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-6 break-words hyphens-auto">
            Let's Create Together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0 break-words">
            Ready to transform your space or vehicle? Contact us today for a free
            consultation and quote. We'd love to hear about your project.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16 w-full"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-4 sm:p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/50 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mb-2">{info.label}</div>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("https") ? "_blank" : undefined}
                  rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  className="font-medium text-sm sm:text-base text-foreground hover:text-accent transition-colors break-words"
                >
                  {info.value}
                </a>
              ) : (
                <span className="font-medium text-sm sm:text-base text-foreground">{info.value}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-foreground rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 text-center w-full"
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-background mb-3 sm:mb-4 break-words">
            Ready to Get Started?
          </h3>
          <p className="text-background/70 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 max-w-xl mx-auto px-2 sm:px-4">
            Send us a message on WhatsApp or give us a call. We respond quickly
            and are always happy to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={`https://wa.me/${contactConfig.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-whatsapp text-white rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-whatsapp-hover transition-all duration-300 touch-manipulation min-h-[44px] w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${contactConfig.phone.raw}`}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-background text-foreground rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-background/90 transition-all duration-300 touch-manipulation min-h-[44px] w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
