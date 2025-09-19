# Mood Garden — Single Page Web Application

**Project purpose:** Mood Garden is a small interactive single-page web app that lets users type or select a mood and "grow" a little plant that visually reacts to that mood. It demonstrates HTML/CSS/JavaScript (Vanilla) and localStorage use — perfect for a simple front-end assignment.

## Files
- `index.html` — main single-page HTML file
- `styles.css` — styling
- `script.js` — app logic
- `README.md` — this file
- `.gitignore`

## How to run locally
1. Clone or unzip the project.
2. Open `index.html` in your browser (double-click or use `Live Server` in VSCode).

## How to upload to GitHub & deploy to Vercel (step-by-step)

### Create a GitHub repo and push:
```bash
cd mood-garden
git init
git add .
git commit -m "Initial commit — Mood Garden single-page app"
# Create a repo on GitHub (via web UI) named mood-garden, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mood-garden.git
git push -u origin main
```

### Deploy to Vercel:
1. Go to https://vercel.com and sign in (GitHub/OAuth recommended).
2. Click "New Project" → Import Git Repository → select your `mood-garden` repo.
3. Vercel will detect a static project. Click "Deploy".
4. After deployment, open the project dashboard and take a screenshot of the successful deployment (it shows a green "Production" or "Deployment successful" label).

### What to submit:
1. GitHub repository link: `https://github.com/YOUR_USERNAME/mood-garden`
2. Live Vercel URL: Vercel will provide a domain after deployment (copy & paste here)
3. Screenshot: capture your Vercel dashboard showing the successful deployment and include it in your submission.
4. Short paragraph describing the app (example below).

**Sample 3–5 line paragraph to submit:**
Mood Garden is a lightweight single-page web app that translates text moods into small animated plants. Users type or choose a mood, and the garden grows plants that change color and animation to match emotional tones. The app saves moods locally, creating a simple mood log and playful visual feedback suitable for a front-end assignment.

Replace `YOUR_USERNAME` and the placeholders with your real GitHub/Vercel links after deploying.
