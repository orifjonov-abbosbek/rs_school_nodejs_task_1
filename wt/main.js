import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  let number = 10;
  const numCores = os.cpus().length;
const workerFile = new URL("./worker.js", import.meta.url);

  const workersData = await Promise.allSettled(
    Array.from({ length: numCores }, () => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerFile, { workerData: number++ });

        worker.on("message", (message) => resolve(message));
        worker.on("error", (error) => reject(error));
      });
    })
  );

  const results = workersData.map((item) => {
    if (item.status === "fulfilled") {
      return { status: "resolved", data: item.value };
    } else {
      return { status: "error", data: item.reason };
    }
  });

  console.log(results);
};

performCalculations().catch((error) => console.error(error));
