//add all libraries
const express=require("express");
const app=express();
const path=require("path");
const bodyparser=require('body-parser');
//all url handling(routing) details will be written in this file
const routes=require("./routes/routers")
//configure the application
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs") 

//add static setting
//app.use("/css",express.static(path.resolve(__dirname,"public/css")))
//app.use("/js",exprss.static(path.resolve(__dirname,"public/js")))
//app.use("/images",exprss.static(path.resolve(__dirname,"public/images")))
//add middlewares
app.use(bodyparser.urlencoded({extended:false}));

//pass the control to router for handling url
app.use("/",routes);
//start the server
app.listen(9000,function(){
    console.log("server started at prot 9000")
});

//it will make all the setting and configuration accessible in 
//all the files
module.exports=app;