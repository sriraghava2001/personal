var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send("Hi Raghava");
});
var server = app.listen(9000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("This app is listening and working at http://%s:%s",host,port);
});