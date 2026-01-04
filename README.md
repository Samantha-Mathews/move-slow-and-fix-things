# Move Slow and Fix Things

Your personal website. Built with Astro.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## How to Write Content

All your content lives in `src/content/`. Each domain has its own folder:

```
src/content/
├── music/          ← Albums, tracks, playlists
├── art/            ← Installations, pieces
├── research/       ← Papers, talks, panels
├── building/       ← Companies, products, investments
├── writing/        ← Blog posts, essays
├── ideas/          ← Frameworks, theories
├── stan/           ← People/things you love
└── meme-dumpster/  ← Chaos
```

### Creating a New Post

1. Create a new `.md` file in the appropriate folder
2. Add frontmatter at the top (the stuff between `---`)
3. Write your content in Markdown below

**Example: New music post**

Create `src/content/music/my-new-track.md`:

```markdown
---
title: "New Track Title"
description: "A short description"
date: 2024-03-15
cover: /images/music/track-cover.jpg
tags: [electronic, ambient]
spotify: "https://open.spotify.com/track/xxx"
bandcamp: "https://blondtron.bandcamp.com/track/xxx"
---

Write about the track here. You can use **bold**, *italics*, 
and all normal Markdown.

## Subheadings work

So do images:

![Alt text](/images/music/studio.jpg)

And links: [link text](https://example.com)
```

### Adding Images

1. Put images in `public/images/`
2. Organize by domain: `public/images/music/`, `public/images/art/`, etc.
3. Reference them as `/images/music/filename.jpg`

### Frontmatter Fields by Domain

**All domains share:**
- `title` (required)
- `description`
- `date`
- `cover` (image path)
- `tags` (array)
- `draft` (set to `true` to hide)

**Music-specific:**
- `album`
- `year`
- `spotify`, `soundcloud`, `bandcamp`, `youtube` (URLs)

**Art-specific:**
- `medium`
- `location`
- `collaborators` (array)
- `gallery` (array of image paths)

**Research-specific:**
- `type`: "paper" | "talk" | "panel" | "podcast"
- `venue`
- `coauthors` (array)
- `pdf`, `video` (URLs)

**Building-specific:**
- `role`
- `company`
- `url`
- `status`: "active" | "archived" | "acquired" | "invested"

**Ideas-specific:**
- `status`: "seed" | "growing" | "mature"
- `related` (array of other idea slugs)

**Stan-specific:**
- `category`: "person" | "place" | "thing" | "idea" | "artist" | "book" | "album"
- `url`
- `quote`

**Meme Dumpster-specific:**
- `mood`
- `source`

## Publishing

The site auto-deploys when you push to GitHub. Just:

```bash
git add .
git commit -m "New post about whatever"
git push
```

The site rebuilds in ~30 seconds.

## Customization

- **Styles:** `src/styles/global.css` has all the design tokens
- **Layout:** `src/layouts/Base.astro` is the main template
- **Homepage:** `src/pages/index.astro`

## Newsletter Integration

The newsletter form currently submits to `/api/subscribe`. You'll need to:

1. Sign up for Buttondown (or similar)
2. Create an API endpoint or use their embed code
3. Update the form action in `src/pages/index.astro`

## Adding Your Photo

Replace the placeholder in `src/pages/index.astro`:

```html
<!-- Find this line -->
<span class="portrait-placeholder">Your photo</span>

<!-- Replace with -->
<img src="/images/sam.jpg" alt="Sam Mathews Chase" />
```

Put your photo in `public/images/sam.jpg`.

---

Built with 🧠 and ♥ by Sam + Claude
