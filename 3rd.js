const EventEmitter= require('events');

const emmit= new EventEmitter();


emmit.on('occur',()=>{
    console.log("Event Occured");
})

emmit.emit('occur');

emmit.on('occur1',(num1,num2)=>{
    console.log(num1+num2);
})

emmit.emit('occur1',4,5);


class Person extends EventEmitter
{
    constructor(name)
    {
        super();
        this._name=name;
    }

    get name()
    {
        return this._name;
    }
}

let pedro= new Person('pedro');

pedro.on('name',()=>{
    console.log("My name is "+pedro.name);
});

pedro.emit('name');