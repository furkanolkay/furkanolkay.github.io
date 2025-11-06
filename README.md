# Furkan Olkay - Personal Website

Personal website migrated from Hugo to Astro.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── img/          # Static images
│   ├── projects/     # Project images
│   └── ...
├── src/
│   ├── components/   # Reusable components
│   ├── content/
│   │   ├── blog/     # Blog posts (Markdown)
│   │   └── projects/ # Project descriptions (Markdown)
│   ├── layouts/      # Page layouts
│   └── pages/        # Pages and routes
└── astro.config.mjs  # Astro configuration
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new Markdown file in `src/content/blog/`
2. Add frontmatter with required fields:
   - `title`: Post title
   - `date`: Publication date
   - `tags`: Array of tags
   - `draft`: Boolean (optional, defaults to false)

Example:
```markdown
---
title: My New Blog Post
date: 2024-01-15
tags: ["Flutter", "Mobile"]
draft: false
---

Your content here...
```

### Adding Projects

1. Create a new Markdown file in `src/content/projects/`
2. Add frontmatter with required fields:
   - `title`: Project title
   - `tags`: Array of tags
   - `cover.image`: Cover image filename (should be in `public/projects/`)

Example:
```markdown
---
title: My New Project
tags: ["Flutter", "App"]
cover:
  image: "project-image.png"
---

Project description...
```

## 🎨 Styling

The site uses a custom CSS theme inspired by PaperMod. Styles are defined in `src/layouts/BaseLayout.astro` using CSS variables for easy theming.

## 🔧 Configuration

- `astro.config.mjs`: Main Astro configuration including integrations (sitemap, RSS)
- `src/content/config.ts`: Content collection schemas

## 📦 Key Features

- ✅ Blog posts with Markdown support
- ✅ Project showcase
- ✅ RSS feed (`/rss.xml`)
- ✅ Sitemap (auto-generated)
- ✅ Search functionality
- ✅ Archives page
- ✅ Responsive design
- ✅ SEO optimized

## 🚢 Deployment

The site is configured for static hosting. Build the site and deploy the `dist/` directory to your hosting provider.

For GitHub Pages:
1. Build the site: `npm run build`
2. Push the `dist/` directory to your `gh-pages` branch or configure GitHub Actions

## 📄 License

All content © Furkan Olkay. All rights reserved.

