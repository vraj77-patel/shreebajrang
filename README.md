# BajrangPipe - Premium Pipe Products & Solutions

A modern, fast, and secure website for BajrangPipe built with React, TypeScript, and Vite.

## 🚀 Features

- **High Performance:** Optimized images, code splitting, and lazy loading
- **Secure:** Content Security Policy, HTTPS enforced, security headers configured
- **Responsive:** Mobile-first design with Tailwind CSS
- **Modern Stack:** React 18, TypeScript, Vite, Radix UI
- **SEO Ready:** Meta tags, Open Graph, Twitter Cards
- **Accessible:** WCAG compliant components

## 📊 Performance Metrics

- **Image Optimization:** 94-97% reduction in logo file sizes
- **Code Splitting:** Separate vendor, UI, and main bundles
- **Build Size:** ~100 KB gzipped (main bundle)
- **Security:** A+ rating on security headers

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, Radix UI
- **Routing:** React Router v6
- **Forms:** React Hook Form, Zod validation
- **Backend:** Supabase (optional)
- **Deployment:** Netlify

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/vraj77-patel/shreebajrang.git
cd shreebajrang

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Supabase credentials to .env.local
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm test:watch

# Lint code
npm run lint
```

## 🌐 Deployment

### Automatic Deployment to Netlify

The repository is configured for automatic deployment to Netlify:

1. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose this repository

2. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables:**
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_PUBLISHABLE_KEY`

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

## 📋 Environment Variables

Create a `.env.local` file with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

## 📁 Project Structure

```
shreebajrang/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── assets/         # Images and media
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # Third-party integrations
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── dist/               # Production build (generated)
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── netlify.toml        # Netlify deployment config
├── DEPLOYMENT.md       # Deployment guide
└── README.md           # This file
```

## 🔒 Security

- **Content Security Policy:** Configured to prevent XSS attacks
- **HTTPS:** Enforced via Strict-Transport-Security header
- **Headers:** X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **Environment Variables:** Sensitive data never committed to repository
- **Dependencies:** Regular security audits

## 📈 Performance Optimization

- **Image Optimization:** All images compressed and optimized
- **Code Splitting:** Vendor, UI, and main code separated
- **Lazy Loading:** Routes loaded on demand
- **Caching:** Optimized cache headers for assets
- **Minification:** Terser minification in production

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 📝 Git Workflow

```bash
# Create a new branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push to GitHub
git push origin feature/your-feature

# Create a Pull Request on GitHub
```

## 🐛 Troubleshooting

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check that Node.js version is 16 or higher
- Clear node_modules: `rm -rf node_modules && npm install`

### Environment variables not working
- Ensure `.env.local` file exists in project root
- Restart development server after adding variables
- Check variable names are prefixed with `VITE_`

### Deployment issues
- Check Netlify build logs for errors
- Verify environment variables are set in Netlify dashboard
- Ensure `dist` folder is created after build

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md)
- [Improvements Report](./IMPROVEMENTS_REPORT.md)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary and owned by BajrangPipe.

## 📞 Support

For issues or questions:
1. Check the [Deployment Guide](./DEPLOYMENT.md)
2. Review the [Improvements Report](./IMPROVEMENTS_REPORT.md)
3. Check Netlify documentation: https://docs.netlify.com

## 🎯 Roadmap

- [ ] Add e-commerce functionality
- [ ] Implement user authentication
- [ ] Add product filtering and search
- [ ] Set up analytics
- [ ] Add blog functionality
- [ ] Implement CMS integration

---

**Last Updated:** February 22, 2026  
**Status:** Production Ready
