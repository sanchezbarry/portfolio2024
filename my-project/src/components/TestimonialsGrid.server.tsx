import { list } from "@vercel/blob";

export async function fetchTestimonials() {
  console.log("getServerSideProps is running"); // Debugging
  console.log("BLOB_READ_WRITE_TOKEN:", process.env.BLOB_READ_WRITE_TOKEN); // Debugging token

  // Fetch the list of blobs from the server
  const response = await list({
    token: process.env.BLOB_READ_WRITE_TOKEN || "vercel_blob_rw_NNQFsNVrUYRVzddd_UcfwdMtPdUrmsqa6cAJrqZFliAZZGv" , // Use the token from the environment variable
  });

  console.log("Response from Vercel Blob API:", response); // Debugging response

  // Map the fetched blobs into items
  const items = response.blobs.map((blob) => ({
    title: blob.pathname, // Use the pathname as the title
    description: "Click to view the image", // Add a description
    header: blob.downloadUrl, // Use the blob's download URL as the image source
  }));

  console.log("Mapped items:", items); // Debugging mapped items

  return items;
}