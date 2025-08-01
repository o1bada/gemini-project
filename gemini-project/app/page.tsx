import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const vercelURL = process.env.VERCEL_URL || 'http://localhost:3000';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click Me!',
    },
  ],
  image: `https://placehold.co/600x400/000000/FFFFFF/png?text=Hello+Farcaster!`,
  post_url: `${vercelURL}/api/action`,
});

export const metadata: Metadata = {
  title: 'My First Farcaster Frame',
  description: 'A simple and fun Farcaster Frame built with Next.js',
  openGraph: {
    title: 'My First Farcaster Frame',
    description: 'A simple and fun Farcaster Frame built with Next.js',
    images: [`https://placehold.co/600x400/000000/FFFFFF/png?text=Hello+Farcaster!`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My First Farcaster Frame</h1>
      <p>To see this Frame in action, paste the URL of this page into a Farcaster client like Warpcast.</p>
    </div>
  );
}
