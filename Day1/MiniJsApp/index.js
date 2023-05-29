var button1=document.querySelector("#button1").addEventListener("click",Objects)
var button2=document.querySelector("#button2").addEventListener("click",Arrays)
var button3=document.querySelector("#button3").addEventListener("click",Functions)
var button4=document.querySelector("#button4").addEventListener("click",Strings)
var button5=document.querySelector("#button5").addEventListener("click",Numbers)
var button6=document.querySelector("#button6").addEventListener("click",Null)
var button7=document.querySelector("#button7").addEventListener("click",Undefined)
 
var para1=document.querySelector("#para1");
function Objects(){
    para2=null;
    para3=null;
    para4=null;
    para5=null;
    para6=null;
    para7=null;
    let object={
        one:"An object is a collection of related data and/or functionality. These usually consist of several variables and functions",
        two:"objects are capable of storing complex values.",
        three:"An object in JavaScript is an unordered collection of key-value pairs ( key: value ). Each key is known as a property, and is a string representing a property name."}
        for(key in object){
            let li=document.createElement("li")
            li.innerText=object[key]
            para1.append(li)
        }
}

var para2=document.querySelector("#para2");
function Arrays(){
    para1=null;
    para3=null;
    para4=null;
    para5=null;
    para6=null;
    para7=null;
    let object={
        one:"The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type.",
        two:" An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
        three:"They provide easy access to all the elements at once and the order of accessing any element does not matter"}
        for(key in object){
            let li=document.createElement("li")
            li.innerText=object[key]
            para2.append(li)
        }
}
var para3=document.querySelector("#para3");
function Functions(){
    para1=null;
    para2=null;
    para4=null;
    para5=null;
    para6=null;
    para7=null;
    let object={
        one:"The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type.",
        two:" An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
        three:"They provide easy access to all the elements at once and the order of accessing any element does not matter"}
        for(key in object){
            let li=document.createElement("li")
            li.innerText=object[key]
            para3.append(li)
        }
}
var para4=document.querySelector("#para4");
function Strings(){
    para1=null;
    para2=null;
    para3=null;
    para5=null;
    para6=null;
    para7=null;
    let object={
        one:"The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type.",
        two:" An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
        three:"They provide easy access to all the elements at once and the order of accessing any element does not matter"}
        for(key in object){
            let li=document.createElement("li")
            li.innerText=object[key]
            para4.append(li)
        }
}
var para5=document.querySelector("#para5");
function Numbers(){
    para1=null;
    para2=null;
    para3=null;
    para4=null;
    para6=null;
    para7=null;
    let object={
        one:"The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type.",
        two:" An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
        three:"They provide easy access to all the elements at once and the order of accessing any element does not matter"}
        for(key in object){
            let li=document.createElement("li")
            li.innerText=object[key]
            para5.append(li)
        }
}
var para6=document.querySelector("#para6");
function Null(){
    para1=null;
    para2=null;
    para3=null;
    para4=null;
    para5=null;
    para7=null;
    let object={
        one:"The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type.",
        two:" An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
        three:"They provide easy access to all the elements at once and the order of accessing any element does not matter"}
        for(key in object){
            let li=document.createElement("li")
            li.innerText=object[key]
            para6.append(li)
        }
}
var para7=document.querySelector("#para7");
function Undefined(){
    para1=null;
    para2=null;
    para3=null;
    para4=null;
    para5=null;
    para6=null;
    let object={
        one:"The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type.",
        two:" An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
        three:"They provide easy access to all the elements at once and the order of accessing any element does not matter"}
        for(key in object){
            let li=document.createElement("li")
            li.innerText=object[key]
            para7.append(li)
        }
}
