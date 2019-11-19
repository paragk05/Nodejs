const fs = require('fs');

//create a file..

// fs.writeFile('example.txt',"This is an example",(err)=>{
//     if(err)
//     console.log(err);
//     else
//     {
//     console.log('File successfully Created');
//     fs.readFile('example.txt','utf8',(err,file)=>{
//         if(err)
//         console.log(err)
//         else
//         console.log(file);
//     })
//     }
// }); 


//rename the existing file

// fs.rename('new_example.txt','new_example.txt',(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log('Successfully renamed');
//     }
// })

//


//Append

// fs.appendFile('new_example.txt','append string',(err)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('Appended');
//     }
// });

//deleting the file...

// fs.unlink('new_example.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('Deleted');
// });