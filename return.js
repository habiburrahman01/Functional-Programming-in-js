//return function form another function

// function greet(msg){
//     return function(name){
//       return msg+', '+name
//     }
// }
// var greetings=greet("Hello")
// console.log(greetings("Hridoy"))


function power(p){
    return function(n){
        var result=1
        for(var i=0;i<p ;i++){
            result*=n
        }
        return result
    }
}
var base=power(10)
var result=base(2)
console.log(result)