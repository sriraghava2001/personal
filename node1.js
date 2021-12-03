var a = require('http'); // Inbuild Module which helps in creating
var b=require('./mymodule'); //My own Module

a.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html'});
    res.write('The time and Date is' + b.mytime());
    res.write('My name is' + b.myname());
    res.end('  '+'Hi Raghava,Welcome!');
    console.log('Hi');
}).listen(400);