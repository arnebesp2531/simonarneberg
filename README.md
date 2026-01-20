# Simon Arneberg - Personal Website

A minimalist, rustic personal website showcasing work, projects, music, and professional experience.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Clean Navigation**: Simple page switching with smooth transitions
- **About Section**: Profile picture and bio
- **Projects Showcase**: Grid layout for highlighting your work
- **Resume/CV**: Professional experience and education
- **Music & Videos**: Embedded YouTube video and music links
- **Blog**: Space for future thoughts and articles

## Files

- `personalwebsite.html` - Main HTML structure
- `styles.css` - All styling and design
- `script.js` - Page navigation and interactions
- `Simon_headshot_zoomed_in_2.png` - Profile picture

## How to Use

1. Open `personalwebsite.html` in any web browser
2. Navigate between pages using the menu at the top
3. All pages load instantly without page refreshes

## Customization

### Updating Your Information

**About Page** ([personalwebsite.html:47-62](personalwebsite.html#L47-L62))
- Edit the bio text to match your current experience
- Replace the profile picture by updating the image file or changing the src attribute

**Projects** ([personalwebsite.html:83-103](personalwebsite.html#L83-L103))
- Update project titles, descriptions, and tags
- Add more project cards by copying the `.project-card` structure

**Resume** ([personalwebsite.html:109-138](personalwebsite.html#L109-L138))
- Update job titles, companies, and dates
- Modify skills and education sections
- Add or remove resume items as needed

**Music & Videos** ([personalwebsite.html:143-162](personalwebsite.html#L143-L162))
- Replace the YouTube embed URL to feature different videos
- Update the Spotify link or add other streaming platforms

**Blog** ([personalwebsite.html:69-77](personalwebsite.html#L69-L77))
- Add blog posts by creating new `.blog-post` article elements
- Include post titles, dates, and content

### Design Customization

**Colors** ([styles.css:1-11](styles.css#L1-L11))
Edit CSS variables in `:root`:
- `--paper`: Background color
- `--ink`: Primary text color
- `--accent`: Links and highlights
- `--border`: Border colors

**Fonts**
Current fonts: EB Garamond (headings) and Lora (body text)
To change, update the Google Fonts link in [personalwebsite.html:10](personalwebsite.html#L10) and the font-family properties in [styles.css](styles.css)

**Layout**
- Page width: Adjust `max-width` in `.container` ([styles.css:106](styles.css#L106))
- Spacing: Modify padding values throughout [styles.css](styles.css)

## Technical Details

- Pure HTML, CSS, and JavaScript - no frameworks required
- Uses CSS Grid and Flexbox for responsive layouts
- Google Fonts for typography (EB Garamond, Lora)
- Single-page application with hash-based navigation
- Subtle paper texture overlay for authentic feel

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Future Enhancements

Ideas for expansion:
- Add a contact form
- Create a blog with actual posts
- Add more project details with images
- Include testimonials or recommendations
- Add dark mode toggle
- Connect to a CMS for easier content updates

## Credits

Website designed for Simon Arneberg
- Data Analyst at Hewlett Packard Enterprise
- Musician (Simon Paul Arneberg)
- University of Wisconsin-Eau Claire alumnus
