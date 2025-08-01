# Farcaster Frame Starter with Next.js

A simple, robust, and deploy-ready Farcaster Frame built with Next.js, TypeScript, and the Coinbase OnchainKit. This project serves as a perfect starting point for developers looking to build interactive experiences on Farcaster.

## How to Deploy

1.  **Create a GitHub Repository:** Create a new, empty repository on your GitHub account.
2.  **Upload Files:** Use the GitHub website's "uploading an existing file" feature to upload all the files from this project into your new repository, making sure to keep the folder structure (`app/api/action/route.ts`, etc.).
3.  **Deploy to Vercel:**
    -   Go to [Vercel.com](https://vercel.com/) and import your new GitHub repository.
    -   Vercel will automatically detect the Next.js settings.
    -   Before deploying, go to **Settings -> Environment Variables** and add a variable named `VERCEL_URL`. Vercel will handle the value automatically.
    -   Click **Deploy**.
4.  **Share on Farcaster:**
    -   Once deployed, copy your public Vercel URL.
    -   Paste the URL into a new cast on a client like Warpcast to see your Frame live!
