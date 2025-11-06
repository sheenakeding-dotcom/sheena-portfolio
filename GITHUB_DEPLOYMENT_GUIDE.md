# Complete GitHub Pages Deployment & Update Guide

## Table of Contents
1. [Initial Setup & Deployment](#initial-setup--deployment)
2. [Updating Your Portfolio](#updating-your-portfolio)
3. [Generating QR Codes](#generating-qr-codes)
4. [Troubleshooting](#troubleshooting)

---

## Initial Setup & Deployment

### Prerequisites
- A GitHub account (free) - Sign up at https://github.com/signup if you don't have one
- Your portfolio files (you have these already!)

### Step 1: Create a GitHub Repository

1. **Log in to GitHub** at https://github.com
2. **Click the "+" icon** in the top-right corner
3. **Select "New repository"**
4. **Fill in the repository details:**
   - **Repository name:** `portfolio` (or any name you prefer, like `sheena-keding-portfolio`)
   - **Description:** "Professional portfolio for Sheena Keding, MSN, RN, CNS"
   - **Public/Private:** Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize this repository with a README"
5. **Click "Create repository"**

### Step 2: Download Your Portfolio Files

1. **Download all project files** from the Manus platform:
   - Click the "Code" button in the Management UI (right panel)
   - Click "Download All Files" at the bottom
   - Save the ZIP file to your computer
   - **Extract the ZIP file** to a folder (e.g., `sheena-portfolio`)

### Step 3: Install Git (One-Time Setup)

**For Windows:**
1. Download Git from https://git-scm.com/download/win
2. Run the installer
3. Use default settings (just click "Next" through all options)
4. After installation, open "Git Bash" from the Start menu

**For Mac:**
1. Open Terminal (Applications → Utilities → Terminal)
2. Type: `git --version` and press Enter
3. If Git is not installed, macOS will prompt you to install it

**For Linux:**
- Open Terminal and run: `sudo apt-get install git` (Ubuntu/Debian)

### Step 4: Upload Files to GitHub

**Option A: Using GitHub Desktop (Easiest for Beginners)**

1. **Download GitHub Desktop** from https://desktop.github.com
2. **Install and open GitHub Desktop**
3. **Sign in** with your GitHub account
4. **Click "Add" → "Add Existing Repository"**
5. **Browse to your extracted portfolio folder** (e.g., `sheena-portfolio`)
6. **If prompted** "This directory does not appear to be a Git repository", click **"create a repository"**
7. **Click "Publish repository"** in the top bar
8. **Uncheck "Keep this code private"** (required for free GitHub Pages)
9. **Click "Publish Repository"**

**Option B: Using Command Line**

1. **Open Terminal (Mac/Linux) or Git Bash (Windows)**
2. **Navigate to your portfolio folder:**
   ```bash
   cd /path/to/sheena-portfolio
   ```
   (Replace `/path/to/` with the actual location, e.g., `cd ~/Downloads/sheena-portfolio`)

3. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

4. **Connect to GitHub** (replace `YOUR-USERNAME` and `portfolio` with your actual GitHub username and repository name):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

5. **Enter your GitHub credentials** when prompted

### Step 5: Enable GitHub Pages

1. **Go to your repository** on GitHub (https://github.com/YOUR-USERNAME/portfolio)
2. **Click "Settings"** (tab at the top)
3. **Click "Pages"** in the left sidebar
4. **Under "Build and deployment":**
   - **Source:** Select "GitHub Actions"
5. **The deployment workflow is already configured!** 
   - A file called `.github/workflows/deploy.yml` is included in your project
   - GitHub will automatically build and deploy your site

### Step 6: Wait for Deployment (2-5 minutes)

1. **Click the "Actions" tab** at the top of your repository
2. **You'll see a workflow running** (yellow dot = in progress, green checkmark = complete)
3. **Wait for the green checkmark** ✓
4. **Go back to Settings → Pages**
5. **Your site URL will appear** at the top: `https://YOUR-USERNAME.github.io/portfolio/`

### Step 7: Test Your Site

1. **Click the URL** or copy it into your browser
2. **Your portfolio should be live!**
3. **Bookmark this URL** - this is what you'll share with employers

---

## Updating Your Portfolio

### When to Update
- Adding new publications or presentations
- Updating links (MedNavigator, PAFOs.ai, Tellurian Heart Books)
- Adding new certifications or projects
- Uploading the ATNC logo when available
- Adding new images or documents

### Method 1: Using GitHub Web Interface (Easiest)

**For Text Changes (Publications, Descriptions, Links):**

1. **Go to your repository** on GitHub
2. **Navigate to the file** you want to edit:
   - Most content is in: `client/src/pages/Home.tsx`
3. **Click the file name** to open it
4. **Click the pencil icon** (✏️ Edit) in the top-right
5. **Make your changes** directly in the browser
6. **Scroll down** to "Commit changes"
7. **Add a commit message** (e.g., "Added new publication")
8. **Click "Commit changes"**
9. **Wait 2-5 minutes** for automatic redeployment
10. **Refresh your portfolio URL** to see changes

**For Adding Images/PDFs:**

1. **Go to your repository** on GitHub
2. **Navigate to:** `client/public/assets/`
3. **Click "Add file" → "Upload files"**
4. **Drag and drop** your images/PDFs
5. **Add a commit message** (e.g., "Added ATNC logo")
6. **Click "Commit changes"**
7. **Update the code** to reference the new file (see examples below)

### Method 2: Using GitHub Desktop (For Multiple Changes)

1. **Open GitHub Desktop**
2. **Select your portfolio repository** from the list
3. **Click "Fetch origin"** to get latest changes
4. **Open the folder** by clicking "Repository" → "Show in Finder/Explorer"
5. **Edit files** using any text editor (VS Code, Notepad++, etc.)
6. **Save your changes**
7. **Return to GitHub Desktop** - you'll see changed files listed
8. **Add a summary** in the bottom-left (e.g., "Updated publications")
9. **Click "Commit to main"**
10. **Click "Push origin"** to upload changes
11. **Wait 2-5 minutes** for redeployment

### Important Note About CV Download

**Your CV is already included!** The file `2025_OctCV_SheenaKeding_.pdf` is already in the `client/public/assets/` folder and properly linked. The Download CV buttons in both the hero section and contact section will work automatically once deployed to GitHub Pages.

**If you need to update your CV:**
1. Upload the new CV file to `client/public/assets/`
2. Name it `2025_OctCV_SheenaKeding_.pdf` (or update the filename in the code)
3. The links will automatically work with the new file

### Common Updates - Quick Reference

#### Adding a New Publication

**File to edit:** `client/src/pages/Home.tsx`

**Find the Publications section** and add your new entry:

```tsx
<div className="border-l-4 border-primary pl-4">
  <p className="text-sm font-medium text-foreground mb-2">
    Author, A., Author, B., & Keding, S. (2025, Month). Title of Publication. 
    [Poster presentation]. Conference Name, Location.
  </p>
  <Button variant="link" size="sm" className="h-auto p-0" asChild>
    <a href="/assets/your-poster-file.pdf" target="_blank">
      <FileText className="mr-2 h-4 w-4" />
      View Poster
    </a>
  </Button>
</div>
```

#### Adding the ATNC Logo

1. **Upload logo** to `client/public/assets/` (name it `atnc-logo.png` or `.svg`)
2. **Edit** `client/src/pages/Home.tsx`
3. **Find the ATNC project section** (search for "ATNC")
4. **Replace the placeholder div** with:

```tsx
<img 
  src="/assets/atnc-logo.png" 
  alt="ATNC - Advanced Technology Nursing Certification" 
  className="h-16 w-16 object-contain"
/>
```

5. **Remove the placeholder div:**
```tsx
<!-- DELETE THIS: -->
<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
  <span className="text-2xl font-bold text-primary">ATNC</span>
</div>
```

#### Updating Links (MedNavigator, PAFOs.ai, etc.)

**File to edit:** `client/src/pages/Home.tsx`

**Find the text** `(MedNavigator link TBD)` or `(PAFOs.ai link TBD)`

**Replace with:**
```tsx
<Button variant="outline" size="sm" asChild>
  <a href="https://your-actual-link.com" target="_blank" rel="noopener noreferrer">
    <ExternalLink className="mr-2 h-4 w-4" />
    View Live Demo
  </a>
</Button>
```

#### Adding a New Project

**File to edit:** `client/src/pages/Home.tsx`

**Find the Projects section** and add before the closing `</div>`:

```tsx
<Card>
  <CardHeader>
    <div className="flex items-center gap-4">
      <img 
        src="/assets/your-project-logo.png" 
        alt="Project Name" 
        className="h-16 w-16 object-contain"
      />
      <div>
        <CardTitle>Your Project Name</CardTitle>
        <CardDescription>Brief Description</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-foreground/80 mb-4">
      Detailed description of your project and your role.
    </p>
    <div className="flex gap-2">
      <Badge variant="secondary">Tag 1</Badge>
      <Badge variant="secondary">Tag 2</Badge>
    </div>
  </CardContent>
</Card>
```

---

## Generating QR Codes

### Step 1: Get Your Portfolio URL

Your GitHub Pages URL format: `https://YOUR-USERNAME.github.io/portfolio/`

**Example:** If your username is `sheenakeding`, the URL would be:
`https://sheenakeding.github.io/portfolio/`

### Step 2: Generate QR Code

**Option A: QR Code Generator (Recommended)**

1. **Go to:** https://www.qr-code-generator.com
2. **Select "URL"** as the content type
3. **Paste your portfolio URL**
4. **Customize (optional):**
   - Add a frame with text like "Sheena Keding - Portfolio"
   - Change colors to match your brand
   - Add your professional photo in the center
5. **Download as PNG or SVG** (high resolution for printing)
6. **Choose "High Quality"** for conference materials

**Option B: QR Code Monkey (More Customization)**

1. **Go to:** https://www.qrcode-monkey.com
2. **Enter your portfolio URL**
3. **Customize:**
   - **Colors:** Match your portfolio theme (teal/blue)
   - **Logo:** Upload your professional photo or initials
   - **Design:** Choose a style
4. **Download as PNG** (at least 1000x1000 pixels for printing)

**Option C: Google Chrome (Quick & Simple)**

1. **Open your portfolio** in Google Chrome
2. **Click the address bar**
3. **Click the QR code icon** on the right
4. **Click "Download"**
5. **Save the QR code image**

### Step 3: Test Your QR Code

1. **Open your phone's camera app**
2. **Point at the QR code** on your computer screen
3. **Tap the notification** that appears
4. **Verify it opens your portfolio**

### Step 4: Prepare for Printing

**For Business Cards:**
- Size: 1-2 inches (300+ DPI)
- Format: PNG or vector (SVG)
- Include text: "Scan for Digital Portfolio"

**For Conference Posters:**
- Size: 3-4 inches (300+ DPI)
- Add border and instructions
- Test from 3-4 feet away

**For Name Tags/Badges:**
- Size: 1 inch (300+ DPI)
- High contrast (black on white works best)

### Recommended QR Code Placement

- **Business cards:** Back of card with "Digital Portfolio" text
- **Conference poster:** Bottom-right corner with arrow and text
- **Resume:** Header or footer with "View full portfolio"
- **Email signature:** Small QR code with link text

---

## Troubleshooting

### Site Not Deploying

**Problem:** Changes not appearing after 5+ minutes

**Solutions:**
1. Check **Actions tab** - look for red X (failed build)
2. Click the failed action to see error details
3. Common fix: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Verify the workflow file exists: `.github/workflows/deploy.yml`

### 404 Error When Visiting Site

**Problem:** "404 - File not found"

**Solutions:**
1. Verify repository is **Public** (Settings → General)
2. Check **Settings → Pages** shows the correct URL
3. Wait 5-10 minutes after first deployment
4. Ensure you're using the correct URL format

### Images Not Showing

**Problem:** Broken image icons on the site

**Solutions:**
1. Verify image is in `client/public/assets/` folder
2. Check file name matches exactly (case-sensitive!)
3. Use correct path: `/assets/filename.jpg` (not `./assets/` or `assets/`)
4. Supported formats: JPG, PNG, SVG, PDF

### QR Code Not Working

**Problem:** QR code doesn't scan or goes to wrong page

**Solutions:**
1. Verify URL is correct (no typos)
2. Test with multiple QR code readers
3. Increase QR code size (minimum 1 inch for printing)
4. Ensure high contrast (dark on light background)
5. Don't over-customize - simpler QR codes scan better

### Need to Rename Repository

**Problem:** Want to change `portfolio` to something else

**Steps:**
1. Go to **Settings** in your repository
2. Scroll to **Repository name**
3. Enter new name
4. Click **Rename**
5. **Important:** Your URL will change to `https://USERNAME.github.io/NEW-NAME/`
6. Update any QR codes or printed materials!

### Accidentally Deleted Files

**Problem:** Deleted important files

**Solutions:**
1. Go to **repository** on GitHub
2. Click **Commits** (clock icon)
3. Find commit before deletion
4. Click **<>** (Browse files at this point in history)
5. Download files you need
6. Re-upload to current version

---

## Quick Reference Commands

### Git Command Line Basics

```bash
# Check status of changes
git status

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull

# See commit history
git log --oneline
```

### File Locations

- **Main content:** `client/src/pages/Home.tsx`
- **Images/PDFs:** `client/public/assets/`
- **Styling:** `client/src/index.css`
- **Site title:** `client/index.html`

---

## Getting Help

### GitHub Resources
- **GitHub Docs:** https://docs.github.com
- **GitHub Pages Guide:** https://pages.github.com
- **GitHub Community:** https://github.community

### Learning Resources
- **Git Basics:** https://try.github.io
- **Markdown Guide:** https://www.markdownguide.org
- **React Basics:** https://react.dev/learn

### Support Contacts
- **GitHub Support:** https://support.github.com
- **Stack Overflow:** https://stackoverflow.com (tag: github-pages)

---

## Maintenance Checklist

### Monthly
- [ ] Check for broken links
- [ ] Update publications list
- [ ] Verify all PDFs are accessible
- [ ] Test QR code functionality

### After Conferences
- [ ] Add new presentations
- [ ] Upload poster abstracts
- [ ] Update project status

### Annually
- [ ] Update CV
- [ ] Review all content for accuracy
- [ ] Update professional photo if needed
- [ ] Regenerate QR codes if URL changed

---

**Last Updated:** November 2025  
**Portfolio Version:** 1.0  
**Deployment Platform:** GitHub Pages  
**Framework:** React + Vite
