const express=require("express");
const app=express();
app.use(function(req,resp,next){
    console.log(req.url);
    console.log("in middleware1");
    next();

})
app.get("/home",function(req,resp){
     resp.send("<h1>In home page</h1>")
});

app.get("/aboutus",function(req,resp){
    resp.send("<h1>In aboutus page</h1>")
});

app.get("/product",function(req,resp){
    resp.send("<h1>In product page</h1>")
})