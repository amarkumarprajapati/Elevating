# Intal Elevators

Run `npm ci` and `npm run dev` for local development. Run `npm run build` to produce the deployable static site in `out/`. Serve that directory with a static host supporting directory indexes.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_GA_ID` to your GA4 web stream measurement ID before building. Route changes send page views explicitly. Disable automatic page views from browser history changes in the stream’s enhanced measurement settings to avoid duplicates. Set `NEXT_PUBLIC_SITE_URL` to the production origin before building. Submit `/sitemap.xml` to Google Search Console once the domain serves this build.

