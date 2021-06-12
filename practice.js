// //Pure function 
// var sqr=function (a){
//     return a*a
// }
// console.log(sqr(2))

// //first class function

// //function can be stored in a variable
// var sub = function(a,b){
//     return a-b
// }
// console.log(sub(10,5))

// //function can be stored in an arry
// var arr=[
//     sqr(3),sub(10,5)
// ]

// console.log(arr)
// console.log(typeof arr)

// //function can be stored in an object

// var obj={x:sqr(4),y:sub(50,20)}
// console.log(obj)

//function can be passed as an arguments
// function add(a,b){
//     return a+b
// }
// function mul(a,b,func){
//     return a*b*func(a,b)
// }

// console.log(mul(5,5,add))


//callback function


// function gc(grd,crdt,cgcal){
//     var tgrd=grd
//     var tc=crdt
//     return cgcal(tgrd,tc)

// }

// var result=gc(3,13,function(tgrd,tc){
//     return (tgrd*tc)/tc
// })
// console.log(result)


//filter function 
var arr=[1,5,6,7,8,2,3,4,9,10,15,18,19,60,30,25,22,24,29,23,33,35,34,38,40,56,57,52,51,59]

// oddNumber=arr.filter(function(value){
//     return value% 2!= 0
// })
// console.log(oddNumber)


// //implementing filter function without callback function
// function oddFilter(arr){
//     var oddArr=[]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2 != 0){
//             oddArr.push(arr[i])
//         }
//     }
//    return oddArr
// }

// console.log(oddFilter(arr))

// //implementing filter function using call back function

// function evenFilter(arr,cbb){
//     var evenNum=[]
//     for(var i=0;i<arr.length;i++){
//         if(cbb(arr[i])){
//             evenNum.push(arr[i])
//         }
//     }
//     return evenNum
// }
// var result=evenFilter(arr,function(value){
//     return value %2 ==0
// })
// //FILETER FUNCTION
//  var rslt=arr.filter(function(value){
//      return value %2==0
//  })
//  console.log(rslt)


// //map function 
// console.log(arr.map(function(value){
//     return value*value
// }))

// //implementing map function without callback function

// function sqrFunction(arr){
//     var sqr=[]
//     for(var i=0;i<arr.length;i++){
//         sqr.push(arr[i]*arr[i])
//     }
//     return sqr
// }

// console.log(sqrFunction(arr))

// //implementing sqr function using call back function

// function newSqrFun(arr,cb){
//     var newSqr=[]
//     for(var i=0;i<arr.length;i++){
//         newSqr.push(cb(arr[i]))
//     }
//     return newSqr
// }

// console.log(newSqrFun(arr,function(value){
//     return value * value
// }))

var num=[1,2,3,4,5]
// console.log(num.reduce(function(p,c){
    
//     return p+c
// },2))


//implementing reduce additon function without callback function

// function additon(a){
//     var sum=0
//     for(var i=0;i<a.length;i++){
//      sum=sum+a[i]
//     }
//     return sum
// }

// console.log(additon(num))

// //implementing reduce function using call back function 

// function myreduce(num,cb,acc){
//     for(var i=0;i<num.length;i++){
//         acc=cb(num[i],acc)
//     }
//     return acc
// }


// console.log(myreduce(num,function(p,c){
//     return p+c
// },0))

// console.log(myreduce(num,function(p,c){
//     return p*c
// },0))

// for each function in js

//ForEach Function

num.forEach(function(value,i,arr){
   console.log(value,i,arr)
})

//implementing ForEach function with call back function
function myForEach(num,cb){
    for(var i=0;i<num.length;i++){
        
       var myFun= cb(num[i],i,num)
    }
    return myFun
}

var result=myForEach(num,function(value,i,array){
    console.log(value,i,array)
})

