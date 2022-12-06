 document.getElementById("err").addEventListener("click", notGone);
 function notGone() {
     let message = "Something went wrong, please try again";
     let par = document.getElementById("error");
     par.innerHTML = message;
 }
//  let num1 = document.getElementById("num1").value;
//  let num2 = document.getElementById("num2").value;

let num1 = 5
let num2 = 2
let result = document.getElementById("result");

 document.getElementById("plus").addEventListener("click", add);
 function add() {
    let out = (num1 + num2);
 result.innerHTML += out;
 }
 document.getElementById("minus").addEventListener("click", sub);
 function sub() {
    let out = (num1 - num2);
 result.innerHTML += out; }

 document.getElementById("per").addEventListener("click", mult);
 function mult() {
    let out = (num1 * num2);
 result.innerHTML += out; }

 document.getElementById("diviso").addEventListener("click", div);
 function div() {
    let out = (num1 / num2);
 result.innerHTML += out; }

 document.getElementById("reset").addEventListener("click", res);
 function res() {
   result.innerHTML = "Result: ";
}



