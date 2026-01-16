# Deployment Guide

This guide will help you deploy the Plush Polish Interiors website to GitHub and Vercel.

## Prerequisites

- Git installed and configured
- GitHub account
- Vercel account (free tier works)
- Node.js >= 18.0.0 installed

## Step 1: Prepare for GitHub

### 1.1 Check Current Status
```sh
git status
```

### 1.2 Stage All Changes
```sh
git add .
```

### 1.3 Commit Changes
```sh
git commit -m "feat: remove hardcoded values and add configuration system"
```

### 1.4 Push to GitHub
```sh
git push origin main
```

If you haven't set up a remote yet:
```sh
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 2.2 Configure Environment Variables

**IMPORTANT:** You must add environment variables in Vercel before deploying!

1. In the Vercel project settings, go to **Settings** → **Environment Variables**
2. Add each variable from the list below:

#### Server Configuration (Optional - defaults work fine)
```
VITE_SERVER_HOST = ::
VITE_SERVER_PORT = 8080
```

#### Contact Information (Required)
```
VITE_PHONE_DISPLAY = 078 702 8285
VITE_PHONE_RAW = 0787028285
VITE_WHATSAPP_DISPLAY = 078 702 8285
VITE_WHATSAPP_NUMBER = 27787028285
VITE_EMAIL = vivian@opulentautointerior.com
VITE_ADDRESS_DISPLAY = 48 Monument Road, Kempton Park, 1619
VITE_ADDRESS_GOOGLE_MAPS = https://maps.google.com/?q=48+Monument+Road+Kempton+Park+Gauteng+1619
VITE_BUSINESS_HOURS = Mon - Sat: 8AM - 5PM
```

#### Services Configuration (Optional - defaults work fine)
```
VITE_SERVICE_1_TITLE = Upholstery
VITE_SERVICE_1_DESCRIPTION = Complete reupholstery services for sofas, chairs, headboards, and all furniture. Premium fabrics and expert craftsmanship.
VITE_SERVICE_2_TITLE = Custom Couch Design
VITE_SERVICE_2_DESCRIPTION = Bespoke couch and sofa designs tailored to your space and style. From concept to creation, we bring your vision to life.
VITE_SERVICE_3_TITLE = Furniture Repair
VITE_SERVICE_3_DESCRIPTION = Expert restoration and repair for antique and modern furniture. We fix frames, springs, cushions, and structural damage.
VITE_SERVICE_4_TITLE = Car Interior Trimming
VITE_SERVICE_4_DESCRIPTION = Luxury automotive upholstery including seats, door panels, headliners, and dashboards. Elevate your driving experience.
```

#### About Section Features (Optional - defaults work fine)
```
VITE_FEATURE_1 = Premium quality materials and fabrics
VITE_FEATURE_2 = Expert craftsmen with years of experience
VITE_FEATURE_3 = Custom designs tailored to your needs
VITE_FEATURE_4 = Fast turnaround without compromising quality
VITE_FEATURE_5 = Competitive pricing with no hidden costs
VITE_FEATURE_6 = Free consultation and estimates
```

**Note:** 
- Set these for **Production**, **Preview**, and **Development** environments
- Or use the defaults from `src/lib/config.ts` if you don't need customization

### 2.3 Deploy

1. Click **Deploy** button
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

### 2.4 Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## Step 3: Continuous Deployment

Vercel automatically deploys on every push to your `main` branch:

1. Make changes locally
2. Commit and push:
   ```sh
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. Vercel will automatically build and deploy

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version (should be >= 18.0.0)

### Environment Variables Not Working

1. Make sure variables are prefixed with `VITE_`
2. Redeploy after adding/changing variables
3. Check that variables are set for the correct environment (Production/Preview/Development)

### Routing Issues

The `vercel.json` file includes rewrites for SPA routing. If you have routing issues:
- Verify `vercel.json` is in the root directory
- Check that all routes redirect to `index.html`

## Files to Review Before Deployment

- ✅ `vercel.json` - Vercel configuration
- ✅ `.gitignore` - Ensures `.env` files aren't committed
- ✅ `package.json` - Dependencies and scripts
- ✅ `src/lib/config.ts` - Configuration with defaults
- ✅ `ENV_VARIABLES.md` - Environment variables documentation

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All contact information displays correctly
- [ ] Phone and WhatsApp links work
- [ ] Images load properly
- [ ] Navigation works
- [ ] Mobile responsive design works
- [ ] Environment variables are set correctly

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev
- Check `ENV_VARIABLES.md` for configuration details

