# GitHub Pages Deployment Guide

This guide will help you deploy your professional portfolio to GitHub Pages, giving you a free, professional URL that you can share via QR code.

## Prerequisites

- A GitHub account (free) - Sign up at [github.com](https://github.com)
- Git installed on your computer (or use GitHub Desktop)

## Step 1: Prepare the Project for GitHub Pages

The project is already configured for deployment. Here's what's set up:

- **Build output**: The site will be built to the `dist` folder
- **Base path**: Configured for GitHub Pages subdirectory deployment
- **Assets**: All your PDFs, images, and documents are in `client/public/assets`

## Step 2: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository (e.g., `sheena-keding-portfolio`)
5. Set it to **Public** (required for free GitHub Pages)
6. Do NOT initialize with README, .gitignore, or license
7. Click **Create repository**

## Step 3: Upload Your Portfolio

### Option A: Using Git Command Line

```bash
# Navigate to your portfolio folder
cd /path/to/sheena-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop (Easier for Non-Developers)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop and sign in with your GitHub account
3. Click **File** → **Add Local Repository**
4. Select your portfolio folder
5. Click **Publish repository**
6. Ensure the repository name matches what you created
7. Click **Publish Repository**

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. GitHub will automatically detect the Vite configuration and deploy

## Step 5: Set Up Automatic Deployment

Create a GitHub Actions workflow file:

1. In your repository, create folder: `.github/workflows/`
2. Create file: `.github/workflows/deploy.yml`
3. Add this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 6: Update Vite Configuration

Update `vite.config.ts` to set the correct base path:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repository name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  // ... rest of config
});
```

## Step 7: Access Your Live Portfolio

After deployment (usually 2-5 minutes):

1. Your portfolio will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`
2. Check the **Actions** tab in your repository to monitor deployment status
3. Once complete, visit your live site!

## Step 8: Generate QR Code for Sharing

### Option 1: Online QR Code Generators (Recommended)

1. Go to [qr-code-generator.com](https://www.qr-code-generator.com/) or [qrcode-monkey.com](https://www.qrcode-monkey.com/)
2. Enter your GitHub Pages URL: `https://YOUR-USERNAME.github.io/REPO-NAME/`
3. Customize the QR code design (optional):
   - Add your professional photo in the center
   - Use your portfolio colors (teal/blue theme)
   - Add a frame with text like "Scan to view my portfolio"
4. Download as PNG or SVG (high resolution for printing)
5. Use on business cards, resumes, or presentations

### Option 2: Using Google Chrome

1. Open your portfolio URL in Chrome
2. Click the share icon in the address bar
3. Select "Create QR Code"
4. Download or print the QR code

### Option 3: Command Line (for developers)

```bash
# Install qrcode generator
npm install -g qrcode

# Generate QR code
qrcode "https://YOUR-USERNAME.github.io/REPO-NAME/" -o portfolio-qr.png
```

## Step 9: Custom Domain (Optional)

If you want a custom domain like `sheenakeding.com`:

1. Purchase a domain from a registrar (Namecheap, Google Domains, etc.)
2. In your repository settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"
3. Add DNS records at your domain registrar:
   - Type: `A` Record
   - Host: `@`
   - Points to: GitHub Pages IPs
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
4. Wait for DNS propagation (can take 24-48 hours)

## Updating Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

## Troubleshooting

### Site not loading
- Check the Actions tab for build errors
- Ensure GitHub Pages is enabled in Settings → Pages
- Verify the `base` path in `vite.config.ts` matches your repo name

### Images not showing
- Ensure all image paths start with `/assets/`
- Check that files are in `client/public/assets/`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### PDF downloads not working
- Verify PDFs are in `client/public/assets/`
- Check file names match exactly (case-sensitive)
- Ensure files were committed to git

## Alternative Deployment Options

If you prefer not to use GitHub Pages:

1. **Netlify** - Drag and drop the `dist` folder at [netlify.com](https://netlify.com)
2. **Vercel** - Import from GitHub at [vercel.com](https://vercel.com)
3. **Cloudflare Pages** - Deploy from GitHub at [pages.cloudflare.com](https://pages.cloudflare.com)

All offer free hosting with custom domains and automatic HTTPS!

## Support

For questions about GitHub Pages, see the [official documentation](https://docs.github.com/en/pages).

---

**Your portfolio is now ready to share with prospective employers via QR code!** 🎉
