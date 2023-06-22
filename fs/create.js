import { open } from "node:fs/promises";

const create = async () => {
  const fileContent = "I am fresh and young";

  try {
    const fileHandle = await open("./files/fresh.txt", "wx");
    await fileHandle.write(fileContent);
    await fileHandle.close();
    console.log("File created successfully.");
  } catch (error) {
    console.log(error);
  }
};


console.log(import.meta.url)

await create();
