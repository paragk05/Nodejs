//work with folders...


const fs=require('fs');

// fs.mkdir('tutorial',(err)=>
// {
//     if(err)
//     {console.log(err)}
//     else
//     console.log("Folder successfully created");
// });

//delete folder

// fs.mkdir('tutorial',(err)=>
// {
//     if(err)
//     {console.log(err)}
//     else
//     {
//         fs.rmdir('tutorial',(err)=>
//         {
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log("folder deleted successfully");
//             }
//         });
//     }
// });
 

//create folder and also create file in it..

// fs.mkdir('tutorial',(err)=>
// {
//     if(err)
//     {console.log(err)}
//     else
//     {
//         fs.writeFile('./tutorial/example.txt','123',(err)=>
//         {
//             if(err)
//             console.log(err)
//             else
//             {
//                 console.log("Successfully created file");
//             }
//         })
//     }
// });


//delete file within it

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err)
//     console.log(err)
//     else
//     {
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//             console.log(err);
//             else
//             console.log('folder deleted successfully');
//         })
//     }
// });


fs.readdir('exam',(err,files)=>
{
    if(err)
    console.log(err)
    else
    {
        for(let file of files)
        {
            fs.unlink('./exam/'+file,(err)=>{
                if(err)
                console.log(err)
                else
                console.log(file+' file is deleted');
            });
        }

        fs.rmdir('exam',(err)=>
        {
            if(err)
            console.log(err);
            else
            console.log("folder deleted successfully");
        })
    }
})