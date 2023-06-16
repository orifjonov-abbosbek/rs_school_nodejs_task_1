import { rename, access } from "node:fs/promises";

const renameFile = async () => {
  const sourceFile = "./files/wrongFilename.txt";
  const changedFile = "./files/properFilename.md";

  try {
    await access(sourceFile);
    try {
      await access(changedFile);
      throw new Error("FS operation failed.");
    } catch (err) {
      if (err.code === "ENOENT") {
        await rename(sourceFile, changedFile);
        console.log("File renamed successfully.");
      } else {
        throw err;
      }
    }
  } catch (err) {
    throw new Error("FS operation failed.");
  }
};

try {
  await renameFile();
} catch (err) {
  console.error(err.message);
}
