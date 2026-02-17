# Future Ideas

A running list of ideas for website improvements, blog posts, and other future enhancements.

---

## Website Page Improvements

- [ ] **Home page**
    - add a "click through the photos -->" annotation to guide the user? 
    - add a subtle dynamic background to the site? (idea: moving voronoi with mouse as dynamic point)
- [ ] **About page**
    - Write the story of who I am, what I do, and what I think about the world.
    - Fave a "favorites" section, where I list some of my favorite books, movies, songwriters, hobbies, inventors, etc etc
    - Make an interative timeline of my life? (could also replace the current "Resume" page...)
        - Could be a vertical timeline along the side of the page that shows a ton of major events from my life (both personally and projessionally)
        - make it interactive by having a "click to expand" section ? ()
    - Far in the future
        - Make "currently reading" section that integrates with Goodreads API to get the book I'm reading
        - Make "currently listening to" section that integrates with Spotify API to show my top artist over the past 30 days.
        - Create a photo directory system
- [ ] **Blog page**
    - Add tags to blog posts (keep them simple), then have a tag filter at the top of the page (data visualization, random thoughts, geometry, nature mimicry, etc)
    - Add a little blurb about my intent for the blog posts
    - Add a "no AI used to write the actual content" disclaimer at the top or bottom of the page
    - Fix the Prev/Next buttons at the bottom of the blogs... non-functional at the moment.
    - Add a search bar to the blog page (and search text within each entire article)?
    - Make the thumbnail photos into gifs?
    - Far in the future
        - show the number of comments / thumbs up for each article
- [ ] **Resume page**
    - Either make it match my actual resume, or replace the entire page with the interactive professional timeline (see About, above)
    - Ideally, it contains more information than I could fit on a single-page resume, and with a lot more of my humanity/voice shown. Written in a more candid and detailed style.
- [ ] **Contact page**
    - Keep it pretty simple
- [ ] **Hidden pages**
    - asdf

## Blog / Project Ideas

- [ ] **"How I built this website using Claude Code"** - Technical overview of how I made this site, and the process I followed
    - detail my intent behind the site - a place to share my ideas with the world, and a chance to grow my technical and creative skills.
    - show how the site has changed as I continue to update it
    - delve deeper into Claude usage statistics ?? (actual cost of API tokens  ?)
    - give my honest thoughts about the state of AI -- my skepticism, my hesitancy, and my excitement.
    - how I actually built the site, what technical tools/skills I used, how someone else might recreate my process to make their own site.
