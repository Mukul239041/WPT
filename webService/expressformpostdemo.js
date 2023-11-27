const express=require("express");
const app=express()
const bodyparser=require("body-parser");
const m1=require("./module1")
//it is a middleware which parse the data that comes from user
// via request objcet, {extended:false} -- it indicates data can be in any format
//{extended:true} ---data can be in string format
//if the request is get then it will store the data in req.query
//if the method is post, then the data will be stored in req.body
//urlencoded has call for next() 
app.use(bodyparser.urlencoded({extended:false}))
app.use(function(req,resp,next){
    console.log("in user middleware",req.url);
    next();
})

app.get("/form",function(req,resp){
  // __dirname is current folder, so public folder will be 
  //searched in current folder 
  resp.sendFile("/public/form.html",{root:__dirname})
});

app.post("/submit_data",function(req,resp){
    console.log("method : "+req.method)
    var num1=parseInt(req.body.num1);
    if(req.body.btn==="add"){
       var answer=m1.addition(num1,parseInt(req.body.num2));
       resp.send("<h2>Addition: "+answer+"</h2>");
    }else{
        var answer=m1.factorial(num1);
       resp.send("<h2>factorial: "+answer+"</h2>");
    }
})

app.listen(9000,function(){
    console.log("server started at port 9000")
})