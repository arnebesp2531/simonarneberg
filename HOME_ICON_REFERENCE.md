# Home Icon Reference

## How to Replace the Home Icon with an Image

Currently, the navigation bar uses an SVG house icon. To replace it with a custom image (photo or drawing):

### Step 1: Prepare Your Image
1. Save your image file in the `assets/images/` folder (e.g., `home-icon.png`)
2. Recommended size: 24x24 pixels or larger (for retina displays)

### Step 2: Update the HTML
Replace the SVG code in the navigation with an `<img>` tag. Find this code in all HTML files:

**Current (SVG):**
```html
<li><a href="/" class="home-icon" title="Home">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
</a></li>
```

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

### Step 3: Adjust CSS (Optional)
The existing CSS in `css/styles.css` should work with an image, but you can customize:

```css
.main-nav a.home-icon img {
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;  /* or 'cover' depending on your image */
}
```

The CSS is set up to maintain the hover effect and styling regardless of whether you use SVG or IMG.
