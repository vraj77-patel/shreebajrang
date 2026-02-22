# Permanent Deployment Guide - BajrangPipe

This guide will help you deploy the BajrangPipe website permanently to Netlify with a custom domain.

## 🎯 Quick Start (5 minutes)

### Step 1: Deploy to Netlify

1. Go to **https://app.netlify.com**
2. Click **"New site from Git"**
3. Click **GitHub** and authorize Netlify
4. Select **vraj77-patel/shreebajrang**
5. Click **Deploy site**

Netlify will automatically:
- Detect the build command (`npm run build`)
- Deploy to `dist` folder
- Provide a temporary `.netlify.app` domain

### Step 2: Add Environment Variables

1. In Netlify dashboard, go to **Site settings → Build & deploy → Environment**
2. Click **Edit variables**
3. Add these variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase publishable key
4. Click **Save**
5. Trigger a new deploy: **Deploys → Trigger deploy**

### Step 3: Connect Custom Domain (Optional)

#### If you have a domain:

1. In Netlify, go to **Site settings → Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `bajrangpipe.com`)
4. Follow the DNS configuration steps:
   - For **Namecoin**: Update nameservers at your registrar
   - For **CNAME**: Add CNAME record pointing to your Netlify domain
   - For **A Record**: Add A record with Netlify's IP

#### If you don't have a domain yet:

1. Purchase a domain from:
   - **Namecheap**: https://www.namecheap.com
   - **GoDaddy**: https://www.godaddy.com
   - **Google Domains**: https://domains.google
   - **AWS Route 53**: https://aws.amazon.com/route53

2. Follow the custom domain steps above

### Step 4: Enable HTTPS

Netlify automatically provides free HTTPS via Let's Encrypt:
- HTTPS is enabled by default
- Auto-renewal is automatic
- No additional configuration needed

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Website loads at `https://yoursite.netlify.app`
- [ ] All images display correctly
- [ ] Navigation works
- [ ] Forms submit properly
- [ ] Mobile responsive design works
- [ ] Security headers present (check with https://securityheaders.com)
- [ ] Performance is good (check with https://pagespeed.web.dev)

## 🔄 Automatic Deployments

After initial setup, deployments are automatic:

1. **Push to main branch** → Netlify automatically deploys
2. **Pull requests** → Netlify creates preview deployments
3. **Rollback** → Click "Rollback deploy" if needed

## 🛠️ Manual Deployment (Alternative)

If you prefer using CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

## 📊 Monitoring Your Site

### Netlify Analytics
- View in **Site settings → Analytics**
- Monitor page views, bandwidth, and errors

### Performance Monitoring
- Use **Lighthouse** in Chrome DevTools
- Check **Core Web Vitals** at https://pagespeed.web.dev
- Monitor with Google Analytics (optional setup)

### Error Tracking
- Check **Netlify logs** for build errors
- Monitor **function logs** if using serverless functions
- Set up alerts in **Site settings → Notifications**

## 🔒 Security Best Practices

1. **Keep dependencies updated:**
   ```bash
   npm outdated
   npm update
   ```

2. **Run security audits:**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Monitor security headers:**
   - Visit https://securityheaders.com
   - Enter your domain
   - Verify all headers are present

4. **Enable branch protection:**
   - Go to GitHub → Settings → Branches
   - Require pull request reviews before merging
   - Require status checks to pass

## 💰 Costs

**Netlify Pricing (as of Feb 2026):**
- **Free tier:** Perfect for most sites
  - 300 build minutes/month
  - Unlimited bandwidth
  - HTTPS included
  - Custom domain included
  - Automatic deployments
  
- **Pro tier:** $19/month if you need more
  - Unlimited build minutes
  - Advanced analytics
  - Priority support

**Domain Costs:**
- Typically $10-15/year
- Varies by registrar and TLD

## 🚀 Next Steps

1. **Set up CI/CD:**
   - Netlify automatically handles this
   - No additional setup needed

2. **Add analytics:**
   - Integrate Google Analytics
   - Track user behavior

3. **Set up email notifications:**
   - Netlify → Site settings → Notifications
   - Get alerts on failed builds

4. **Implement monitoring:**
   - Set up error tracking (Sentry)
   - Monitor performance (DataDog)

## 📞 Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://support.netlify.com
- **GitHub Issues:** https://github.com/vraj77-patel/shreebajrang/issues
- **Community:** https://community.netlify.com

## 🎓 Troubleshooting

### Build fails on Netlify but works locally

**Solution:**
1. Check Netlify build logs
2. Ensure all environment variables are set
3. Verify Node.js version compatibility
4. Check for hardcoded paths

### Domain not resolving

**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Verify DNS records are correct
3. Check domain registrar settings
4. Use https://www.whatsmydns.net to check DNS

### HTTPS not working

**Solution:**
1. Netlify provides free HTTPS automatically
2. Wait a few minutes for certificate generation
3. Check **Site settings → Domain management**
4. Verify domain is correctly configured

### Environment variables not working

**Solution:**
1. Verify variables are set in Netlify dashboard
2. Ensure variable names match (case-sensitive)
3. Trigger a new deploy after adding variables
4. Check that names are prefixed with `VITE_`

## 📝 Deployment Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Custom domain set up (if applicable)
- [ ] HTTPS enabled
- [ ] Security headers verified
- [ ] Performance tested
- [ ] Mobile responsiveness checked
- [ ] All links working
- [ ] Forms tested
- [ ] Analytics set up (optional)
- [ ] Backup plan in place

## 🎉 You're Live!

Your BajrangPipe website is now permanently deployed and accessible 24/7!

**Your site is now:**
- ✅ Live on the internet
- ✅ Automatically backed up
- ✅ Automatically updated on code changes
- ✅ Protected with HTTPS
- ✅ Optimized for performance
- ✅ Secure with best practices

---

**Need help?** Check the [DEPLOYMENT.md](./DEPLOYMENT.md) or [IMPROVEMENTS_REPORT.md](./IMPROVEMENTS_REPORT.md) files.
