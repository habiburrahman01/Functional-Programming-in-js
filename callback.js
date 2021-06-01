console.log("Implementation of Call back function")

function sample(a,b,cb){
    var c=a+b
    var d=a-b
    var result=cb(c,d)
    return result
}
function sum(a,b){
    return a+b
}

var result= sample(5,8,sum)
console.log(result)


var result1=sample(7,4,function(c,d){
    return c-d
})
console.log(result1)


//call back function for calulating cgpa in genaral formula (not actual)
function cgpaCal(grade,credit,gpa){
    var tg=grade
    var tc=credit
    var result=gpa(tg,tc)
    return result
}


var result=cgpaCal(4,4,function(tg,tc){
    return (tg*tc)/tc
})
console.log(result)
