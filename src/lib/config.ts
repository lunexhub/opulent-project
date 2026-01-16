/**
 * Application configuration
 * All hardcoded values should be moved here or to environment variables
 */

// Contact Information
export const contactConfig = {
  phones: [
    {
      display: import.meta.env.VITE_PHONE_1_DISPLAY || "078 702 8285",
      raw: import.meta.env.VITE_PHONE_1_RAW || "0787028285",
    },
    {
      display: import.meta.env.VITE_PHONE_2_DISPLAY || "068 514 5786",
      raw: import.meta.env.VITE_PHONE_2_RAW || "0685145786",
    },
  ],
  // Keep single phone for backward compatibility (uses first phone)
  phone: {
    display: import.meta.env.VITE_PHONE_DISPLAY || import.meta.env.VITE_PHONE_1_DISPLAY || "078 702 8285",
    raw: import.meta.env.VITE_PHONE_RAW || import.meta.env.VITE_PHONE_1_RAW || "0787028285",
  },
  whatsapp: {
    display: import.meta.env.VITE_WHATSAPP_DISPLAY || "078 702 8285",
    number: import.meta.env.VITE_WHATSAPP_NUMBER || "27787028285", // South African format
  },
  email: import.meta.env.VITE_EMAIL || "vivian@opulentautointerior.com",
  address: {
    display: import.meta.env.VITE_ADDRESS_DISPLAY || "48 Monument Road, Kempton Park, 1619",
    googleMaps: import.meta.env.VITE_ADDRESS_GOOGLE_MAPS || 
      "https://maps.google.com/?q=48+Monument+Road+Kempton+Park+Gauteng+1619",
  },
  hours: import.meta.env.VITE_BUSINESS_HOURS || "Mon - Sat: 8AM - 5PM",
};

// Server Configuration (for vite.config.ts)
export const serverConfig = {
  host: import.meta.env.VITE_SERVER_HOST || "::",
  port: parseInt(import.meta.env.VITE_SERVER_PORT || "8080", 10),
};

// Services Configuration
// Note: Icon components are imported in the component file
export const servicesConfig = [
  {
    iconName: "Sofa",
    title: import.meta.env.VITE_SERVICE_1_TITLE || "Upholstery",
    description: import.meta.env.VITE_SERVICE_1_DESCRIPTION || 
      "Complete reupholstery services for sofas, chairs, headboards, and all furniture. Premium fabrics and expert craftsmanship.",
    imagePath: "@/assets/gallery/hero-living-room.jpg",
  },
  {
    iconName: "Palette",
    title: import.meta.env.VITE_SERVICE_2_TITLE || "Custom Couch Design",
    description: import.meta.env.VITE_SERVICE_2_DESCRIPTION || 
      "Bespoke couch and sofa designs tailored to your space and style. From concept to creation, we bring your vision to life.",
    imagePath: "@/assets/custom-couch.jpg",
  },
  {
    iconName: "Wrench",
    title: import.meta.env.VITE_SERVICE_3_TITLE || "Furniture Repair",
    description: import.meta.env.VITE_SERVICE_3_DESCRIPTION || 
      "Expert restoration and repair for antique and modern furniture. We fix frames, springs, cushions, and structural damage.",
    imagePath: "@/assets/gallery/furniture-repair.jpg",
  },
  {
    iconName: "Car",
    title: import.meta.env.VITE_SERVICE_4_TITLE || "Car Interior Trimming",
    description: import.meta.env.VITE_SERVICE_4_DESCRIPTION || 
      "Luxury automotive upholstery including seats, door panels, headliners, and dashboards. Elevate your driving experience.",
    imagePath: "@/assets/gallery/car-interior.jpg",
  },
];

// About Section Features
export const aboutFeaturesConfig = [
  import.meta.env.VITE_FEATURE_1 || "Premium quality materials and fabrics",
  import.meta.env.VITE_FEATURE_2 || "Expert craftsmen with years of experience",
  import.meta.env.VITE_FEATURE_3 || "Custom designs tailored to your needs",
  import.meta.env.VITE_FEATURE_4 || "Fast turnaround without compromising quality",
  import.meta.env.VITE_FEATURE_5 || "Competitive pricing with no hidden costs",
  import.meta.env.VITE_FEATURE_6 || "Free consultation and estimates",
];

