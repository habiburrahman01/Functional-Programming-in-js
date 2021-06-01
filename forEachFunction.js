arr=[1,2,3,4,5,6]
//forEach function
arr.forEach(function(value,index,arr){
    console.log(value,index,arr)
})



//array traversing
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//array sum
var sum=0
for(var i=0;i<arr.length;i++)
{
   sum+=arr[i]
}
console.log(sum)

//forEach Function actual implementation
a=[1,2,3,4,5]
function forEach(a,cb){
    for(var i=0;i<a.length;i++){
        cb(a[i])
    }
}
forEach(a,function(value){
    console.log(value)
})


b=[4,5,6]
sum=0
function forEach(b,cb){
    for(var i=0;i<b.length;i++){
        sum+=b[i]
        
    }
    cb(sum)
}
forEach(b,function(value){
    console.log(value)
})


c=[4,5,6,7,8,9]
c.forEach(function(value,index,c){
    console.log(value+5)
})