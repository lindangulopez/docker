const log = require('./logger');

function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Mosh');
console.log(module);
log('message');
//logger =1; // Type Error: Assignment to constant variable. use jshint