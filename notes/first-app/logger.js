
var url='http://mylogger.io/log';



function log(message){
    //Send an HTTP request
    console.log(message);
}

module.exports =log; // export single method don't need the ojbect
module.exports.endpoint =url;