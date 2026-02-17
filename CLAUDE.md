# CLAUDE.md

Project instructions for Claude Code when working with simonarneberg.com

## Architecture

**Static site**: Pure HTML/CSS/JS, no build process, no framework. Deployed automatically to GitHub Pages (main branch → simonarneberg.com).

### File Structure
```
/index.html                              # Home page (flippable nav cards + photo carousel)
/about/index.html                        # About page
/blog/index.html                         # Blog listing
/blog/making-of-simonarneberg/index.html # Blog post
/blog/rgb-color-cube/index.html          # Blog post
/blog/voronoi-experiments/index.html     # Blog post
/music/index.html                        # Music page
/resume/index.html                       # Resume page
/contact/index.html                      # Contact page
/stained-glass-demo/index.html           # Interactive demo
/404.html                                # Error page (uses absolute paths)
/css/styles.css                          # Single stylesheet (2,029 lines)
/js/script.js                            # Rarely used (only in rgb-color-cube blog post)
/assets/images/favicon-pine-layered.svg  # Site favicon (SVG)
/assets/images/                          # Photos and thumbnails
/assets/pdfs/                            # PDF documents
/assets/polaroid-carousel/               # 31 photos for home page carousel
```

### Critical Path Rules
Relative paths MUST match directory depth. Wrong paths = broken site.

**Examples:**
- Root pages (`/index.html`): `css/styles.css`, `assets/images/favicon.svg`
- First-level (`/about/index.html`): `../css/styles.css`, `../assets/images/favicon.svg`
- Second-level (`/blog/post/index.html`): `../../css/styles.css`, `../../assets/images/favicon.svg`
- 404 page: Uses absolute paths `/css/styles.css` (intentional for error handling)

**Common mistakes to avoid:**
- Using `../` when at root level (breaks link)
- Using root paths when in subdirectory (breaks local testing)
- Forgetting favicon path adjustment when creating new pages

### Navigation Patterns

**Standard nav bar** (all pages except index.html):
```html
<nav class="main-nav">
    <ul>
        <li><a href="/" class="home-icon"><!-- Polaroid SVG with house icon --></a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/blog/">Projects & Ideas</a></li>
        <li><a href="/music/">Music</a></li>
        <li><a href="/resume/">Resume</a></li>
        <li><a href="/contact/">Contact</a></li>
    </ul>
</nav>
```
- Navigation links use absolute paths (e.g., `/about/`)
- Home icon is inline SVG (polaroid frame with house icon) - see [HOME_ICON_REFERENCE.md](HOME_ICON_REFERENCE.md)
- 404 page uses text-based nav instead of SVG icon

**Home page** (index.html):
- No traditional nav bar
- Flippable navigation cards with hover/click interactions
- Cards flip to show descriptions and CTAs

### JavaScript Usage

**Most interactivity uses inline `<script>` tags**, not external files:
- Home page carousel rotation (inline in index.html)
- Blog post visualizations (inline in respective posts)
- Interactive demos (inline in stained-glass-demo)

**External script** (`js/script.js`):
- Only used in `/blog/rgb-color-cube/index.html`
- Contains minimal navigation logic
- Don't assume other pages use this file

## Design System

### Oregon Coast Color Palette
16 CSS custom properties in [css/styles.css:1-19](css/styles.css):
```css
--misty-white, --fog           /* Light backgrounds */
--sand, --driftwood            /* Neutral earth tones */
--ocean, --ocean-deep, --seafoam  /* Primary blues */
--storm, --cliff, --forest-dark   /* Dark text/accents */
--charcoal, --rock             /* Grays */
--shadow, --shadow-strong, --border, --wave-mist  /* Transparencies */
```
**Always use these variables** - do not hardcode colors.

### Typography
Google Fonts (loaded in every page):
- **Playfair Display**: Headings/titles (serif)
- **Merriweather**: Body text (serif, 17px, 1.75 line-height)
- **Source Sans 3**: UI elements (sans-serif)
- **Caveat**: Handwritten accents (handwriting)

### Visual Elements
- `.paper-texture` fixed overlay on every page
- Responsive design: Mobile-first with media queries
- Hover effects on all interactive elements

## Common Tasks

### Adding a Blog Post
1. Create directory: `blog/{post-name}/`
2. Create `blog/{post-name}/index.html` (copy structure from existing post)
3. **Critical paths to check:**
   - Favicon: `<link rel="icon" ... href="../../assets/images/favicon-pine-layered.svg">`
   - CSS: `<link rel="stylesheet" href="../../css/styles.css">`
   - Nav links: Use absolute paths (`href="/about/"`)
4. Add post card to [blog/index.html](blog/index.html) with thumbnail
5. Update prev/next navigation in adjacent blog posts (currently non-functional)

### Updating Styles
- Edit [css/styles.css](css/styles.css) - single source of truth
- Changes apply site-wide immediately
- Use existing color variables for consistency

### Adding Images
- Place in `assets/images/`
- Reference with correct relative path for page depth
- SVG preferred for icons; optimize file sizes for web

### Python Resume Generator
- Run `python generate_resume.py` → outputs `Simon_Arneberg_Resume.pdf`
- Uses ReportLab library + Oregon Coast color palette
- Keep resume.py in sync with website content

## Content Philosophy

From home page: "All content is written by me (Simon), and all project and music ideas were conceptualized in my own brain. AI can be many things, and for this website I'm choosing to use it as a tool, but not a crutch."

**When editing:**
- Keep Simon's personal, authentic voice
- Avoid generic/overly formal AI language
- Maintain minimalist, rustic Oregon Coast aesthetic
- Blog posts should be substantive and original

## Documentation

- [README.md](README.md) - Project overview for GitHub visitors
- [future_ideas.md](future_ideas.md) - 100+ improvement ideas and blog post concepts
- [HOME_ICON_REFERENCE.md](HOME_ICON_REFERENCE.md) - Guide for updating nav icon SVG

## Deployment

Push to `main` branch → GitHub Pages auto-deploys → live in ~2 minutes. No build steps.
