// import { list } from "@vercel/blob";
// import { NextApiRequest, NextApiResponse } from "next";
// // Removed BlobListResponse as it is not exported from "@vercel/blob"

// interface HandlerRequest extends NextApiRequest {}
// interface HandlerResponse extends NextApiResponse {}

// export default async function handler(req: HandlerRequest, res: HandlerResponse) {
//     const response = await list({
//         // token: process.env.BLOB_READ_WRITE_TOKEN as string, // Use the token from the environment variable
//         token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN as string, // Use the token from the environment variable
//     });

//     res.status(200).json(response.blobs);
// }



import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the list of blobs from Vercel Blob
    const response = await list({
      token: process.env.BLOB_READ_WRITE_TOKEN, // Use the private environment variable
    });

    // Return the blobs as JSON
    return NextResponse.json(response.blobs);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}