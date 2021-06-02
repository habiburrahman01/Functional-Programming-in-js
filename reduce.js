//reduce function

var arr=[10,1,11,23,5,7,82,40,55,14,15,13]

var sum=arr.reduce(function(prev,crnt){
    return prev+crnt
},10) //10 will be added to the total sum ,10 is initializer
console.log(sum)

var max=arr.reduce(function(p,v){
    return Math.max(p,v)
},0)
console.log(max)


// implementation of reduce function

function myreduce(arr,cb,acc){
    for(var i=0;i<arr.length;i++){
        acc=cb(acc,arr[i])
    }
    return acc
}

var sum1=myreduce(arr,function(prev,crnt){
    return prev+crnt
},0)
var max1= myreduce(arr,function(prev,crnt){
    return Math.max(prev,crnt)
},0)

var min=myreduce(arr,function(prev,crnt){
    return Math.min(prev,crnt)
},arr[0])

console.log(sum1,max1,min)