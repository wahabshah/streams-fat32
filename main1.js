const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname,"data.txt");
const destinationPath = path.join("/","mnt","fat32USB","data.txt");


const readableSteam = fs.createReadStream(sourcePath);

readableSteam.on("error",(error) =>{
    errorHandler(`readableSteam`,error);
});

readableSteam.on("end",() =>{
    console.log(`readableStream : end`);
});

readableSteam.on("close",() =>{
    console.log(`readableStream : close`);
});

const writeableStream = fs.createWriteStream(destinationPath);

writeableStream.on("error",(error) => {
    errorHandler(`writeableStream`,error);
});

writeableStream.on("finish",()=>{
    console.log(`writeableStream : finish`);
});

writeableStream.on("close",()=>{
    console.log(`writeableStream : close`);
});

readableSteam.pipe(writeableStream, { end: true });

const errorHandler = (fromStream, error)=> {
    console.log(`${fromStream} : ${error}`);
    //readableSteam.destroy();
    //writeableStream.destroy();
};

process.stdin.on("data",(chunk)=>{
    
    console.log(chunk);
})

// DestinationPathDidNotExist   writeableStream : Error: ENOENT: no such file or directory, open 'mnt/ramdisk_tempfs'
// TryingToWriteFileToDirectory writeableStream : Error: EISDIR: illegal operation on a directory, open '/mnt/ramdisk_tempfs'
// DestinationPathReadOnly      writeableStream : Error: EROFS: read-only file system, open '/mnt/ramdisk_tempfs/data.txt'