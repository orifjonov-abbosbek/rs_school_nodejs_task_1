import { createWriteStream } from "node:fs";

const write = async () => {
  const file = "./files/fileToWrite.txt";

  const writeStream = createWriteStream(file);

  process.stdin.pipe(writeStream);

  console.log("write something to console...");
};

await write();
