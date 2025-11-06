# Quick Update Instructions

This package contains ONLY the new and changed files. You can add these to your existing project folder.

## Files Included

### New Files (7 thumbnail images):
- `client/public/assets/thumb-poster-circadian-ventilation-2015.jpg`
- `client/public/assets/thumb-poster-irr-tool-2022.jpg`
- `client/public/assets/thumb-poster-neuroscience-2009-ascb.jpg`
- `client/public/assets/thumb-poster-neuroscience-2010-sfn.jpg`
- `client/public/assets/thumb-poster-newborn-drops-2024.jpg`
- `client/public/assets/thumb-poster-nsqip-sampling-2017.jpg`
- `client/public/assets/thumb-poster-pneumonia-2023.jpg`
- `client/public/404.html` (NEW - for GitHub Pages routing)

### Updated Files:
- `client/index.html` (added redirect script)
- `client/src/pages/Home.tsx` (added thumbnail displays)

## How to Update Your Desktop Folder

1. **Extract this ZIP** to a temporary location
2. **Copy the files** maintaining the folder structure:
   - Copy all 7 `thumb-*.jpg` files → into your desktop `sheena-portfolio/client/public/assets/` folder
   - Copy `404.html` → into your desktop `sheena-portfolio/client/public/` folder
   - **Replace** `index.html` → in your desktop `sheena-portfolio/client/` folder
   - **Replace** `Home.tsx` → in your desktop `sheena-portfolio/client/src/pages/` folder

3. **Open GitHub Desktop**
4. You'll see these changes:
   - 7 new thumbnail images
   - 1 new 404.html file
   - 2 modified files (index.html and Home.tsx)

5. **Commit** with message: "Add poster thumbnails and fix 404 routing"
6. **Push** to GitHub

That's it! GitHub Actions will automatically deploy the updates.

## What Changed

- **Thumbnails**: Visual previews now appear next to poster citations
- **404 Fix**: Direct URL access now works properly on GitHub Pages
- **Routing**: Client-side navigation improved with redirect script
