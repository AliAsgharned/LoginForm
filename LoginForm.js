

let btn=document.querySelector("#up");
   
   btn.addEventListener("click",()=>{
    var name=document.getElementById("one").value;
    var email=document.getElementById("two").value;
    var pass=document.getElementById("for").value;
 
    if(name == "ali" && email == "ali123@gmail.com" && pass == "ali123"){
      window.open("new.html","_blank");
    
    }else if(name =="" && email =="" && pass ==""){
      alert("Dear! First enter the information.");

    }else{
      alert("Bro! You entered the wrong information.");
    }
    
   });
          