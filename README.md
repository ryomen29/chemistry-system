# Chemsystem Vue Modular — Vercel deployment

Steps to get this project deployed on Vercel:

1. Install dependencies:

```bash
npm install
```

2. Build the production bundle:

```bash
npm run build
```

3. Deploy with the Vercel CLI (or connect the repo in Vercel dashboard):

```bash
npx vercel --prod
```

Notes:
- The project uses Vite. The build output is in the `dist` folder and Vercel is configured to serve it.
