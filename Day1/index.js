var button = document.querySelector("#button").addEventListener("click", function(){
    var result = generate();
    number.innerText=result;
});
var number = document.querySelector("#number");
number.innerText= "0";

var min=1;
var max=7;

function generate(){
    var random = Math.floor((Math.random() * (max-min) + min));
    return random;
}