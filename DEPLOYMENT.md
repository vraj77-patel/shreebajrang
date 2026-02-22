# Deployment Guide for BajrangPipe

This guide explains how to deploy the improved website to Netlify with all security and performance optimizations.

## Prerequisites

- GitHub account with access to the repository
- Netlify account (free tier available at https://netlify.com)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize Netlify
   - Choose the `vraj77-patel/shreebajrang` repository

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Leave other settings as default

3. **Set Environment Variables:**
   - Go to Site settings → Build & deploy → Environment
   - Add the following environment variables:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase publishable key

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

## Environment Variables

The website requires the following environment variables:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase publishable key

These should be added in the Netlify dashboard under Site settings → Build & deploy → Environment.

## Performance Optimizations Applied

1. **Image Optimization:**
   - All images have been compressed and optimized
   - Header and footer logos reduced by 94-97%
   - Gallery images optimized for web

2. **Code Splitting:**
   - Vendor code separated into `vendor.js`
   - UI components separated into `ui.js`
   - Lazy loading of routes for better initial load time

3. **Build Optimization:**
   - Terser minification enabled
   - Console statements removed in production
   - CSS optimized with Tailwind purging

## Security Features

1. **Security Headers:**
   - Content-Security-Policy (CSP) configured
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: SAMEORIGIN
   - X-XSS-Protection enabled
   - Strict-Transport-Security enabled
   - Referrer-Policy: strict-origin-when-cross-origin

2. **Environment Variables:**
   - Sensitive data stored in environment variables
   - `.env` file excluded from version control
   - `.env.example` provided as template

3. **Caching Strategy:**
   - Static assets cached for 1 year (immutable)
   - HTML files not cached (must-revalidate)
   - Optimal cache headers configured

## Monitoring

After deployment:

1. Check Lighthouse scores in Chrome DevTools
2. Monitor Core Web Vitals in Netlify Analytics
3. Review security headers using https://securityheaders.com
4. Test performance at https://pagespeed.web.dev

## Troubleshooting

### Build fails with "terser not found"
- Run `npm install --save-dev terser`
- Ensure `package.json` includes terser in devDependencies

### Environment variables not working
- Verify variables are set in Netlify dashboard
- Restart the build after adding environment variables
- Check that variable names match exactly (case-sensitive)

### CORS errors
- Update CSP in `index.html` if adding new external resources
- Ensure external APIs are HTTPS only

## Support

For issues or questions:
1. Check the Netlify documentation: https://docs.netlify.com
2. Review the vite configuration: `vite.config.ts`
3. Check security headers: `netlify.toml`
