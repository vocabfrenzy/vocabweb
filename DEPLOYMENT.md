# GitHub Pages Deployment Guide

This guide will help you deploy your Vocab Frenzy Fr website to GitHub Pages.

## Quick Start

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/vocab-frenzy-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build and deploy
node deploy.js
npx gh-pages -d dist
```

## Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:

1. Builds your static site when you push to main/master
2. Deploys it to GitHub Pages
3. Makes it available at `https://yourusername.github.io/repository-name`

## What Gets Deployed

The deployment process:
- Builds the React frontend as static files
- Includes all your app screenshots and assets
- Creates an optimized production build
- Deploys only the frontend (GitHub Pages doesn't support backend servers)

## File Structure After Build

```
dist/
├── index.html          # Main page
├── assets/             # CSS, JS, and image assets
│   ├── *.css          # Compiled styles
│   ├── *.js           # Compiled JavaScript
│   └── *.png          # Your app screenshots and logo
```

## Notes

- GitHub Pages only serves static files (no backend)
- The website will work perfectly as a promotional site
- All images and assets are included in the build
- The site will be responsive and mobile-friendly

## Troubleshooting

If deployment fails:
1. Check that your repository is public (or you have GitHub Pro for private repos)
2. Ensure GitHub Pages is enabled in repository settings
3. Check the Actions tab for build errors
4. Make sure all files are committed and pushed