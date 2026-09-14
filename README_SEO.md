# Center Point Amausi Landing Page (Next.js)

This version has been updated per request:

- Removed Aparamous branding/name from the visible landing page.
- Added Omaxe and BeTogether logos for project presentation.
- Kept only the contact number visible: **+91 8127777274**.
- Configured the enquiry form to send submissions to:
  - **office@aparamous.com**
  - **aparamous@gmail.com**
- Kept the page concise in a 6–7 scroll style.

## Form handling

The enquiry form posts to `/api/lead` (Nodemailer, same stack as the other site on this server):

- Primary recipient: `office@aparamous.com`
- CC recipient: `aparamous@gmail.com`

If the API is unavailable, the page falls back to opening the user’s email client with both email addresses prefilled.

## SEO files

- `/robots.txt` — `User-agent: *` / `Allow: /` plus sitemap host
- `/sitemap.xml` — `https://centerpoint.omaxe-properties.com/` (weekly, priority 0.9)

## Main files

- `app/page.tsx`
- `public/img/`
- `app/robots.ts`
- `app/sitemap.ts`
