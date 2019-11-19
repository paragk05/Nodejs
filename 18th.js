const express=require('express');

const path=require('path');

const Joi= require('joi');

const bodyParser=require('body-parser');

const app= express();

app.use('/public',express.static(path.join(__dirname,'static')))

app.set('view engine','ejs');

app.get('/:userQuery',(req,res)=>
{
    res.render('index.ejs',{
        data :{
            userQuery:req.params.userQuery.userQuer,
            search :['book1','book2','book3','book4'],
            loggedIn :true,
             user:'parag'
        }
    });
});


// app.post('/',(req,res)=>
// {
//     console.log(req.body);

//     const schema=Joi.object().keys({
//         uname:Joi.string().trim().email().required(),
//         psw : Joi.string().min(5).max(10).required()

//     });
//     //database work here...
//     Joi.validate(req.body,schema,(err,result)=>
//     {
//         if(err)
//         {
//             console.log(err);
//             res.send("Error Occured");
//         }       
//             console.log(result);
//             res.send("Success")
//     });
    
// });
app.listen(3000);   