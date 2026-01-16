import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { contactConfig } from "@/lib/config";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3 md:gap-4">
      {/* Phone Call Button */}
      <motion.a
        href={`tel:${contactConfig.phone.raw}`}
        className="flex items-center justify-center w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-foreground text-background shadow-elegant-lg transition-all duration-300 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call us"
      >
        <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${contactConfig.whatsapp.number}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-white shadow-elegant-lg transition-all duration-300 hover:bg-whatsapp-hover hover:scale-110 animate-pulse-glow touch-manipulation min-w-[44px] min-h-[44px]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </motion.a>
    </div>
  );
};

export default FloatingContact;
