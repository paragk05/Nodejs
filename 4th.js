const readline=require('readline');

const r1= readline.createInterface({input:process.stdin,
output:process.stdout});

let num1= Math.floor((Math.random()*10)+1);
let num2= Math.floor((Math.random() *10+1));

let sum=num1+num2;

r1.question(`What is ${num1} + ${num2} ???\n\n`,(userInput)=>{
    if(userInput.trim()==sum)
    {
        r1.close();
    }
    else
    {
        r1.setPrompt('Incorrect..Try Again..\n');
        r1.prompt();
        r1.on('line',(userInput)=>{
            if(userInput==sum)
            {
                r1.close();
            }
            else
            {
                r1.setPrompt('Your answer is incorrct\n');
                r1.prompt();
            }
        })
    }
});

r1.on('close',()=>{
    console.log("Correct..!!!");
});
