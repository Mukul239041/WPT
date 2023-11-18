var prodarr=["Chair","Table","Shelf"]
        //display array contents as unoredered list
        function displayProductlist(){
           var str="<ul>";
            for(var ob of prodarr){
               str+= `<li>${ob}</li>`;     //<ul><li>Chair</li>
            }
           str+="</ul>";
           document.getElementById("mydiv").innerHTML=str; 
        }

        //add new product in the array
        function addproduct(){
            var nm=document.getElementById("pname").value;
            //check whether the name is not empty or spaces
            if(nm!=="" && nm.trim().length>0 ){
                document.getElementById("errname").innerHTML="";
                prodarr.push(nm);
                displayProductlist();
                //clear the text box
                document.getElementById("pname").value="";
                //set the focus in the textbox
                document.getElementById("pname").focus();
                return true;
            }else{
                document.getElementById("errname").innerHTML="Name cannot be empty or only spaces";
                return false;

            }
        }
        function deleteproduct(){
            var nm=document.getElementById("pname").value;
            //find the position of the product
           // var pos=prodarr.indexOf(nm);
            var pos=prodarr.findIndex(a=>a===nm);
            if(pos!==-1){
             //delete the product
            prodarr.splice(pos,1)
            //redisplay the list
            displayProductlist();
           
            }else{
                alert("Product not found");
            }
            document.getElementById("pname").value="";
            document.getElementById("pname").focus();
        }
        function modifyproduct(){
            var nm=document.getElementById("pname").value;
            var pos=prodarr.findIndex(a=>a===nm);
            if(pos!=-1){
                var newnm=prompt("enter new name");
                //modifying the productname
                prodarr.splice(pos,1,newnm)
                displayProductlist();
            }else{
                alert("Product not found");
            }
            document.getElementById("pname").value="";
            document.getElementById("pname").focus();
        }