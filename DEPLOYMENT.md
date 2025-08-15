# GitHub Pages Deployment Guide

This guide will help you deploy your Vocab Frenzy Fr website to GitHub Pages.

## Important: Repository Setup

Your website is configured to be deployed at: `https://vocabfrenzy.github.io/vocabweb`

Make sure to:
- Create a repository named `vocabweb` under the `vocabfrenzy` GitHub organization/account
- Or update the base path in App.tsx if using a different repository name

## Quick Start

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/vocabfrenzy/vocabweb.git
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

**Note**: The app is configured with base path `/vocabweb/` for GitHub Pages. If you need to change this:
1. Update the Router base in `client/src/App.tsx`
2. Update the base path in `vite.config.prod.ts`
3. Rebuild with `node deploy.js`

## Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:

1. Builds your static site when you push to main/master
2. Deploys it to GitHub Pages
3. Makes it available at `https://vocabfrenzy.github.io/vocabweb`

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