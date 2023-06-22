import { createReadStream } from "node:fs";

const read = async () => {

    const file = './files/fileToRead.txt'

    try{
        const readByStream = createReadStream(file);
        readByStream.pipe(process.stdout)
    }
    catch (err){
        console.log(new Error('Fs operation failed: ' + err.message))
    }


};

await read();
