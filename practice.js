//pure function

function sqr(a){
    return a*a
}
console.log(sqr(4))


//first class function

//1. function can be store in a variable

var addition=function(a,b){
    return a+b
}
console.log(typeof addition)

var result=addition(4,5)
console.log(result)

//2.function can be stored in an array

var  math=[addition(4,5),10,11]
console.log(math)

//3.function can be stored in an object
var sub = function(a,b){
    return a-b
}
var obj={
    addition:addition(4,5),substration:sub(5,4)
}
console.log(obj)

//4.function can created anywhere needed
function hello(){
    console.log("Hello World!!!"),

    setTimeout(function(){
        console.log("hello function executed")
    },10)
}
hello()

//higher order function

//5. function can be return from another function

function add(){
    return addition(10,15)
}
console.log(add())

//6. function can be used as an argument of another function

function calculation(a,b){
    return a*b
}
console.log(calculation(addition(10,25),sub(5,4)))

//closure : when outside scope used inside a block its called closure

var x=10
function display(){
    return x
}
console.log(display())

//callback function

//forEach Function
var arr=[1,2,3,4,5,6,7,8,9]

console.log(arr.forEach(function(value,i,n){
    console.log(value,i,n)
}))

//implementing forEach function using callback function

function myforEach(arr,cb){
    for(var i=0;i<arr.length;i++){
    cb(arr[i],i,arr)
      
    }
}
myforEach(arr,function(value,i,n){
    console.log(value,i,n)
})
//map function

console.log(arr.map(function(value){
    return value*2
}))

//implementation of map function using callback function

function mymap(arr,cb){
    var ar=[]
    for(var i=0;i<arr.length;i++){
        ar.push(cb(arr[i]))
    }
    return ar
}
console.log(mymap(arr,function(value){
    return value*3
}))

//filter function

console.log(arr.filter(function(value){
    return value%2==0
}))

//implementation of filter function using call back function

function myfilter(arr,cb){
    var nfilter=[]
    for (var index = 0; index < arr.length; index++) {
      if(cb(arr[index])){
        nfilter.push(arr[index])
      } 
        
    }
    return nfilter
}
console.log(myfilter(arr,function(value){
    return value % 2 != 0 
}))


console.log(arr.find(function(value){
    return value==5
}))
console.log(arr.findIndex(function(value){
    return value==5
}))

//implementation of find and findIndex using callback function

function myfind(arr,cb){
    for(var i=0;i<arr.length;i++)
    {
        if(cb(arr[i])){
            return arr[i]
        }
    }
}

console.log(myfind(arr,function(value){
    return value==5
}))

function myfindIndex(arr,cb){
    for(var i=0;i<arr.length;i++)
    {
        if(cb(arr[i])){
            return i
        }
    }
}

console.log(myfindIndex(arr,function(value){
    return value==5
}))

//reduce function 

console.log(arr.reduce(function(p,v){
    return p+v
}))


function arrayAddition(arr,cb){
    var sum=0
        for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
console.log(arrayAddition(arr,function(p,v){
    return p+v
}))

