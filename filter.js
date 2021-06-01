//Filter function in js

var arr = [1,2,3,4,5,6,7,8,9,10]

var oddNumber=arr.filter(function(value){
    return value%2==1
})
console.log(oddNumber)

//Implementing filter function without callback function

function evenFilter(arr){
    var newEvenArray=[]
    for(var i=0;i<arr.length;i++){
        
        if (arr[i]%2==0){
            newEvenArray.push(arr[i])
        }
        
    }
   return newEvenArray
}

console.log(evenFilter(arr))

//implementing fillter function using call back function

function primeNumber(arr,cb){
    var primeArray=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0 &&   ){

            cb(primeArray.push(arr[i]))
        }
    }
    return primeArray
}
console.log(primeNumber(arr,function(value){
    return value
}))