import { put } from "@vercel/blob";
export const uploadFile = async (file: File) => {
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  const blob = await put(file.name, file, {
    access: "private",
    token: blobToken,
  });
  return blob.url;
};
