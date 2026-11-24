# darsh-site

Personal website of **Darsh Sai Kiran Velagapudi**, built with [Astro](https://astro.build).
It's a fast static site with an `/admin` dashboard for writing blogs and editing content. Everything is free except an optional custom domain.

---

## 1. Where everything lives

| What you want to change | Where |
|---|---|
| Name, photo, email, LinkedIn, GitHub, resume, paper link, contact form | `src/data/site.json` (or **/admin → Pages & settings → Site settings**) |
| Home page text (headline, intro, story) | `src/data/home.json` |
| About page, journey timeline, "Beyond code" | `src/data/about.json` |
| Why AI page | `src/data/whyai.json` |
| Experience, CS50, Head Boy, basketball, MUN, social impact | `src/data/experience.json` |
| Achievements, INAIO, certificates | `src/data/achievements.json` |
| IIT Kharagpur YIP | `src/data/innovation.json` |
| Research page intro + timeline | `src/data/research.json` |
| **Blog posts** | `src/content/blog/*.md`, one file per post |
| **Projects** (Kisan AI etc.) | `src/content/projects/*.md` |
| **Research write-ups** | `src/content/research/*.md` |
| Images | `public/images/` (the admin uploads to `public/images/uploads/`) |
| Resume PDF | `public/files/` (then set `"resume": "/files/resume.pdf"`) |
| Colours and fonts | `src/styles/global.css` (top of file) |
| Reusable components | `src/components/` |

Any image slot that is empty shows a labelled placeholder frame. Add an image path and it is replaced automatically.

### Writing a new blog post (by hand)

Create `src/content/blog/my-new-post.md`:

```md
---
title: My New Post
date: 2026-12-01
category: Machine Learning   # one of the 9 categories
description: One or two sentences for the card.
image: /images/my-post.jpg   # optional
takeaways:
  - First key point
  - Second key point
---

Your article in Markdown...
```

It appears on `/blog`, on the home page ("Latest writing"), in the category filters and under related posts. Set `draft: true` to hide a post.

---

## 2. Run it on your computer

Install [Node.js](https://nodejs.org) (LTS), then:

```bash
npm install
npm run dev        # open http://localhost:4321
```

Changes show instantly. `npm run build` creates the final site in `dist/`.

---

## 3. Put it online for free (Cloudflare Pages)

1. Create a free **GitHub** account. Create a new repository named `darsh-site` and upload this folder. Using git:
   ```bash
   git init && git add . && git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/darsh-site.git
   git push -u origin main
   ```
2. Create a free **Cloudflare** account. Go to **Workers & Pages → Create → Pages → Connect to Git** and choose the repo.
3. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Deploy. You get a free address like `darsh-site.pages.dev`.
5. In `astro.config.mjs`, change `site:` to that address (or your domain later).

From now on, every change pushed to GitHub, or saved in `/admin`, redeploys automatically in about a minute.

> Prefer GitHub Pages? It works too. See Astro's guide: https://docs.astro.build/en/guides/deploy/github/

---

## 4. The admin dashboard (`/admin`)

This is a free, open-source editor ([Sveltia CMS](https://github.com/sveltia/sveltia-cms)). It saves straight to your GitHub repo, and the site then rebuilds itself.

**One-time setup (about 5 minutes):**

1. Open `public/admin/config.yml` and replace `YOUR-GITHUB-USERNAME` with your GitHub username. Push the change.
2. On GitHub, go to **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
   - Repository access: **Only select repositories → darsh-site**
   - Permissions: **Contents → Read and write**
3. Open `https://your-site.pages.dev/admin`, click **Sign in with Token**, and paste the token.

You can now write posts, upload images, edit every page and change your links, all from the browser on any computer or phone.

Treat the token like a password: don't share it or commit it to the repo. It is stored only in your browser.

*Optional:* if you'd rather have a "Sign in with GitHub" button instead of a token, deploy the free [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) on Cloudflare Workers. Then set `base_url` in `config.yml`.

**Other ways to edit:**
- Press `.` on your GitHub repo page to open a full VS Code editor in the browser.
- Use VS Code on your computer with `npm run dev`.

---

## 5. Custom domain (optional, the only paid part)

1. Buy a domain (Cloudflare Registrar, Namecheap, Porkbun…).
2. Cloudflare Pages → your project → **Custom domains → Set up a domain**. If the domain is on Cloudflare, DNS is configured for you. If not, add the CNAME record it shows at your registrar.
3. HTTPS is automatic. Update `site:` in `astro.config.mjs`.

---

## 6. Contact form (free)

Static sites need a form service:
1. Sign up at [formspree.io](https://formspree.io) (free plan) and create a form.
2. Copy its endpoint (e.g. `https://formspree.io/f/abcdwxyz`) into `contactFormEndpoint` in `site.json`.

Until then, the form uses your email address via `mailto:` if you set one, or shows "not connected".

---

## 7. Before you share it: checklist

- [ ] Add your photo (`photo` in `site.json`), e.g. `/images/darsh.jpg`
- [ ] Add your GitHub link (`links.github` in `site.json`)
- [ ] Fix the "[LinkedIn] | [Phone] | [Email]" placeholders at the top of `public/files/Darsh_Velagapudi_Resume.pdf`
- [ ] Fill in the few dashed boxes marked **"Edit: …"** (Kisan AI's origin story, robot-navigation progress, social-impact reflections)
- [ ] Rewrite the About intro, Why AI opening and home intro in your own voice
- [ ] Add photos: smart city model, MUN, certificates
- [ ] Optional: add dates to blog posts and the internship period

Search the project for `Edit:` to find every spot that still needs your input.
