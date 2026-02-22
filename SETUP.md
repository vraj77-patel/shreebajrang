# Setup Guide - BajrangPipe

Complete setup instructions for development and production deployment.

## 🖥️ Local Development Setup

### Prerequisites

- **Node.js**: Version 16 or higher ([Download](https://nodejs.org))
- **npm**: Comes with Node.js
- **Git**: For version control ([Download](https://git-scm.com))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com))

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vraj77-patel/shreebajrang.git
   cd shreebajrang
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

4. **Add Supabase credentials:**
   - Edit `.env.local`
   - Add your Supabase URL and publishable key
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Open in browser:**
   - Visit `http://localhost:8080`
   - Changes auto-reload

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Lint code for errors
npm run lint
```

## 🚀 Production Deployment

### Option 1: Automatic Deployment (Recommended)

This is the easiest method - Netlify automatically deploys when you push to GitHub.

1. **Go to Netlify:**
   - Visit https://app.netlify.com
   - Click "New site from Git"

2. **Connect GitHub:**
   - Click GitHub button
   - Authorize Netlify
   - Select `vraj77-patel/shreebajrang`

3. **Configure build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Add environment variables:**
   - Site settings → Build & deploy → Environment
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_PUBLISHABLE_KEY`
   - Trigger new deploy

5. **Your site is live!**
   - Netlify provides a `.netlify.app` domain
   - HTTPS enabled automatically

### Option 2: Manual CLI Deployment

For more control, use the Netlify CLI.

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy to production:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option 3: Use Deploy Script

We've provided a convenient deployment script.

```bash
# Make script executable (first time only)
chmod +x scripts/deploy.sh

# Run the script
./scripts/deploy.sh
```

## 🌐 Custom Domain Setup

### If you have a domain:

1. **In Netlify dashboard:**
   - Site settings → Domain management
   - Add custom domain
   - Enter your domain (e.g., `bajrangpipe.com`)

2. **Configure DNS:**
   - Netlify shows DNS settings
   - Update at your domain registrar
   - Wait 24-48 hours for propagation

### If you need a domain:

Purchase from:
- **Namecheap**: https://www.namecheap.com
- **GoDaddy**: https://www.godaddy.com
- **Google Domains**: https://domains.google

Then follow the custom domain setup above.

## 🔒 Environment Variables

### Local Development

Create `.env.local` in project root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

### Production (Netlify)

1. Go to Netlify dashboard
2. Site settings → Build & deploy → Environment
3. Add variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`

**Important:** Never commit `.env.local` to Git. It's in `.gitignore`.

## 📊 Project Structure

```
shreebajrang/
├── src/                    # Source code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── assets/           # Images and media
│   ├── lib/              # Utilities
│   ├── hooks/            # Custom hooks
│   ├── integrations/     # Third-party APIs
│   ├── App.tsx           # Main component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static files
├── dist/                 # Production build (generated)
├── scripts/              # Utility scripts
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── netlify.toml          # Netlify configuration
├── package.json          # Dependencies
├── README.md             # Project documentation
├── SETUP.md              # This file
├── DEPLOYMENT.md         # Deployment guide
├── PERMANENT_DEPLOYMENT.md # Permanent deployment guide
└── IMPROVEMENTS_REPORT.md  # Performance report
```

## 🔧 Configuration Files

### vite.config.ts
- Build optimization settings
- Code splitting configuration
- Development server settings

### tailwind.config.ts
- Custom theme colors
- Typography settings
- Plugin configuration

### tsconfig.json
- TypeScript compiler options
- Path aliases
- Strict mode settings

### netlify.toml
- Build command
- Publish directory
- Security headers
- Caching rules
- Redirects

## 📚 Useful Resources

### Documentation
- [Vite Guide](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Netlify Docs](https://docs.netlify.com)

### Tools
- [VS Code](https://code.visualstudio.com)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Netlify CLI](https://cli.netlify.com)

## 🐛 Troubleshooting

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules

# Reinstall
npm install
```

### Development server won't start
```bash
# Check if port 8080 is in use
lsof -i :8080

# Kill the process if needed
kill -9 <PID>

# Start again
npm run dev
```

### Build fails
```bash
# Check Node.js version
node --version  # Should be 16+

# Clear build cache
rm -rf dist

# Rebuild
npm run build
```

### Environment variables not working
- Ensure `.env.local` exists in project root
- Restart development server
- Variable names must start with `VITE_`
- Check for typos (case-sensitive)

### Deployment fails on Netlify
- Check build logs in Netlify dashboard
- Verify environment variables are set
- Ensure `dist` folder is created
- Check Node.js version compatibility

## ✅ Deployment Checklist

Before deploying to production:

- [ ] All code committed to GitHub
- [ ] `.env.local` is in `.gitignore`
- [ ] Environment variables configured in Netlify
- [ ] Build succeeds locally: `npm run build`
- [ ] No console errors or warnings
- [ ] Mobile responsive design works
- [ ] All links are functional
- [ ] Images load correctly
- [ ] Forms work properly
- [ ] Security headers verified

## 🎯 Next Steps

1. **Local Development:**
   - Follow the Local Development Setup above
   - Make changes to the code
   - Test locally

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```

3. **Automatic Deployment:**
   - Netlify automatically deploys
   - Check deployment status in Netlify dashboard

4. **Monitor Your Site:**
   - Check Netlify Analytics
   - Monitor performance
   - Set up alerts

## 📞 Support

- **Netlify Support**: https://support.netlify.com
- **GitHub Issues**: https://github.com/vraj77-patel/shreebajrang/issues
- **Documentation**: See README.md and other .md files

---

**Ready to deploy?** Follow the Production Deployment section above!
