import { spawn } from "child_process";

import { cpus } from 'node:os';
const cpuInfo = cpus();

const spawnChildProcess = () => {
  const childProcess = spawn("node", ["-v"]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(`Received from child process: ${data}`);
  });

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess();


console.log(cpuInfo)