import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";

const random = Math.random();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${new URL(import.meta.url).pathname}`);
console.log(
  `Path to current directory is ${path.dirname(
    new URL(import.meta.url).pathname
  )}`
);

export const unknownObject =
  random > 0.5 ? import("./files/a.json") : import("./files/b.json");
export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
