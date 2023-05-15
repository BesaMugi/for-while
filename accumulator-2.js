let arr = [1,2,3,4,5,6,7,8,9,10]

let accumulator = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        accumulator+=arr[i]
    }
}
console.log(accumulator)