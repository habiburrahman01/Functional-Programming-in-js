// Rules for first class function:
//i) Function can be stored in a variable

function add(a,b){
    return a+b
}
var result=add(10,30)
console.log(result)

//ii)Function can be stored in an array

var arr= [1,2]
arr.splice(2,0,add(4,5),add(5,10),add(7,6))
console.log(arr)
console.log(typeof arr)
//iii)Function can be stored in an object 
var obj={
    x:add(4,5)
,y:add(5,6)
}

console.log(obj)
console.log(typeof obj)
//iv) Function can be created anywhere  needed
setTimeout(
    function(){
        console.log("Function created...")
    },
    100
)
//v)Function can pass as an argument of another function //Higher oreder Function
//vii) Function can return function from another function //Higher Order Function 




