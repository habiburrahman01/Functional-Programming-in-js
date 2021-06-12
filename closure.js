//when a we use outsider scope inside any block that is called closure

function a(){
    var x=10
return function(){
    console.log(x)
}
}
console.dir(a())   