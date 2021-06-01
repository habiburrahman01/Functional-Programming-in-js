// //map function in js
// arr=[1,2,3,4,5]

// var sqrArray=arr.map(function(value){
//    return value*value
// })
// console.log(sqrArray)

//General Implementaion of map function without callback function


// arr=[1,2,3,4,5]

// function myMap(arr){
//     var newArr=[]
//     for(var i=0;i<arr.length;i++){
       
//         newArr.push(arr[i]*arr[i])

//     }
//     return newArr
// }
// console.log(myMap(arr))

//Implementation of map function using callback function

var arr=[1,2,3,4,5]

function myMap(arr,cb){
    var newArr=[]
    for (var i=0;i<arr.length;i++){
       var temp= cb(arr[i])
       newArr.push(temp)
    }

    return newArr

}
console.log(myMap(arr,function(value){
    return value*value*10
}))