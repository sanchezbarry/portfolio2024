import { list } from "@vercel/blob";

export async function fetchTestimonials() {
  // Fetch the list of blobs from the server
  const response = await list({
    token: process.env.BLOB_READ_WRITE_TOKEN, // Pass the token explicitly
  });


  // Map the fetched blobs into items
  const items = response.blobs.map((blob) => ({
    title: blob.pathname, // Use the pathname as the title
    description: "Click to view the image", // Add a description
    header: blob.downloadUrl, // Use the blob's download URL as the image source
  }));

  return items;
}