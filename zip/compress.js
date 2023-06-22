import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
  const fileToCompress = "./files/fileToCompress.txt";
  const compressedFile = "./files/archive.gz";

  const readFile = createReadStream(fileToCompress);
  const compressFile = createWriteStream(compressedFile);

  const gzip = createGzip();

  await new Promise((resolve, reject) => {
    readFile
      .pipe(gzip)
      .pipe(compressFile)
      .on("finish", resolve(console.log("file compressed successfully!")))
      .on("error", reject(console.log("error while compressing")));
  });
};

await compress();
