import { readdir } from "node:fs/promises";

const list = async () => {
  try {
    const arr = await readdir("./files");
    console.log(arr);

    for (const file of arr) {
      console.log(file);
    }
  } catch (err) {
    console.log(new Error(`FS operation failed. ${err.message}`));
  }
};

await list();
