# Sheena Keding - Professional Portfolio

A modern, responsive portfolio website showcasing professional experience, publications, and credentials in pediatric healthcare quality and safety.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Professional Theme**: Clean healthcare/academic color scheme with teal and warm accents
- **Complete CV Integration**: Downloadable CV and linked publications
- **JBI Publications**: Direct links to video commentaries and research
- **Contact Information**: LinkedIn profile and email contact
- **Projects Showcase**: Tellurian Heart Books publishing initiative
- **Document Library**: Scanned abstracts and book PDFs available for viewing

## 🛠️ Technology Stack

- **React 19**: Modern UI framework
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling
- **Vite**: Fast build tool and dev server
- **shadcn/ui**: Beautiful, accessible components
- **Lucide Icons**: Professional iconography

## 📦 Project Structure

```
sheena-portfolio/
├── client/
│   ├── public/
│   │   └── assets/          # PDFs, images, documents
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── App.tsx          # Main app component
│   │   └── index.css        # Global styles & theme
│   └── index.html           # HTML entry point
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
└── DEPLOYMENT_GUIDE.md      # Detailed deployment instructions
```

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The site will be available at `http://localhost:3000`

## 🌐 Deployment to GitHub Pages

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete step-by-step instructions.

### Quick Deployment Steps:

1. Create a GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. The site will automatically deploy via GitHub Actions

Your portfolio will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

### Important: Update Base Path

Before deploying, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your actual repository name
  // ... rest of config
});
```

## 📱 QR Code Generation

After deployment, generate a QR code for easy sharing:

1. Visit [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Enter your GitHub Pages URL
3. Customize with your portfolio colors
4. Download and use on business cards, resumes, or presentations

## 🎨 Customization

### Theme Colors

Edit `client/src/index.css` to customize the color palette:

```css
:root {
  --primary: oklch(0.45 0.12 220);      /* Teal blue */
  --accent: oklch(0.65 0.18 40);        /* Warm orange */
  /* ... other colors */
}
```

### Content Updates

- **Profile Information**: Edit `client/src/pages/Home.tsx`
- **Documents**: Replace files in `client/public/assets/`
- **Links**: Update URLs in the Home component

## 📄 Included Documents

- Professional CV (PDF)
- Professional photo
- JBI video commentary link
- Research abstracts
- Book PDFs
- Tellurian Heart Books logo

## 🔗 External Links

- **LinkedIn**: [linkedin.com/in/sheena-keding](https://www.linkedin.com/in/sheena-keding)
- **JBI Video**: [Pediatric Fall Prevention Commentary](https://journals.lww.com/ijebh/pages/video.aspx?v=56)

## 📧 Contact

- **Email**: sheena.keding@gmail.com
- **LinkedIn**: [linkedin.com/in/sheena-keding](https://www.linkedin.com/in/sheena-keding)

## 📝 License

© 2025 Sheena Keding. All rights reserved.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
