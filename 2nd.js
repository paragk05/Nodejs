const sum=(num1,num2) =>num1+num2;

const PI=3.141;

class SomeMathObject
{
    constructor()
    {
        console.log("Object Created");
    }
}
module.exports.sum= sum;
module.exports.PI=PI;
module.exports.SomeMathObject=SomeMathObject;

/*

or you can also do this..

module.exports={sum:sum,PI:PI,SomeMathbject:SomeMathObject}

it will work same as above syntax..
*/