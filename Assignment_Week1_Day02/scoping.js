//Scoping
//Function - It is reusable block of code
 //Global scope - writing outside the loop/function

function scp(){

 if(true){
var browser="Chrome"
console.log("printing chrome browser inside the block:",browser)

 }
 console.log("printing chrome browser outside the block:",browser)
}
//console.log("printing chrome browser outside the function block:",browser)
scp()
