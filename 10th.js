const http=require('http');

const fs= require('fs');

http.createServer((req,res)=>{

    const readStream=fs.createReadStream('./T.jpg');

    res.writeHead((200),{'Contenr-type':'jpg/jpeg'});
    readStream.pipe(res); 


}).listen(3000);