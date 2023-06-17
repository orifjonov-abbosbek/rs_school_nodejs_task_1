import { Transform } from "node:stream";

const transform = () => {
  const makeReverse = new Transform({
    transform(buffer, encoding, callback) {
      const reversedBuffer = buffer.toString().split("").reverse().join("");
      callback(null, reversedBuffer);
    },
  });

  console.log("write something for transform");

  makeReverse.pipe(process.stdout);

  process.stdin.pipe(makeReverse);

};

transform();
