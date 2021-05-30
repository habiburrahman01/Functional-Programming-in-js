//v)Function can pass as an argument of another function //Higher oreder Function
function add(a,b){
    return a+b
}
function multiply(a,b,func){
    return a*b*func(a,b)
}
var result=multiply(4,5,add)
console.log(result)
//vii) Function can return function from another function //Higher Order Function 

function addition(){
    return add(4,5)
}
console.log(addition())