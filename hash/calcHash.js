import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const filePath = "./files/fileToCalculateHashFor.txt";
  
  try {
    const fileData = await readFile(filePath);
    const hash = createHash("sha256");
    hash.update(fileData);
    const hashValue = hash.digest("hex");
    console.log(`SHA256 hash: ${hashValue}`);
  } catch (error) {
    console.error("Error reading file or calculating hash:", error);
  }
};

await calculateHash();
