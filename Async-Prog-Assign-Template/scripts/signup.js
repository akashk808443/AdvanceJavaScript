document.querySelector("#signup").addEventListener("submit",formSubmit);

var Arr= JSON.parse(localStorage.getItem("formData")) || [];
function formSubmit(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let contact = document.querySelector("#contact").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    function Details(name,contact,email,password){
        this.name=name;
        this.contact=contact;
        this.email=email;
        this.password=password;
    }
    let obj= new Details(name,contact,email,password);
        console.log(obj);
     Arr.push(obj);

     localStorage.setItem("formData",JSON.stringify(Arr));
     window.location.href="login.html";
}