/* Pure Function: We can call a function pure function which accepts the following conditon:

i) Its give always same result if its given input is same
ii) its does not cause any observeable side effect

*/

console.log(
    'Declareing an pure function: '
)


function sqr(n){
    return n*n
}
console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))


console.log('Not a pure function')

var a=10
function manipulate(){
 a=100
}
console.log('a :'+a)
manipulate()
console.log('a :'+a) 