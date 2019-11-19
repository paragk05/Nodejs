const fs= require('fs');



//to read the file...

// const read = fs.createReadStream('./a.txt','utf8');

// read.on('data',(chunk)=>{

//     console.log(chunk);
// });



// to read and write in another file..


const read = fs.createReadStream('./a.txt','utf8');

const write= fs.createWriteStream('b.txt');
read.on('data',(chunk)=>{

    write.write(chunk);
});
