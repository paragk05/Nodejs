const express=require('express');

const path=require('path');

const Joi= require('joi');

const bodyParser=require('body-parser');

const app= express();

app.use('/public',express.static(path.join(__dirname,'static')))

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'static','index.html'));
})


app.post('/',(req,res)=>
{
    console.log(req.body);

    const schema=Joi.object().keys({
        uname:Joi.string().trim().email().required(),
        psw : Joi.string().min(5).max(10).required()

    });
    //database work here...
    Joi.validate(req.body,schema,(err,result)=>
    {
        if(err)
        {
            console.log(err);
            res.send("Error Occured");
        }       
            console.log(result);
            res.send("Success")
    });
    
});
app.listen(3000);   