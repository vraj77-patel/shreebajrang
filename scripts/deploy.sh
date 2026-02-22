#!/bin/bash

# BajrangPipe Deployment Script
# This script helps deploy the website to Netlify

set -e

echo "🚀 BajrangPipe Deployment Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Build the project
echo "🔨 Building the project..."
npm run build
echo "✅ Build completed"
echo ""

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📥 Installing Netlify CLI..."
    npm install -g netlify-cli
    echo "✅ Netlify CLI installed"
    echo ""
fi

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
echo ""
echo "Choose deployment option:"
echo "1. Deploy to production (--prod)"
echo "2. Deploy as preview (no --prod)"
echo ""
read -p "Enter your choice (1 or 2): " choice

if [ "$choice" = "1" ]; then
    netlify deploy --prod --dir=dist
    echo ""
    echo "✅ Production deployment completed!"
elif [ "$choice" = "2" ]; then
    netlify deploy --dir=dist
    echo ""
    echo "✅ Preview deployment completed!"
else
    echo "❌ Invalid choice. Exiting."
    exit 1
fi

echo ""
echo "🎉 Deployment successful!"
echo ""
echo "Next steps:"
echo "1. Visit your Netlify site to verify deployment"
echo "2. Set up environment variables if needed"
echo "3. Connect a custom domain (optional)"
echo ""
echo "For more information, see PERMANENT_DEPLOYMENT.md"
