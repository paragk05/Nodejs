const http= require('http');

const server=http.createServer((req,res)=>
{
    if(req.url==='/page'){

    res.write('Hello from node js');
    res.end();

    }
    else
    {
        res.write('Other server');
        res.end();
    }
})

server.listen('3001');