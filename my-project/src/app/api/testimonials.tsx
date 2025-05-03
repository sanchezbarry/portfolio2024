import { list } from "@vercel/blob";
import { NextApiRequest, NextApiResponse } from "next";
// Removed BlobListResponse as it is not exported from "@vercel/blob"

interface HandlerRequest extends NextApiRequest {}
interface HandlerResponse extends NextApiResponse {}

export default async function handler(req: HandlerRequest, res: HandlerResponse) {
    const response = await list({
        token: process.env.BLOB_READ_WRITE_TOKEN as string, // Use the token from the environment variable
    });

    res.status(200).json(response.blobs);
}