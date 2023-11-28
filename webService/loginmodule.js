arr=[{name:"user1",password:"user1"},{name:"user2",password:"user2"}];

exports.validate=(unm,pass)=>{
    var ob=arr.find(a=>a.name===unm && a.password===pass );
    console.log("object : ",ob);
    if(ob!==undefined){
        return ob;
    }else{
        return null;
    }

}

exports.addnewUSer=(ob)=>{
    arr.push(ob);
    console.log(arr);
}