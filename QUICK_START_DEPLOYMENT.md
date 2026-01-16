# Quick Start: Deploy to GitHub & Vercel

## 🚀 Quick Commands

### Step 1: Push to GitHub

```powershell
# Navigate to project directory
cd "C:\Users\LATITUDE 7490\Desktop\plush-polish-interiors-main"

# Check status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "feat: add configuration system and prepare for deployment"

# Push to GitHub
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect settings (no changes needed)
5. **IMPORTANT:** Before deploying, add environment variables:
   - Go to **Settings** → **Environment Variables**
   - Add variables from `ENV_VARIABLES.md` (or use defaults)
   - Set for **Production**, **Preview**, and **Development**
6. Click **"Deploy"**
7. Wait 1-2 minutes for build to complete
8. Your site is live! 🎉

## 📋 Environment Variables (Quick Copy)

Copy these to Vercel's Environment Variables section:

```
VITE_PHONE_DISPLAY=078 702 8285
VITE_PHONE_RAW=0787028285
VITE_WHATSAPP_DISPLAY=078 702 8285
VITE_WHATSAPP_NUMBER=27787028285
VITE_EMAIL=vivian@opulentautointerior.com
VITE_ADDRESS_DISPLAY=48 Monument Road, Kempton Park, 1619
VITE_ADDRESS_GOOGLE_MAPS=https://maps.google.com/?q=48+Monument+Road+Kempton+Park+Gauteng+1619
VITE_BUSINESS_HOURS=Mon - Sat: 8AM - 5PM
```

**Note:** If you don't add these, the site will use defaults from `src/lib/config.ts` and still work!

## ✅ Verification

After deployment, check:
- [ ] Site loads at `https://your-project.vercel.app`
- [ ] Contact information displays correctly
- [ ] Phone/WhatsApp links work
- [ ] Images load properly
- [ ] Mobile view works

## 🔄 Future Updates

Every time you push to `main` branch, Vercel automatically redeploys!

```powershell
git add .
git commit -m "Your update message"
git push origin main
```

## 📚 More Details

- Full deployment guide: See `DEPLOYMENT.md`
- Environment variables: See `ENV_VARIABLES.md`
- Pre-deployment checklist: See `PRE_DEPLOYMENT_CHECKLIST.md`

