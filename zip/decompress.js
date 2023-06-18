import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  const zipFile = "./files/archive.gz";
  const decompressFile = "./files/fileToCompress.txt";

  const archive = createReadStream(zipFile);
  const decompressedFile = createWriteStream(decompressFile);

  const decompression = createUnzip();

  await new Promise((resolve, reject) => {
    archive
      .pipe(decompression)
      .pipe(decompressedFile)
      .on("finish", resolve(console.log("file decompressed successfully")))
      .on("error", reject(console.log("error while decompression")));
  });
};

await decompress();
