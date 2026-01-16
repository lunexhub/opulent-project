# Environment Variables

This project uses environment variables to configure application settings. Create a `.env` file in the root directory with the following variables:

## Server Configuration
```env
VITE_SERVER_HOST=::
VITE_SERVER_PORT=8080
```

## Contact Information
```env
VITE_PHONE_DISPLAY=078 702 8285
VITE_PHONE_RAW=0787028285
VITE_WHATSAPP_DISPLAY=078 702 8285
VITE_WHATSAPP_NUMBER=27787028285
VITE_EMAIL=vivian@opulentautointerior.com
VITE_ADDRESS_DISPLAY=48 Monument Road, Kempton Park, 1619
VITE_ADDRESS_GOOGLE_MAPS=https://maps.google.com/?q=48+Monument+Road+Kempton+Park+Gauteng+1619
VITE_BUSINESS_HOURS=Mon - Sat: 8AM - 5PM
```

## Services Configuration
```env
VITE_SERVICE_1_TITLE=Upholstery
VITE_SERVICE_1_DESCRIPTION=Complete reupholstery services for sofas, chairs, headboards, and all furniture. Premium fabrics and expert craftsmanship.
VITE_SERVICE_2_TITLE=Custom Couch Design
VITE_SERVICE_2_DESCRIPTION=Bespoke couch and sofa designs tailored to your space and style. From concept to creation, we bring your vision to life.
VITE_SERVICE_3_TITLE=Furniture Repair
VITE_SERVICE_3_DESCRIPTION=Expert restoration and repair for antique and modern furniture. We fix frames, springs, cushions, and structural damage.
VITE_SERVICE_4_TITLE=Car Interior Trimming
VITE_SERVICE_4_DESCRIPTION=Luxury automotive upholstery including seats, door panels, headliners, and dashboards. Elevate your driving experience.
```

## About Section Features
```env
VITE_FEATURE_1=Premium quality materials and fabrics
VITE_FEATURE_2=Expert craftsmen with years of experience
VITE_FEATURE_3=Custom designs tailored to your needs
VITE_FEATURE_4=Fast turnaround without compromising quality
VITE_FEATURE_5=Competitive pricing with no hidden costs
VITE_FEATURE_6=Free consultation and estimates
```

## Usage

1. Copy the variables above into a `.env` file in the root directory
2. Modify the values as needed for your environment
3. The application will use these values, falling back to defaults defined in `src/lib/config.ts` if not provided

**Note:** All environment variables must be prefixed with `VITE_` to be accessible in the Vite application.

