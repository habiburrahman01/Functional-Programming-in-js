var arr=[5,12,5,67,51,2,8,3,1,4,30,25,15,10]
console.log(arr.sort(function(a,b){
    if (a>b){
        return 1
    }
    else if(b>a){
        return -1
    }
    else {
        return 0

    }
}))

console.log(arr.some(function(value){
    return value>0
}))

console.log(arr.every(function(value){
    return value%2==0
}))