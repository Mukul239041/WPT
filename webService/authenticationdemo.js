const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const m1=require('./loginmodule')
app.use(bodyparser.urlencoded({extended:false}));
app.use(function(req,resp,next){
    console.log("user logging middleware")
    next()
});

app.get("/login",function(req,resp){
    resp.sendFile("/public/Login.html",{root:__dirname});
});

app.post("/validate",function(req,resp){
    var uname=req.body.uname;
    var pass=req.body.pass; 
    var ob=m1.validate(uname,pass);
    if(ob!==null){
        resp.send("<h1>valid user</h1>")
    }
    else{
        resp.send("<h1>invalid user</h1>")
    }
})

app.get("/register",function(req,resp){
     resp.sendFile("/public/registration.html",{root:__dirname})
})
expressdemos/public
app.get("/submit-data",function(req,resp){
   console.log(req.query);
   m1.addnewUSer({name:req.query.uname,password:req.query.pass});
   resp.send("<h1>Register successfully</h1>")

})
app.listen(9000,function(){
    console.log("server started at port 9000");
})