const fs= require('fs');

//for read and create compressed file

// const zlib= require('zlib'); // to compress file

// const gzip= zlib.createGzip();

// const read = fs.createReadStream('./a.txt','utf8');

// const write= fs.createWriteStream('b.gz');

// read.pipe(gzip).pipe(write); //to compress, and save file in it.

 
//for unzip and and read the file


const zlib= require('zlib'); // to compress file

const gzunip= zlib.createGunzip();

const read = fs.createReadStream('./b.gz');

const write= fs.createWriteStream('uncompress.txt');

read.pipe(gunzip).pipe(write); //to compress, and save file in it.
