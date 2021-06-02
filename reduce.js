//reduce function

var arr=[10,1,11,23,5,7,82,40,55,14,15,13]

var sum=arr.reduce(function(prev,crnt){
    return prev+crnt
},10) //10 will be added to the total sum
console.log(sum)

var max=arr.reduce(function(p,v){
    return Math.max(p,v)
},0)
console.log(max)


// implementation of reduce function

function myreduce(arr,cb,acc){
    for(var i=0;i<i.length;i++){
        acc=cb(acc,arr[i])
    }
    return acc
}

myreduce(arr,function(prev,crnt){
    return prev+crnt
},0)