

var Users = JSON.parse(localStorage.getItem("formData")) || [];
  
console.log(Users);
document.querySelector("#login").addEventListener("submit",formSubmit);
// var form = document.querySelector("#login");

function formSubmit(event){
    event.preventDefault();
    
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    
 var flag=0;
  for (var i=0;i<Users.length;i++)
  {   
      if(Users[i].email===email && Users[i].password===password)
      {
         flag=1;
      }
  }
  if (flag==1)
  {
      alert("login success");
      window.location.href="index.html"

  }
  else{
      alert("invalid Credentials")
  }


}
