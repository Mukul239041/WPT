exports.addition=function(a,b){
    var add=a+b;
    return add;
}

exports.factorial=function(n){
    var f=1;
    for(var i=1;i<=n;i++){
        f=f*i
    }
    return f;
}

//console.log("Addition : "+addition(3,5));