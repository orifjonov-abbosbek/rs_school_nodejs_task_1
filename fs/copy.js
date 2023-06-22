import { mkdir, stat, readdir, copyFile } from "node:fs/promises";

const copy = async () => {
  const filePath = "../fs/files_copy";
  const sourceFolder = "./files";

  try {
    await stat(filePath);
    console.log("Folder already exists.");
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await mkdir(filePath, { recursive: true });
        console.log("Folder created successfully.");
      } catch (err) {
        console.error(`Error creating folder: ${err.message}`);
      }
    } else {
      console.error(`Error checking folder: ${err.message}`);
    }
  }

  try {
    const fileNames = await readdir(sourceFolder);
    for (const fileName of fileNames) {
      const sourcePath = `${sourceFolder}/${fileName}`;
      const destinationPath = `${filePath}/${fileName}`;
      await copyFile(sourcePath, destinationPath);
      console.log(`Copied ${fileName}`);
    }
    console.log("All files copied successfully.");
  } catch (err) {
    console.error(`Error copying files: ${err.message}`);
  }
};

await copy();
