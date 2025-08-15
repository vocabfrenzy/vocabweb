#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting GitHub Pages deployment...');

try {
  // Build the static site with production config
  console.log('📦 Building static site for GitHub Pages...');
  execSync('npx vite build --config vite.config.prod.ts', { stdio: 'inherit' });

  // Copy files from dist/public to dist for GitHub Pages
  console.log('📁 Copying files for GitHub Pages...');
  execSync('cp -r dist/public/* dist/', { stdio: 'inherit' });

  // Check if index.html exists
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(path.join(distPath, 'index.html'))) {
    console.log('⚠️  No index.html found in dist, something went wrong with the build');
    process.exit(1);
  }

  console.log('✅ Build completed successfully!');
  console.log('\n📋 Next steps to deploy to GitHub Pages:');
  console.log('1. Push your code to a GitHub repository');
  console.log('2. Go to your repository settings');
  console.log('3. Navigate to "Pages" in the left sidebar');
  console.log('4. Select "GitHub Actions" as the source');
  console.log('5. Or manually run: npx gh-pages -d dist');
  console.log('\n🌐 Your site will be available at: https://vocabfrenzy.github.io/vocabweb');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}