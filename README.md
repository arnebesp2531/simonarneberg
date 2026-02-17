# Simon Arneberg - Personal Website

A minimalist, rustic personal website showcasing projects, music, and professional experience. Inspired by the Oregon Coast aesthetic.

**Live site:** [simonarneberg.com](https://simonarneberg.com)

## Overview

This is a static HTML/CSS/JavaScript website built without frameworks or build processes. All files are served directly from GitHub Pages, making it simple to maintain and fast to load.

## Features

- **Home Page**: Flippable navigation cards with a rotating polaroid photo carousel
- **About**: Personal bio and background
- **Projects & Ideas**: Blog posts featuring technical projects and creative ideas
- **Music**: Original songs with videos and lyrics
- **Resume**: Professional experience and skills
- **Contact**: Ways to get in touch
- **Custom 404**: Error page with character

## Project Structure

```
/
├── index.html                    # Home page with nav cards & carousel
├── about/index.html              # About page
├── blog/
│   ├── index.html                # Blog listing
│   ├── making-of-simonarneberg/  # Blog post
│   ├── rgb-color-cube/           # Blog post
│   └── voronoi-experiments/      # Blog post
├── music/index.html              # Music page
├── resume/index.html             # Resume page
├── contact/index.html            # Contact page
├── stained-glass-demo/index.html # Interactive demo
├── 404.html                      # Custom error page
├── css/styles.css                # Single consolidated stylesheet
├── js/script.js                  # Minimal JavaScript (rarely used)
├── assets/
│   ├── images/                   # All images + favicon
│   ├── pdfs/                     # PDF documents
│   └── polaroid-carousel/        # 31 photos for home carousel
├── generate_resume.py            # Python script to generate PDF resume
└── CLAUDE.md                     # Instructions for Claude Code
```

## Design System

### Oregon Coast Color Palette

The site uses a cohesive color palette inspired by the Oregon Coast:

- **Misty White & Fog**: Light backgrounds
- **Sand & Driftwood**: Neutral earth tones
- **Ocean, Ocean Deep & Seafoam**: Primary blues
- **Storm, Cliff & Forest Dark**: Dark text and accents
- **Charcoal & Rock**: Grays
- **Shadow & Border**: Transparency values

All colors are defined as CSS custom properties in [css/styles.css](css/styles.css).

### Typography

- **Playfair Display**: Headings and titles (serif)
- **Merriweather**: Body text (serif)
- **Source Sans 3**: UI elements (sans-serif)
- **Caveat**: Handwritten accents (handwriting)

### Visual Elements

- Paper texture overlay on every page
- Responsive mobile-first design
- Hover effects on interactive elements
- Flippable navigation cards on home page

## Development

### Prerequisites

- Any web browser for testing
- Python 3 + ReportLab (for resume generation)
- Git (for version control)

### Local Development

1. Clone the repository
2. Open any HTML file directly in a browser, or use a local server:
   ```bash
   python -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`

### Making Changes

**HTML Files**: Edit directly - no compilation needed. Changes are instant.

**Styles**: Edit [css/styles.css](css/styles.css) - single source of truth for all styling.

**Adding a Blog Post**:
1. Create directory: `blog/{post-name}/`
2. Create `blog/{post-name}/index.html` (copy from existing post)
3. Update relative paths for CSS, favicon, and assets (use `../../`)
4. Add blog card to [blog/index.html](blog/index.html)

**Generating Resume PDF**:
```bash
python generate_resume.py
```
Outputs `Simon_Arneberg_Resume.pdf` with the same Oregon Coast styling as the website.

## Deployment

The site is automatically deployed via GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Pages automatically rebuilds
3. Changes are live at simonarneberg.com within 2-3 minutes

**Custom domain configured via `CNAME` file** - do not edit unless changing the domain.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Hosting**: GitHub Pages (free static hosting)
- **Domain**: Custom domain via Namecheap DNS
- **Fonts**: Google Fonts
- **Development**: Built with assistance from Claude Code

## Content Philosophy

> "All content is written by me (Simon), and all project and music ideas were conceptualized in my own brain. AI can be many things, and for this website I'm choosing to use it as a tool, but not a crutch."

This site is a place to:
- Share ideas with the world
- Grow technical and creative skills
- Maintain an authentic, personal voice

## Browser Support

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Contributing

This is a personal website, so I'm not accepting contributions. However, feel free to fork and adapt for your own use!

## License

© 2026 Simon Arneberg. All rights reserved.

## Contact

- **LinkedIn**: [Simon Arneberg](https://www.linkedin.com/in/simon-arneberg-007a651b9/)
- **GitHub**: [@arnebesp2531](https://github.com/arnebesp2531)
- **Email**: Via [contact page](https://simonarneberg.com/contact/)
- **Music**: Simon Paul Arneberg on streaming platforms
