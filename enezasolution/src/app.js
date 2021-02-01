
var express=require('express');
var app=express();

//Respondtorequestsfor/with'HelloWorld'.
app.get('/',function(req,res){
    res.send('Hello World!');
});
 //Listenonport80(likeatruewebserver).
app.listen(80);
 onsole.log('Express server started successfully.');