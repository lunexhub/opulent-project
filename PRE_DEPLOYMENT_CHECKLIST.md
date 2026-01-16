# Pre-Deployment Checklist

Use this checklist before pushing to GitHub and deploying to Vercel.

## ✅ Code Quality

- [x] All hardcoded values removed
- [x] Configuration system implemented (`src/lib/config.ts`)
- [x] Environment variables documented (`ENV_VARIABLES.md`)
- [x] No linter errors
- [x] TypeScript compiles without errors

## ✅ Git Preparation

- [ ] Review all changes: `git status`
- [ ] Stage all files: `git add .`
- [ ] Review staged changes: `git diff --cached`
- [ ] Commit with descriptive message
- [ ] Push to GitHub: `git push origin main`

## ✅ Files to Commit

### New Files (Should be committed)
- [x] `src/lib/config.ts` - Configuration system
- [x] `ENV_VARIABLES.md` - Environment variables documentation
- [x] `DEPLOYMENT.md` - Deployment guide
- [x] `PRE_DEPLOYMENT_CHECKLIST.md` - This file
- [x] All source files in `src/`
- [x] Configuration files (`vite.config.ts`, `tsconfig.json`, etc.)
- [x] `vercel.json` - Vercel configuration

### Modified Files (Should be committed)
- [x] `.gitignore` - Updated to exclude .env files
- [x] `README.md` - Updated with configuration and deployment info
- [x] `package.json` - Dependencies
- [x] `vite.config.ts` - Uses environment variables

### Files to Review
- [ ] `.npmrc` - Check if it contains sensitive data (registry tokens, etc.)
- [ ] `package-lock.json` - Should be committed
- [ ] `bun.lockb` - Optional (if using bun)

### Files NOT to Commit (Already in .gitignore)
- [x] `.env` - Environment variables (sensitive)
- [x] `.env.local` - Local environment variables
- [x] `node_modules/` - Dependencies
- [x] `dist/` - Build output
- [x] `.vercel/` - Vercel cache

## ✅ Vercel Configuration

- [x] `vercel.json` exists and is correct
- [x] Build command: `npm run build`
- [x] Output directory: `dist`
- [x] SPA routing configured (rewrites to index.html)

## ✅ Environment Variables

Before deploying to Vercel, prepare to add these environment variables:

### Required (Contact Information)
- [ ] `VITE_PHONE_DISPLAY`
- [ ] `VITE_PHONE_RAW`
- [ ] `VITE_WHATSAPP_DISPLAY`
- [ ] `VITE_WHATSAPP_NUMBER`
- [ ] `VITE_EMAIL`
- [ ] `VITE_ADDRESS_DISPLAY`
- [ ] `VITE_ADDRESS_GOOGLE_MAPS`
- [ ] `VITE_BUSINESS_HOURS`

### Optional (Will use defaults if not set)
- [ ] `VITE_SERVER_HOST`
- [ ] `VITE_SERVER_PORT`
- [ ] `VITE_SERVICE_*` variables
- [ ] `VITE_FEATURE_*` variables

**Note:** Defaults are defined in `src/lib/config.ts`, so deployment will work even without setting all variables.

## ✅ Testing

- [ ] Build succeeds locally: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] All components render correctly
- [ ] Contact information displays correctly
- [ ] Phone/WhatsApp links work
- [ ] Images load properly
- [ ] Mobile responsive design works

## 🚀 Deployment Steps

1. **Commit and Push to GitHub:**
   ```sh
   git add .
   git commit -m "feat: add configuration system and prepare for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to vercel.com
   - Import GitHub repository
   - Vercel will auto-detect settings

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add variables from `ENV_VARIABLES.md`
   - Set for Production, Preview, and Development

4. **Deploy:**
   - Click Deploy
   - Wait for build to complete
   - Verify site works

5. **Post-Deployment:**
   - Test all functionality
   - Verify environment variables are working
   - Check mobile responsiveness
   - Test contact links

## 📝 Notes

- Default values in `src/lib/config.ts` ensure the site works even without environment variables
- You can customize values later via Vercel dashboard
- All sensitive data (like API keys) should be in environment variables, not in code
- The `.env` file is gitignored and should never be committed

## 🔗 Resources

- Deployment Guide: See `DEPLOYMENT.md`
- Environment Variables: See `ENV_VARIABLES.md`
- Vercel Docs: https://vercel.com/docs

