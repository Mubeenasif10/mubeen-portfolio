# Muhammad Mubeen Asif — Portfolio

Personal portfolio for Muhammad Mubeen Asif, Full Stack Web Developer. The interface is React, JavaScript, and CSS. Contact messages are stored with Supabase only.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173/.

```bash
npm run build
npm run preview
```

`npm run build` creates the production files in `dist`.

## Update your details

Edit `src/data/profile.js`:

- `email` — the address shown in the contact section
- `socials` — real GitHub, LinkedIn, Fiverr, and email URLs

Leave a URL as an empty string until you have the real link. The site will show “Not added” instead of opening a fake page.

## Update projects

Edit the `projects` array in `src/data/projects.js`.

Each project needs:

- `name`
- `description`
- `technologies`
- `image` and `imageAlt`
- `liveUrl`
- `githubUrl`

Put screenshots in `public/images/projects/` and point `image` at that file, for example `/images/projects/restaurant.jpg`. The current images are labeled preview placeholders.

Add another object to the array to show a new project. Remove an object to hide one. No other component needs to change.

## Supabase contact form

The form checks the name, email, subject, and message in the browser. It saves a row only when both environment variables are set and the insert succeeds. If Supabase is not configured, the form explains that and does not pretend the message was sent.

1. Create a project at [supabase.com](https://supabase.com).
2. In Project Settings → API, copy the project URL and the `anon` public key.
3. Copy `.env.example` to `.env` in the project root:

```env
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. Open the Supabase SQL editor and run `supabase/contact_messages.sql`.
5. Restart `npm run dev` after changing `.env`.

The SQL creates `contact_messages` and a Row Level Security policy that allows inserts only. Visitors cannot read the table. Read messages from the Supabase dashboard, Table Editor.

Use the anon key in the frontend. Do not put the service-role key in `.env`, source code, or Git.

This project does not use MongoDB, Firebase, or a separate PostgreSQL service.

## GitHub

```bash
git init
git add .
git commit -m "Add portfolio website"
```

Create an empty repository on GitHub, then:

```bash
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git branch -M main
git push -u origin main
```

Confirm `.env` is not committed. `.gitignore` already excludes it.

## Deploy on Netlify

1. Push the repository to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` under Site configuration → Environment variables.
6. Deploy. Netlify needs a new deploy after those variables change.

## Deploy on Vercel

1. Import the GitHub repository in Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add the same two environment variables.
6. Deploy again after saving the variables.

## Testing checklist

- Navigation links scroll to the matching section.
- Mobile menu opens, closes, and closes with Escape.
- Pages have no horizontal scroll at desktop, tablet, and phone widths.
- Project cards render all six projects.
- Live Demo and GitHub stay inactive until a real URL is added.
- Contact form shows errors for an empty submit and for an invalid email.
- With no `.env`, a valid submit says the message was not saved.
- With Supabase configured, a valid submit creates a row and the success text appears only after that insert.
- `npm run build` completes without errors.
