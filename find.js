//Find Function in js
var arr=[1,2,5,6,8,41,58,100,50,41,20,62,30,54]
var ar=[1,2,3,4,5]
// console.log(arr.find(function(value){
//     return value ==5
// }))

//  var result = ar.findIndex(function (value) {
//      return value === 0
//  })
// console.log(result)


function myFind(arr,cb){
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
   
}

console.log(myFind(ar,function(value){
        return value==5
}))
function myFind(arr,cb){
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i])){
            return i
        }
    }
   
}

console.log(myFind(arr,function(index){
        return index==6
}))

var result= ar.findIndex(function(value){
    return value==5
})
console.log(result)