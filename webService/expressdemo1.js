const express=require("express");
const app=express();
//these functions are called as middlewares
app.use(function(req,resp,next){
    console.log(req.url);
    console.log("in middleware1")
   next();
})
app.use(function(req,resp,next){
    console.log(req.url);
    console.log("in middleware2")
   next();
})
app.get("/hello",function(req,resp){
    resp.send("<h1>Hello World</h1>")
})
app.get("/welcome",function(req,resp){
    resp.send("<h1>Welcome to expressjs programming</h1>")
})
app.listen(9000,function(){
    console.log("server started at port 9000")
})