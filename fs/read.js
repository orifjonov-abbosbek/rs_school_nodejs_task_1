import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const readedFile = await readFile("./files/fileToRead.txt", {
      encoding: "utf-8",
    });

    console.log(readedFile);
  } catch (err) {
    console.log(new Error("FS operation failed"));
  }
};

await read();
