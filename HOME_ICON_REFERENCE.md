# Home Icon Reference

## Current Design: Polaroid Picture Frame Icon

The navigation bar currently uses a custom SVG that looks like a miniature polaroid picture frame with a house icon inside. This design matches the polaroid aesthetic used throughout the site.

### Current Icon Design (Polaroid Frame with House)
```html
<li><a href="/" class="home-icon" title="Home">
    <svg viewBox="0 0 32 32" width="32" height="36">
        <!-- Polaroid frame background -->
        <rect x="0" y="0" width="32" height="32" fill="#4a6b7c" rx="1.5"/>
        <!-- Shadow/border for depth -->
        <rect x="0" y="0" width="32" height="32" fill="none" stroke="#3d5a68" stroke-width="0.8" rx="1.5"/>
        <!-- Photo area -->
        <rect x="3" y="3" width="26" height="20" fill="#e3e8ed"/>
        <!-- Photo border -->
        <rect x="3" y="3" width="26" height="20" fill="none" stroke="#d0d0d0" stroke-width="0.5"/>
        <!-- House icon -->
        <path d="M16 9l-7 5.5h1.5v5h4v-3.5h3v3.5h4v-5h1.5L16 9z" fill="#2d3f3a"/>
    </svg>
</a></li>
```

## How to Replace the Home Icon with an Image

To replace the polaroid SVG with a custom image (photo or drawing):

### Step 1: Prepare Your Image
1. Save your image file in the `assets/images/` folder (e.g., `home-icon.png`)
2. Recommended size: 32x36 pixels or larger (for retina displays) - portrait orientation

### Step 2: Update the HTML
Replace the SVG code in the navigation with an `<img>` tag. Find the polaroid SVG code in all HTML files and replace with:

**Replace with (Image):**
```html
<li><a href="/" class="home-icon" title="Home">
    <img src="../assets/images/home-icon.png" alt="Home">
</a></li>
```

Note: Adjust the `src` path based on the file's location:
- For pages in root folder: `assets/images/home-icon.png`
- For pages in subfolders (about, blog, etc.): `../assets/images/home-icon.png`
- For pages in blog articles: `../../assets/images/home-icon.png`

### Files to Update
All navigation bars across the site:
1. `/about/index.html`
2. `/blog/index.html`
3. `/music/index.html`
4. `/resume/index.html`
5. `/contact/index.html`
6. `/blog/rgb-color-cube/index.html`
7. `/blog/data-visualization-principles/index.html`
8. `/blog/voronoi-experiments/index.html`
9. `/stained-glass-demo/index.html`

### Step 3: Adjust CSS (Optional)
The existing CSS in `css/styles.css` should work with an image, but you can customize:

```css
.main-nav a.home-icon img {
    display: block;
    width: 32px;
    height: 36px;
    object-fit: contain;  /* or 'cover' depending on your image */
}
```

### Current CSS Styling
The home icon currently has these styles that work with the polaroid SVG:
- Transparent background (no background color change on hover)
- Drop shadow for depth that increases on hover
- 32x36 pixel size (portrait orientation - taller than wide)
- Slight upward movement on hover
- Scale and rotation animation on hover (10% larger and -6deg rotation)
- No underlines or border-bottom

The CSS is set up to work with both SVG and IMG elements.
