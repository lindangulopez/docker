var logger = require('./logger');
console.log(logger);

function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Mosh');
console.log(module);
logger.log('message');