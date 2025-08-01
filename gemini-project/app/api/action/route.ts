import { getFrameMessage, getFrameHtmlResponse } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const vercelURL = process.env.VERCEL_URL || 'http://localhost:3000';
  
  const body = await req.json();

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `You clicked the button!`,
        },
      ],
      image: `https://placehold.co/600x400/818cf8/FFFFFF/png?text=Thanks+for+clicking!`,
      post_url: `${vercelURL}/api/action`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
