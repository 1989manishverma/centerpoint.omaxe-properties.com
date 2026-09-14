# Omaxe Centre Point Amausi

Next.js landing page for [centerpoint.omaxe-properties.com](https://centerpoint.omaxe-properties.com), rebuilt from the Centre Point Amausi marketing page and deployed on the same server pattern as Jashn Golf Estate.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Lead emails

Forms POST to `/api/lead` and email **office@aparamous.com** and **aparamous@gmail.com**.

Copy `.env.example` to `.env.local` and set the same SMTP values used by the other site on this server. Without SMTP, local development still accepts forms and logs them in the terminal.

## SEO

- `app/robots.ts` publishes `/robots.txt` (`User-agent: *` / `Allow: /`)
- `app/sitemap.ts` publishes `/sitemap.xml` for `/` (weekly, 0.9) and `/privacy`
- Page metadata, Open Graph, Twitter cards and FAQ JSON-LD are set from `lib/site.ts` and `lib/schema.ts`

## Production

```bash
npm run build
npm start
```

Use a distinct `PORT` if this app shares a host with `golfestate.jashnproperties.com`.