- [ ] **"Stained glass helper tool"** - Make an interactive tool to help with design process
    - User uploads a photo (optional) into the design editor window, and then clicks to add points on top of it.   
        - User also gets to define an aspect ratio (and an actual size in inches ?? Maybe the true size will be in the print/output portion)
    - Zoom in/out functionality in the editing window for more precise point placement
    - Draw connecting lines:
        - "automatic" mode - draws straight connecting lines with rules like no concave polygons, min angle limit. If it's not possible to create legal lines, it will automatically create another point halfway along a connecting line and try again.
        - "manual" mode - no rules, just connect whichever points together that you'd like. Choose straight line or curved line (creates smooth curve based on multiple points in sequence)
    - Automatic problem area detection:
        - highlight angles which are below min angle threshold (red = past threshold, yellow = might be tight)
        - highlight any connecting lines which cross over one another (not possible in real life)
        - highlight any curves with a tight curve (glass tends to break poorly when too tightly curved)
    - There is a counter at the top that displays design project stats: 
        - current number of glass pieces (total # polygons) 
        - total # inches of copper tape required (border length + 2 x all interior line length) -- would require an output len/width specified (or implied)
        - est material cost (assume glass = ~$25 / sq ft, and copper tape = $20 / 36 ft ) ??
    - The user can print out their design (with or without the image below it)
- [ ] **"Portland, land of the winter sun?"** - Was this (sunny/clear) winter in Portland an anomaly? How rare?
    - compare annual and weekly precip totals & cloud cover
    - determine whether this January is a statistical outlier, then make scatter plots, etc. 
- [ ] **"Run, Martin, Run!"** - mini interactive animation
    - Behind the scenes, I will draw many individual frames of Martin (stick figure who I will draw by hand) in various positions in the run/walk cycles. These individual frames would stored in a folder which this page would reference.
    - Here's how the actual interactive animation goes:
        - Martin stands in the center of the screen, cycling through 3-5 'standing' frames. There is a small instruction above him. 
        - The user clicks a single button or the animation screen ("Go!"), and then martin begins to cycle through a slow walk cycle. 
        - Based on the average frequency of the clicks in the past ~2 seconds, Martin begins to speed up (or slow down, or maintain pace).
        - When he "speeds up", he is merely switching from 
- [ ] **"Overtone Series, Explained"** - demonstration of simple harmonics in open string
    - user "plays" a string by clicking it
    - have adjustable length strings, and demonstrate 
- [ ] **"Running the Entire English Alphabet"** - Strave alphabet series, parts I-XXVI
    - Go through my alphabet running series on Strava
    - perform some analysis? Heat map? Or simple aggregates?
- [ ] **"Trapezoidal Numbering System"** - using only 7 (8?) trapezoids
    - just show my notebook page, then make a digital version. 
    - Then type out pi using that font
- [ ] **"Making My Own Font"** - a font with no crossing over itself
    - Write out the titles of the blog post in the digitized font?
- [ ] **"Graphing The Effects of Continual Change"** - when is change helpful?
    - Reference my hand-drawn graph of overlapping effort in change
    - Digitize this graph? 
    - Propose a formula or a simple axiom for when change is worth it (and when it will only introduce more churn)? "Arneberg's law" haha
    - Pain: relate this curve to Dan Ariely's findings in Predictably Irrational
        - We think we want the "rip the bandaid", but we actually prefer the slower, less intense pain for longer in retrospect
        - Does this apply here? I feel like I would expect the opposite to actually be best for an organization/employee -- 
    - Main Takeaway: it's worth it to do it right the first time
        - No matter how you slice it, changing from solution A to B, then B to C soon thereafter is going to erode trust and build resentment. 
        - "if you're going to do it, do it right" - me
        - The time upront to plan end-to-end is your investment towards minimizing this pain/effort curve.
        - "Choose your pain" - atomic habits maybe ? 
- [ ] **"Proxy Measures & the Mind"** - My presentation that I gave for InterWorks final interview
    - Make the slides look pretty, and just write about what I talked about
        - Proxy measures in the physiological body, and elsewhere
        - Goodhart's Law - measures and targets
        - Application
- [ ] **"Some sort of word game?"** - Some sort of daily Wordle / Strands / linkedin game variant
    - would need to come up with more ideas for this - there are many potential options that could exist


## Features to Explore

- [ ] Make the website fully functional with a database, so I can store information and display info. 
    - Would require hosting on a digitalocean server or equivalent (instead of GitHub Pages for static html, as currenty implemented).
    - would cost more $ to host (unless self-hosted, which would be ureliable)
    - would be good experience 
    - Create a blog post backend form that I fill out in the UI itself (desktop or mobile)
        - changes are pushed to the server, and the website updates
        - would require authentication method ? 
        - would make the blog easier to maintain (especially if I lost access to Claude)...
        - would cost more $$ to maintain and host
        - Would make it so that I could potentially make updates from my phone (e.g. on a bike trip, I just make periodic updates to the blog with photos from my camera roll)
            - I really like this idea, actually!
- [ ] Start a mailing list ? 
    - Contact page signup for mailing list... Far in the future, once I have enough that I'd actually want to say (full-time music?)
- [ ] Featured projects
    - featured on Home page, or featured on Blog page

## Random Ideas

- [ ] create a fun "404 - page not found " (think chrome dino game, for example)
- [ ] Display a counter that shows how many unique visitors have accessed the home page. (not sure if possible in static html...)
- [ ] Create a 

---

## Architect Suggestions for Best Practice

### Technical Debt & Cleanup

1. [🟡] **Delete obsolete root-level duplicates**
   - Remove `/styles.css` (1,045 lines) - old version not used anywhere
   - Remove `/script.js` (624 lines) - duplicate of `/js/script.js`
   - These files exist but aren't tracked by git and serve no purpose
   - Deleted 29 unused favicon variants and favicon-preview.html (2026-02-17)

2. **Update HOME_ICON_REFERENCE.md**
   - References non-existent blog post `/blog/data-visualization-principles/index.html`
   - Update examples to use actual blog post paths (making-of-simonarneberg, rgb-color-cube, voronoi-experiments)

3. **Fix prev/next navigation in blog posts**
   - Currently non-functional at bottom of blog posts
   - Need to wire up proper previous/next linking between adjacent posts
   - Consider whether manual links or JavaScript-based solution is better

### Code Organization & Consistency

4. **Consolidate JavaScript approach**
   - Most pages use inline `<script>` tags (home carousel, demos)
   - Only rgb-color-cube uses external `/js/script.js`
   - **Decision needed**: Either move all scripts inline OR move all to external file
   - Inline pros: Simpler, fewer HTTP requests, easier to maintain per-page
   - External pros: Better caching, separation of concerns
   - **Recommendation**: Keep inline for page-specific logic; use external for shared utilities

5. **Standardize inline styles usage**
   - Most pages use only external CSS (`css/styles.css`)
   - `stained-glass-demo/index.html` mixes inline `<style>` blocks with external CSS
   - **Best practice**: Move all inline styles to `css/styles.css` with page-specific classes
   - Only use inline styles when absolutely necessary for dynamic/computed values

6. **Create reusable blog post template**
   - Current process: Copy existing post and modify
   - **Better approach**: Create `blog/_template/index.html` with placeholder text
   - Document required replacements (title, date, content, thumbnail path)
   - Reduces chance of forgetting critical path adjustments

### Asset Management

7. **Optimize image loading**
   - 31 polaroid carousel images currently loaded on home page
   - Consider lazy loading images that aren't immediately visible
   - Add width/height attributes to prevent layout shift
   - Consider WebP format with JPEG fallback for better compression

8. **Establish image naming convention**
   - Current: Mix of formats (blog_home_page_thumbnail.png, voronoi_thumbnail.png)
   - **Recommendation**: Use consistent naming pattern
     - Blog thumbnails: `blog-{post-name}-thumbnail.png`
     - Photos: `photo-{description}-{date}.jpg`
     - Icons: `icon-{name}.svg`

### Development Workflow

10. **Add local testing documentation**
    - Document how to test relative path changes locally
    - Note that opening HTML directly (`file://`) may behave differently than served
    - Recommend `python -m http.server 8000` for accurate local testing
    - Add to README.md or CLAUDE.md

11. **Create pre-commit checklist**
    - Verify all relative paths match directory depth
    - Check favicon links on new pages
    - Validate Google Fonts are loaded
    - Ensure `.paper-texture` div is present
    - Test responsive behavior on mobile
    - Verify nav bar links and home icon SVG

12. **Version control for generated files**
    - `Simon_Arneberg_Resume.pdf` is generated by Python script
    - Should this be in git? Currently yes
    - Consider adding generation date in filename: `Simon_Arneberg_Resume_2026-01.pdf`
    - Update resume page link when regenerating

### Performance & Accessibility

13. **Add semantic HTML improvements**
    - Use `<article>` for blog posts
    - Use `<time datetime="">` for post dates
    - Add `<main>`, `<header>`, `<footer>` landmarks where appropriate
    - Improve heading hierarchy (avoid skipping levels)

14. **Enhance accessibility**
    - Add `alt` text to all images (including carousel photos)
    - Ensure sufficient color contrast (test with WCAG checker)
    - Add `aria-label` to social media links (currently only have title)
    - Test keyboard navigation through flippable cards
    - Add skip-to-content link for screen readers

15. **Consider adding meta tags**
    - Open Graph tags for social media sharing
    - Twitter Card metadata
    - Description meta tags for SEO
    - Favicon references for all sizes (16x16, 32x32, apple-touch-icon)

### Future Scalability

16. **Prepare for blog growth**
    - Current: 3 blog posts, manageable to update manually
    - Future: 20+ posts may need better organization
    - Consider: Blog categories or tags (implemented as filter UI)
    - Consider: RSS feed for blog subscribers (static XML file)
    - Consider: Blog post search (client-side with lunr.js or similar)

17. **Establish color palette versioning**
    - Current: 16 colors hardcoded in CSS
    - If palette changes, all CSS variables update globally (good!)
    - **Best practice**: Document any palette changes in git commit messages
    - Consider creating visual color palette reference page (like favicon-preview.html)

18. **Plan for mobile-specific features**
    - Home page carousel: Test touch/swipe gestures
    - Flippable cards: May need different interaction pattern on mobile
    - Consider touch target sizes (minimum 44x44px recommended)
    - Test all interactive elements on actual mobile devices

### Documentation Improvements

19. **Expand CLAUDE.md with common errors**
    - Add "Troubleshooting" section
    - Document: "If links break, check path depth"
    - Document: "If styles don't load, verify CSS path matches directory level"
    - Document: "If favicon doesn't appear, check relative path and file extension"

20. **Create visual style guide**
    - Create style-guide.html to document all design elements
    - Show all color variables with hex codes
    - Display typography samples at all sizes
    - Show button styles, link styles, hover states
    - Demonstrate spacing/padding standards
    - Useful reference when creating new components

### Workflow Automation Opportunities

21. **Script to generate new blog post**
    - Python or bash script: `python new_blog_post.py "post-title"`
    - Auto-creates directory structure
    - Copies template with correct paths
    - Prompts for title, date, description
    - Opens index.html and blog/index.html for editing
    - Reminds to create thumbnail image

22. **Script to validate paths**
    - Scan all HTML files
    - Check that CSS references match directory depth
    - Check that favicon references match directory depth
    - Check that nav links are correct
    - Report any inconsistencies
    - Could run as git pre-commit hook

23. **Favicon consistency checker**
    - Script to verify all HTML files reference favicon correctly
    - Check that favicon path matches directory depth in each file
    - Report any pages with missing or incorrect favicon links

24. [✅ 2026-02-17] **End-of-session finalize skill**
    - Created `.claude/skills/finalize.md` to automate session cleanup
    - Reviews all changes, updates documentation (CLAUDE.md, README.md, future_ideas.md)
    - Marks completed items in future_ideas.md
    - Prepares git commit with proper message format
    - Commits and pushes changes after user approval

---

*Last updated: 2026-02-17*
