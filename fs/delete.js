import { unlink } from "node:fs/promises";

const remove = async () => {
  const deleteFile = "./files/fileToRemove.txt";

  try {
    await unlink(deleteFile);
    console.log("File successfully deleted");
  } catch (err) {
    console.error("FS operation failed", err.message);
  }
};

await remove();
