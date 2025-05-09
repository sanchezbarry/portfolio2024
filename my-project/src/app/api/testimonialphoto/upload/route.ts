import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
 
  if (!filename) {
    throw new Error('Filename is required');
  }

  if (!request.body) {
    throw new Error('Request body is required');
  }

  const blob = await put(filename, request.body, {
    access: 'public',
    addRandomSuffix: true,
  });

 
  return NextResponse.json(blob);
}

// import { list } from "@vercel/blob";
// import { NextApiRequest, NextApiResponse } from "next";
// // Removed BlobListResponse as it is not exported from "@vercel/blob"

// interface HandlerRequest extends NextApiRequest {}
// interface HandlerResponse extends NextApiResponse {}

// export default async function handler(req: HandlerRequest, res: HandlerResponse) {
//     const response = await list({
//         token: process.env.BLOB_READ_WRITE_TOKEN as string, // Use the token from the environment variable
//     });

//     res.status(200).json(response.blobs);
// }