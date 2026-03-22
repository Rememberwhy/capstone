# Capstone

Capstone is a Next.js 16 marketing site for a premium brand, website, and growth studio.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Setup

Copy `.env.example` to `.env.local` and fill in the values you want to use:

```bash
cp .env.example .env.local
```

Important variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BOOKING_URL`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_CLARITY_ID`
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Tracking Stack

The site supports three layers of measurement:

- `Vercel Analytics` for lightweight event tracking
- `Microsoft Clarity` for session replays, click maps, and drop-off analysis
- `Meta Pixel` for marketing attribution and conversion events

Cookie consent gates Meta Pixel and Clarity until the visitor accepts analytics.

## Build

```bash
npm run lint
npm run build
```

## Deploy

Deploy on Vercel and make sure the environment variables from `.env.local` are also added in the Vercel project settings.
